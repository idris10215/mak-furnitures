'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    id: 1,
    title: 'Wood Selection',
    subtitle: 'The Foundation of Strength',
    description: 'Choose from our premium selection of woods including Pine Wood, Neem Wood, Silver Wood, and Honne Wood. Each piece is selected for its grain, durability, and character.',
    image: '/image1.png', 
  },
  {
    id: 2,
    title: 'Fabric & Leather',
    subtitle: 'Touch of Elegance',
    description: 'From pristine Leather to rich velvets. We offer a curated collection of textures that define luxury without boundaries.',
    image: '/image2.png', 
  },
  {
    id: 3,
    title: 'Color Palette',
    subtitle: 'Spectrum of Style',
    description: 'Explore a vast array of colors to match your personalized theme. Whether bold statements or subtle tones, the choice is yours.',
    image: '/image3.png', 
  },
  {
    id: 4,
    title: 'Mattresses & Comfort',
    subtitle: 'Scientific Sleep',
    description: 'Select from top-tier comfort technologies: Sleep Well, Rest Well, Duroflex, Curlon, MM, and Feather. We prioritize your rest.',
    image: '/image4.jpg', 
  },
  {
    id: 6,
    title: 'Custom Design',
    subtitle: 'Your Vision, Our Craft',
    description: 'Have a specific design in mind? Share your sketches or ideas with us, and our artisans will bring your unique vision to life.',
    image: '/image1.png', 
  },
];

export default function CustomizationProcess() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="process" ref={containerRef} className="relative bg-(--color-brown-900) text-(--color-cream-50)">
      
      {/* HEADER SECTION - Static at top */}
      <div className="py-24 px-6 text-center">
        <span className="block text-(--color-cognac-default) font-(--font-inter) text-sm font-bold tracking-widest uppercase mb-4">
          The Process
        </span>
        <h2 className="font-(--font-merriweather) text-4xl md:text-6xl font-bold mb-6">
          You Design. We Craft.
        </h2>
        <p className="max-w-2xl mx-auto text-(--color-cream-200) text-lg font-(--font-inter)">
            Every piece involves a journey. Explore the elements you can customize to build something uniquely yours.
        </p>
      </div>

      {/* STICKY SCROLL CONTAINER (Unified for Mobile & Desktop) */}
      <div className="relative max-w-7xl mx-auto px-6 pb-24 md:pb-32">
        {steps.map((step, index) => {
             return (
                 <StepCard key={step.id} step={step} index={index} total={steps.length} />
             );
        })}
      </div>

    </section>
  );
}

function StepCard({ step, index, total }) {
    return (
        <div 
            className="sticky top-20 md:top-24 min-h-auto md:min-h-[500px] mb-0 last:mb-0"
            style={{ zIndex: index + 1 }}
        >
            <div className="relative w-full h-[500px] md:h-[550px] rounded-3xl overflow-hidden bg-black border border-(--color-cream-50)/10 shadow-2xl">
                
                {/* Background Image */}
                <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover opacity-60"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent">
                    
                    <div className="w-full md:w-1/2 space-y-4 md:space-y-6 mt-auto md:mt-0 pb-6 md:pb-0">
                        <div className="flex items-center gap-3 md:gap-4 text-(--color-gold-default)">
                             <span className="text-sm font-bold tracking-widest uppercase">0{index + 1} / 0{total}</span>
                             <div className="h-[1px] w-8 md:w-12 bg-(--color-gold-default)"></div>
                             <span className="text-sm font-bold tracking-widest uppercase">{step.title}</span>
                        </div>
                        
                        <h3 className="font-(--font-merriweather) text-3xl md:text-5xl font-bold text-white leading-tight">
                            {step.subtitle}
                        </h3>
                        
                        <p className="font-(--font-inter) text-base md:text-lg text-gray-300 leading-relaxed max-w-md line-clamp-4 md:line-clamp-none">
                            {step.description}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}