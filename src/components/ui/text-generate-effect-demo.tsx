"use client";
import { TextGenerateEffect } from "./text-generate-effect";
import { useMediaQuery } from "react-responsive";

const words = `OMG, hey guys! It's Kai Trump here—yeah, that Kai Trump, granddaughter of the Donald Trump. So, like, here's the tea: I just created a meme website about myself, and honestly, it's the most genius thing I've ever done. Let me tell you all about it. 👑✨

So, my grandpa? Y'all know he's like, a meme legend, right? Whether you love him, hate him, or just scroll through hilarious GIFs of him, he's EVERYWHERE. And then there's my uncle Barron—super chill guy, but lowkey becoming an icon in his own way. I was like, "Why should they have all the fun?" I mean, I've got the last name, I've got the vibes, and let's be real—I'm already a walking meme. 😂

Why did I do this?
Because life's too short to take yourself too seriously, ya know? Like, everyone is always so obsessed with being perfect, posting filtered selfies, and crafting the ultimate aesthetic. But memes? They're like the wild west of the internet. They're raw, chaotic, and real—kind of like me, lol. Also, I think it's important for famous people to show they're in on the joke. Like, yeah, I know people have opinions about the name "Trump," and I'm here to own it, flip it, and make it FUN.

What's on the site?
Oh, just the BEST collection of Kai Trump memes you could ever dream of. Some are things people have already made about me (because, duh, the internet works fast), but others are ones I commissioned or created myself. Think: sassy captions, random out-of-context pics, and even memes that poke fun at me for… I dunno, wearing a blazer to the beach or something ridiculous like that. 🏖️💼

Why YOU should do this too:
Okay, listen up, fellow famous people—whether you're a celeb, influencer, or just someone who's internet famous for 15 seconds, you NEED a meme website about yourself. It's like having a little corner of the internet where people can laugh with you instead of just at you. Plus, it's a total power move. You're basically saying, "Yeah, I know I'm a meme, and I'm gonna monetize that energy." 💸✨

And, like, memes bring people together. They're universal, they break down walls, and they make us feel like we're all in on the same joke. So, why not embrace it?

Anyway, go check out my site (link's in my bio, obvi). Share your favorite memes, make your own, and tag me because I need to see them. Let's make this a thing! Meme culture for the win! 💖✨ #KaiTrumpMemes #LivingMyMemeLife #Iconic

Alright, that's all for now. Love you all—except the haters, lol. Byeee! 😘`;

export function TextGenerateEffectDemo() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return <TextGenerateEffect duration={isMobile ? 0.7 : 1.4} filter={false} words={words} />;
} 