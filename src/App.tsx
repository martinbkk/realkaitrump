import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Youtube, Twitter, Send, Menu, Volume2, VolumeX, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { ShootingStars } from './components/ui/shooting-stars';
import { ThreeDPhotoCarousel } from './components/ui/3d-carousel';
import { Link } from 'react-router-dom';
import { TikTokIcon } from './components/ui/tiktok-icon';
import { RainbowLink } from './components/ui/rainbow-link';
import { TextGenerateEffectDemo } from './components/ui/text-generate-effect-demo';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeroMuted, setIsHeroMuted] = useState(true);
  const [isYoutubeMuted, setIsYoutubeMuted] = useState(true);
  const [titleNumber, setTitleNumber] = useState(0);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const youtubeRef = useRef<HTMLIFrameElement>(null);
  const secondYoutubeRef = useRef<HTMLIFrameElement>(null);
  const qaYoutubeRef = useRef<HTMLIFrameElement>(null);

  const titles = useMemo(
    () => ["Confidence", "Sparkle", "GirlPower"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  // First YouTube video observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && youtubeRef.current) {
            youtubeRef.current.src = `https://www.youtube.com/embed/f3IRyyzg7Zo?enablejsapi=1&autoplay=1&mute=0&loop=0&playsinline=1`;
            setIsYoutubeMuted(false);
          } else if (!entry.isIntersecting && youtubeRef.current) {
            // Pause video when out of view by removing autoplay
            const currentSrc = youtubeRef.current.src;
            youtubeRef.current.src = currentSrc.replace('autoplay=1', 'autoplay=0');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (youtubeRef.current) {
      observer.observe(youtubeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleHeroMute = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !heroVideoRef.current.muted;
      setIsHeroMuted(!isHeroMuted);
    }
  };

  const toggleYoutubeMute = () => {
    setIsYoutubeMuted(!isYoutubeMuted);
    if (youtubeRef.current) {
      const currentSrc = youtubeRef.current.src;
      youtubeRef.current.src = currentSrc.replace(
        `mute=${isYoutubeMuted ? 0 : 1}`,
        `mute=${isYoutubeMuted ? 1 : 0}`
      );
    }
  };

  // Add video load handler with improved initialization
  useEffect(() => {
    const initVideo = async () => {
      if (heroVideoRef.current) {
        // Reset video state
        heroVideoRef.current.currentTime = 0;
        heroVideoRef.current.muted = false;
        setIsHeroMuted(false);

        try {
          // Try to play unmuted first
          await heroVideoRef.current.play();
        } catch (error) {
          console.error('Unmuted autoplay failed:', error);
          // If unmuted fails, try muted
          if (heroVideoRef.current) {
            heroVideoRef.current.muted = true;
            setIsHeroMuted(true);
            try {
              await heroVideoRef.current.play();
            } catch (secondError) {
              console.error('Muted autoplay also failed:', secondError);
            }
          }
        }
      }
    };

    // Initialize video when component mounts
    initVideo();
    
    // Add ended event listener for looping
    const videoElement = heroVideoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoLoop);
    }

    // Cleanup
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoLoop);
      }
    };
  }, []);

  // Video loop handler - always muted on loop
  const handleVideoLoop = () => {
    if (heroVideoRef.current) {
      // Ensure video is muted for loop
      heroVideoRef.current.muted = true;
      setIsHeroMuted(true);
      // Reset to start
      heroVideoRef.current.currentTime = 0;
      // Play muted
      heroVideoRef.current.play().catch(error => {
        console.error('Loop playback failed:', error);
      });
    }
  };

  // Second YouTube video observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && secondYoutubeRef.current) {
            secondYoutubeRef.current.src = `https://www.youtube.com/embed/UhFXpviOytY?enablejsapi=1&autoplay=1&mute=0&loop=0&playsinline=1`;
          } else if (!entry.isIntersecting && secondYoutubeRef.current) {
            // Pause video when out of view
            const currentSrc = secondYoutubeRef.current.src;
            secondYoutubeRef.current.src = currentSrc.replace('autoplay=1', 'autoplay=0');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (secondYoutubeRef.current) {
      observer.observe(secondYoutubeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Q&A video observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && qaYoutubeRef.current) {
            qaYoutubeRef.current.src = `https://www.youtube.com/embed/D8my9sMTGtA?enablejsapi=1&autoplay=1&mute=0&loop=0&playsinline=1`;
          } else if (!entry.isIntersecting && qaYoutubeRef.current) {
            // Pause video when out of view
            const currentSrc = qaYoutubeRef.current.src;
            qaYoutubeRef.current.src = currentSrc.replace('autoplay=1', 'autoplay=0');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (qaYoutubeRef.current) {
      observer.observe(qaYoutubeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-transparant">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div 
              className="relative w-12 h-12 cursor-pointer"
              onClick={scrollToTop}
            >
              <img
                src="https://yt3.googleusercontent.com/SywizCrys-E4OC5-9NB1EqAdB_WItdiOf1l5W54K3_S1NUTD2DUxOgGI5UaCguqsgMIsz1JH=s160-c-k-c0x00ffffff-no-rj"
                alt="Profile"
                className="absolute inset-0 w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 
              className="text-2xl font-bold animate-gradient bg-gradient-to-r from-[#FF1CF7] via-[#7517F8] to-[#2EB9DF] bg-[200%_auto] bg-clip-text text-transparent cursor-pointer"
              onClick={scrollToTop}
            >
              RealKaiTrump
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://x.com/kaitrump" target="_blank" rel="noopener noreferrer" className="relative group">
              <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 animate-rainbow blur-sm transition duration-200"></div>
              <div className="rounded-full p-2 flex items-center justify-center gap-2 bg-black/50 group-hover:scale-110 transition duration-200">
                <Twitter className="w-6 h-6" />
              </div>
            </a>
            <a href="https://instagram.com/kaitrumpgolfer" target="_blank" rel="noopener noreferrer" className="relative group">
              <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 animate-rainbow blur-sm transition duration-200"></div>
              <div className="rounded-full p-2 flex items-center justify-center gap-2 bg-black/50 group-hover:scale-110 transition duration-200">
                <Instagram className="w-6 h-6" />
              </div>
            </a>
            <a href="https://www.youtube.com/@kaitrump" target="_blank" rel="noopener noreferrer" className="relative group">
              <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 animate-rainbow blur-sm transition duration-200"></div>
              <div className="rounded-full p-2 flex items-center justify-center gap-2 bg-black/50 group-hover:scale-110 transition duration-200">
                <Youtube className="w-6 h-6" />
              </div>
            </a>
            <a href="https://tiktok.com/@thekaitrumpgolfer" target="_blank" rel="noopener noreferrer" className="relative group">
              <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 animate-rainbow blur-sm transition duration-200"></div>
              <div className="rounded-full p-2 flex items-center justify-center gap-2 bg-black/50 group-hover:scale-110 transition duration-200">
                <TikTokIcon className="w-6 h-6 text-white" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full transition-all duration-300 ${
          isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="container mx-auto px-4 py-4 flex flex-col items-center gap-4">
            <a href="https://x.com/kaitrump" target="_blank" rel="noopener noreferrer" className="relative group w-40">
              <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 animate-rainbow blur-sm transition duration-200"></div>
              <div className="rounded-full p-2 flex items-center justify-center gap-2 bg-black/50 group-hover:scale-110 transition duration-200">
                <Twitter className="w-6 h-6" />
                <span className="text-white">Twitter</span>
              </div>
            </a>
            <a href="https://instagram.com/kaitrumpgolfer" target="_blank" rel="noopener noreferrer" className="relative group w-40">
              <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 animate-rainbow blur-sm transition duration-200"></div>
              <div className="rounded-full p-2 flex items-center justify-center gap-2 bg-black/50 group-hover:scale-110 transition duration-200">
                <Instagram className="w-6 h-6" />
                <span className="text-white">Instagram</span>
              </div>
            </a>
            <a href="https://www.youtube.com/@kaitrump" target="_blank" rel="noopener noreferrer" className="relative group w-40">
              <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 animate-rainbow blur-sm transition duration-200"></div>
              <div className="rounded-full p-2 flex items-center justify-center gap-2 bg-black/50 group-hover:scale-110 transition duration-200">
                <Youtube className="w-6 h-6" />
                <span className="text-white">YouTube</span>
              </div>
            </a>
            <a href="https://tiktok.com/@thekaitrumpgolfer" target="_blank" rel="noopener noreferrer" className="relative group w-40">
              <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 animate-rainbow blur-sm transition duration-200"></div>
              <div className="rounded-full p-2 flex items-center justify-center gap-2 bg-black/50 group-hover:scale-110 transition duration-200">
                <TikTokIcon className="w-6 h-6 text-white" />
                <span className="text-white">TikTok</span>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Video */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background with stars */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
          <div className="stars absolute inset-0" />
        </div>

        {/* Multiple shooting star layers with different colors and speeds */}
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#00FF9E"
          trailColor="#00B8FF"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />

        <div className="absolute inset-0 flex justify-center">
          <div className="w-full max-w-3xl">
            <video 
              ref={heroVideoRef}
              className="w-full h-screen object-cover object-center rounded-xl"
              autoPlay 
              playsInline 
              preload="auto"
              onEnded={handleVideoLoop}
            >
              <source 
                src="https://ssscdn.io/ssstwitter/1881519775928779067/tthdTGOadNPfla3T"
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Sound Control */}
        <button 
          onClick={toggleHeroMute}
          className="absolute bottom-8 right-8 z-10 bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm"
        >
          {isHeroMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
        
        {/* Content */}
        <div className="relative h-full flex items-end justify-center pb-8">
          <div className="text-center px-4">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg flex flex-col items-center opacity-80">
              <span>A New Voice for</span>
              <span>a New Generation</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-transparent bg-clip-text bg-gradient-to-r from-color-1 via-color-3 to-color-5"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Text Generate Effect Section */}
      <section className="relative w-full overflow-hidden py-16">
        {/* Background with stars */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
          <div className="stars absolute inset-0" />
        </div>

        {/* Multiple shooting star layers with different colors and speeds */}
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#00FF9E"
          trailColor="#00B8FF"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <TextGenerateEffectDemo />
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="relative w-full overflow-hidden py-16">
        {/* Background with stars */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
          <div className="stars absolute inset-0" />
        </div>

        {/* Multiple shooting star layers with different colors and speeds */}
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#00FF9E"
          trailColor="#00B8FF"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-color-1 via-color-3 to-color-5 bg-clip-text text-transparent">
            My Grandpa became the President again
          </h2>
          <div className="mx-auto w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              ref={youtubeRef}
              className="w-full h-full"
              src="https://www.youtube.com/embed/f3IRyyzg7Zo?enablejsapi=1&loop=0"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button 
            onClick={toggleYoutubeMute}
            className="absolute bottom-24 right-8 z-10 bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm"
          >
            {isYoutubeMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </div>
      </section>

      {/* Second YouTube Video Section */}
      <section className="relative w-full overflow-hidden py-16">
        {/* Background with stars */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
          <div className="stars absolute inset-0" />
        </div>

        {/* Multiple shooting star layers with different colors and speeds */}
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#00FF9E"
          trailColor="#00B8FF"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-color-1 via-color-3 to-color-5 bg-clip-text text-transparent">
            The Presidential Inauguration (full vlog)
          </h2>
          <div className="mx-auto w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              ref={secondYoutubeRef}
              className="w-full h-full"
              src="https://www.youtube.com/embed/UhFXpviOytY?enablejsapi=1&loop=0"
              title="Second YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      
      {/* Q&A Video Section */}
      <section className="relative w-full overflow-hidden py-16">
        {/* Background with stars */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
          <div className="stars absolute inset-0" />
        </div>

        {/* Multiple shooting star layers with different colors and speeds */}
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#00FF9E"
          trailColor="#00B8FF"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-color-1 via-color-3 to-color-5 bg-clip-text text-transparent">
            Get to know me better... Q&A
          </h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              ref={qaYoutubeRef}
              className="w-full h-full"
              src="https://www.youtube.com/embed/D8my9sMTGtA?enablejsapi=1&loop=0"
              title="Q&A Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="relative w-full overflow-hidden py-16">
        {/* Background with stars */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
          <div className="stars absolute inset-0" />
        </div>

        {/* Multiple shooting star layers with different colors and speeds */}
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#00FF9E"
          trailColor="#00B8FF"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-color-1 via-color-3 to-color-5 bg-clip-text text-transparent">
            Kai Trump: A Life Beyond the Spotlight
          </h2>
          <div className="rounded-xl overflow-hidden">
            <ThreeDPhotoCarousel />
          </div>
        </div>
      </section>

      {/* Instagram Shorts Section */}
      <section className="relative w-full overflow-hidden py-16">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-color-1 via-color-3 to-color-5 bg-clip-text text-transparent">
            Latest YouTube Shorts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "https://www.youtube.com/embed/X8QPv23e8no",
              "https://www.youtube.com/embed/JWc6His6UEk",
              "https://www.youtube.com/embed/5UoZ06YFjTs",
              "https://www.youtube.com/embed/oZa6Qakh3u4",
              "https://www.youtube.com/embed/IFOV3Go5jRo",
              "https://www.youtube.com/embed/lDNdW11zwvM"
            ].map((url, index) => (
              <div key={index} className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-transparent backdrop-blur-sm transition-transform hover:scale-110">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`${url}?autoplay=0&controls=1&rel=0`}
                  allowFullScreen
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-white/10" />
              </div>
            ))}
          </div>
        </div>

        {/* Background with stars */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
          <div className="stars absolute inset-0" />
        </div>

        {/* Multiple shooting star layers with different colors and speeds */}
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#00FF9E"
          trailColor="#00B8FF"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />
      </section>

      {/* Footer */}
      <footer className="relative w-full overflow-hidden py-8 border-t border-white/10">
        {/* Background with stars */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
          <div className="stars absolute inset-0" />
        </div>

        {/* Multiple shooting star layers with different colors and speeds */}
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#00FF9E"
          trailColor="#00B8FF"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />

        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} RealKaiTrump. All rights reserved.
            </p>
            <nav className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link 
                to="/copyright-policy" 
                className="relative group flex items-center justify-center gap-2 px-8 py-2 text-white transition-colors hover:text-white overflow-hidden rounded-xl w-fit mx-auto"
              >
                <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition duration-200">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E323FF] via-[#7517F8] to-[#E323FF] animate-gradient bg-[length:200%_auto]"></div>
                </div>
                <span className="absolute inset-[1px] rounded-[11px] bg-black" />
                <span className="relative z-10">Copyright Policy</span>
              </Link>
              <Link 
                to="/privacy-policy" 
                className="relative group flex items-center justify-center gap-2 px-8 py-2 text-white transition-colors hover:text-white overflow-hidden rounded-xl w-fit mx-auto"
              >
                <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition duration-200">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E323FF] via-[#7517F8] to-[#E323FF] animate-gradient bg-[length:200%_auto]"></div>
                </div>
                <span className="absolute inset-[1px] rounded-[11px] bg-black" />
                <span className="relative z-10">Privacy Policy</span>
              </Link>
            </nav>
          </div>
        </div>
      </footer>

      <style>{`
        .stars {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes twinkle {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 15s linear infinite;
        }

        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-rainbow {
          background: linear-gradient(
            to right,
            #E323FF,
            #7517F8,
            #E323FF
          );
          background-size: 200% auto;
          animation: rainbow 4s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;