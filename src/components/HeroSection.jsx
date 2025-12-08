'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effects
  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '50%']); // Text moves faster (appears deeper)
  const yForeground = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']); // Foreground moves up slightly

  return (
    <section ref={containerRef} className="relative w-full h-[120vh] -mt-24 overflow-hidden bg-(--color-brown-900)">
      
      {/* 1. LAYER - BACKGROUND VISUAL */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-(--color-brown-900) z-10" />
        <Image
          src="/image2.png" // Use a wide shot of a room
          alt="Luxury Interior Background"
          fill
          className="object-cover object-left md:object-center opacity-60"
          priority
        />
      </motion.div>

      {/* 2. LAYER - BIG TYPOGRAPHY (The 'Behind' Element) */}
      <motion.div 
        style={{ y: yText }}
        className="absolute inset-0 z-10 hidden md:flex items-center justify-center pointer-events-none select-none md:pb-32"
      >
        <span className="font-(--font-merriweather) font-black text-[12vw] md:text-[15vw] tracking-tighter text-(--color-cream-50) opacity-10 mix-blend-overlay leading-none text-center uppercase whitespace-nowrap pt-20">
          Mak <br className="md:hidden" /> Luxury
        </span>
      </motion.div>

      {/* 3. LAYER - FOREGROUND OBJECT (The 'Front' Element) */}
      {/* 
          IMPORTANT: For the true "Depth" effect, replace the src below with a PNG of a sofa on a transparent background.
          Currently using a placeholder logic or the same image to demonstrate positioning.
      */}
      <motion.div 
        style={{ y: yForeground }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-6xl h-[60%] md:h-[70%] pointer-events-none"
      >
        <div className="relative w-full h-full">
            {/* 
                TODO: Replace '/image4.jpg' with a transparent PNG (e.g., '/sofa-cutout.png') 
                to see the text "MAK" appear partially behind this sofa. 
            */}
           {/* Placeholder for the user to understand where the hidden text goes behind */}
           {/* <Image
            src="/image4.jpg" 
            alt="Foreground Furniture Piece"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
          /> */}
        </div>
      </motion.div>

      {/* 4. LAYER - CONTENT & CTA */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
           className="space-y-6 max-w-4xl"
        >
            <span className="inline-block py-1 px-3 border border-(--color-cognac-default) rounded-full text-(--color-cognac-default) text-xs sm:text-sm tracking-[0.2em] font-medium backdrop-blur-sm">
                EST. 2003 • BANGALORE
            </span>
            
            <h1 className="font-(--font-roboto-slab) text-4xl sm:text-4xl font-bold md:text-6xl lg:text-7xl leading-tight text-(--color-cream-50) drop-shadow-2xl">
              Design That <br/> Defines <span className="font-bold text-(--color-gold-default)">You.</span>
            </h1>

            <p className="font-(--font-inter) text-sm sm:text-lg md:text-xl font-bold text-(--color-cream-200) max-w-xl mx-auto leading-relaxed px-4">
              Experience the art of bespoke furniture. Handcrafted to perfection, designed for your lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-6 sm:mt-8 w-full px-6">
                <Link 
                    href="/customization"
                    className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-(--color-cream-50) text-(--color-brown-900) font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
                >
                    <span className="relative z-10 group-hover:text-(--color-cream-50) transition-colors text-sm sm:text-base">Start Designing</span>
                    <div className="absolute inset-0 bg-(--color-cognac-default) transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                </Link>
                
                <Link 
                    href="/collection"
                    className="group px-6 sm:px-8 py-3 sm:py-4 border border-(--color-cream-50/30) text-(--color-cream-50) font-medium rounded-full hover:bg-(--color-cream-50/10) backdrop-blur-md transition-all hover:border-(--color-cream-50) text-sm sm:text-base"
                >
                    View Collection
                </Link>
            </div>
        </motion.div>
      </div>

       {/* Scroll Indicator */}
       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1, duration: 1 }}
         className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
       >
         <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-(--color-cream-50) to-transparent opacity-50"></div>
       </motion.div>

    </section>
  );
}