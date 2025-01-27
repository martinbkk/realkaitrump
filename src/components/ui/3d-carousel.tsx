"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState, useCallback } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const keywords = [
  "night",
  "city",
  "sky",
  "sunset",
  "sunrise",
  "winter",
  "skyscraper",
  "building",
  "cityscape",
  "architecture",
  "street",
  "lights",
  "downtown",
  "bridge",
]

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (imgUrl: string, index: number) => void
    controls: any
    cards: string[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1650 : 2700
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((imgUrl, i) => (
            <motion.div
              key={`key-${imgUrl}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(imgUrl, i)}
            >
              <motion.img
                src={imgUrl}
                alt={`keyword_${i} ${imgUrl}`}
                layoutId={`img-${imgUrl}`}
                className="pointer-events-none w-full rounded-xl object-cover aspect-square"
                initial={{ filter: "blur(4px)" }}
                layout="position"
                animate={{ filter: "blur(0px)" }}
                transition={transition}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

export function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const controls = useAnimation();
  const cards = useMemo(
    () => [
      'https://pbs.twimg.com/media/GhwmCxqXwAAiOYk?format=jpg&name=large',
      'https://pbs.twimg.com/media/Ghv64mXWYAE5Nff?format=jpg&name=large',
      'https://pbs.twimg.com/media/Ghv1GoqXUAAXKJz?format=jpg&name=large',
      'https://pbs.twimg.com/media/GcDkVhcX0AAY0k8?format=jpg&name=small',
      'https://pbs.twimg.com/media/GcDfAPQXcAAu7pF?format=jpg&name=large',
      'https://pbs.twimg.com/media/GcDfAPQWoAA32am?format=jpg&name=large',
      'https://pbs.twimg.com/media/Gbu06ryXcBcTPsx?format=jpg&name=small',
      'https://pbs.twimg.com/media/Gbr9vzKbwAAAUO4?format=jpg&name=small',
      'https://pbs.twimg.com/media/GbodsJuW0AAPJMT?format=jpg&name=medium',
      'https://pbs.twimg.com/media/GbWkI1OWUAEBR8N?format=jpg&name=small',
      'https://pbs.twimg.com/media/Gc2M9B3XUAADjg_?format=jpg&name=large',
      'https://pbs.twimg.com/media/GbWkK5vXgAAMaIp?format=jpg&name=900x900',
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    
    if (isHovered) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 2000); // Change image every 2 seconds when hovered
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isHovered, cards.length]);

  const handleClick = (imgUrl: string, index: number) => {
    setActiveImg(imgUrl);
    setActiveIndex(index);
    setIsCarouselActive(false);
    controls.stop();
  };

  const handleNavigation = useCallback((direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (activeIndex - 1 + cards.length) % cards.length
      : (activeIndex + 1) % cards.length;
    setActiveImg(cards[newIndex]);
    setActiveIndex(newIndex);
  }, [activeIndex, cards]);

  const handleClose = () => {
    setActiveImg(null);
    setActiveIndex(0);
    setIsCarouselActive(true);
  };

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeImg}`}
            layout="position"
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={() => handleNavigation('prev')}
                className="absolute left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm text-white z-50"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <motion.img
                layoutId={`img-${activeImg}`}
                src={activeImg}
                className="w-auto h-auto max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg cursor-pointer object-contain"
                onClick={handleClose}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  willChange: "transform",
                }}
              />
              <button
                onClick={() => handleNavigation('next')}
                className="absolute right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm text-white z-50"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-[600px]">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  );
}