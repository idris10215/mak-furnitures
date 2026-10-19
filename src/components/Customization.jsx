'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    shortTitle: 'Wood',
    title: 'Wood Selection',
    description:
      'Choose from our premium selection of woods including Pine Wood, Neem Wood, Silver Wood, and Honne Wood. Hand-inspected for grain density, durability, and natural character.',
    imageLandscape: '/custom-wood-landscape.png',
    imagePortrait: '/custom-wood-portrait.png',
  },
  {
    id: 2,
    shortTitle: 'Fabric',
    title: 'Fabric & Leather',
    description:
      'From top-grain Italian leather to ultra-rich woven velvets and textured linens. We offer hundreds of tactile options that define enduring luxury without compromise.',
    imageLandscape: '/fabrics-landscape.png',
    imagePortrait: '/fabrics-portrait.png',
  },
  {
    id: 3,
    shortTitle: 'Color',
    title: 'Color Palette',
    description:
      'Explore an expansive spectrum of colors curated to complement your interior space. Whether bold statement tones or refined earthy neutrals, the palette is entirely yours.',
    imageLandscape: '/custom-colors-landscape.png',
    imagePortrait: '/custom-colors-portrait.png',
  },
  {
    id: 4,
    shortTitle: 'Comfort',
    title: 'Mattresses & Comfort',
    description:
      'Engineered for ergonomic support and pressure relief. Select from certified industry leaders tailored specifically to your posture and comfort preference.',
    imageLandscape: '/mattress-landscape.png',
    imagePortrait: '/mattress-portrait.png',
  },
  {
    id: 5,
    shortTitle: 'Custom',
    title: 'Custom Design',
    description:
      'Have an architect drawing, Pinterest inspiration, or custom room dimensions? Share your vision with our master artisans to engineer custom, one-of-a-kind furniture.',
    imageLandscape: '/custom-landscape.png',
    imagePortrait: '/custom-portrait.png',
  },
];

export default function CustomizationProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStep = steps[activeIndex];

  const handleStepChange = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  };

  return (
    <section 
      id="process" 
      className="relative bg-(--color-brown-900) text-(--color-cream-50) py-16 md:py-24 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-14 border-b border-white/10 pb-6 gap-4">
          <div>
            <span className="block font-(--font-inter) text-xs sm:text-sm font-bold tracking-[0.25em] text-(--color-cognac-default) uppercase mb-2">
              The Bespoke Journey
            </span>
            <h2 className="font-(--font-merriweather) text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              You Design. We Craft.
            </h2>
          </div>

          <p className="font-(--font-inter) text-(--color-cream-200) text-sm md:text-base max-w-md leading-relaxed">
            Every piece is made-to-order. Explore the elements you can customize to build furniture uniquely tailored to your home.
          </p>
        </div>

        {/* --- MOBILE COMPACT HEADER BAR (< lg) --- */}
        {/* Static indicators: left is current category badge, right is Swipe hint */}
        <div className="lg:hidden flex items-center justify-between mb-4">
          <div className="px-4 py-2 border border-(--color-gold-default) bg-(--color-gold-default)/15 text-(--color-gold-default) text-xs font-bold uppercase tracking-widest rounded-none select-none">
            {activeStep.shortTitle}
          </div>

          <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-(--color-cream-200)/80 select-none">
            <span>Swipe</span>
            <span className="text-sm font-mono leading-none">→</span>
          </div>
        </div>

        {/* --- MAIN ATELIER LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT: DESKTOP STEP LIST (Hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col space-y-1">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={step.id}
                  onClick={() => handleStepChange(index)}
                  className={`w-full text-left p-5 transition-all duration-300 border-l-2 rounded-none cursor-pointer ${
                    isActive
                      ? 'border-(--color-gold-default) bg-white/5 pl-6'
                      : 'border-white/10 hover:border-white/30 hover:bg-white/[0.02] pl-5'
                  }`}
                >
                  <h3 className={`font-(--font-merriweather) text-xl md:text-2xl font-bold transition-colors ${
                    isActive ? 'text-white mb-3' : 'text-(--color-cream-200)/60 hover:text-white'
                  }`}>
                    {step.title}
                  </h3>

                  {/* Active Step: Only ONE clean paragraph */}
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-(--font-inter) text-sm text-(--color-cream-200) leading-relaxed"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT: CINEMATIC VISUAL DISPLAY (Swipeable on touch/drag) */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Visual Frame with physical drag feedback */}
            <motion.div 
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(e, { offset }) => {
                // Requires an actual swipe movement (> 40px)
                if (Math.abs(offset.x) > 40) {
                  handleNext();
                }
              }}
              className="relative w-full aspect-[4/3] md:aspect-[16/11] rounded-none border border-white/15 bg-(--color-brown-900) overflow-hidden shadow-2xl select-none touch-pan-y cursor-grab active:cursor-grabbing"
            >
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.div
                    key={step.id}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 1.02,
                      zIndex: isActive ? 10 : 1,
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    {/* Desktop Landscape */}
                    <div className="hidden md:block absolute inset-0">
                      <Image
                        src={step.imageLandscape}
                        alt={`${step.title} Landscape`}
                        fill
                        className="object-cover"
                        priority={index <= 1}
                      />
                    </div>

                    {/* Mobile Portrait */}
                    <div className="block md:hidden absolute inset-0">
                      <Image
                        src={step.imagePortrait}
                        alt={`${step.title} Portrait`}
                        fill
                        className="object-cover"
                        priority={index <= 1}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile-only Content below Image (< lg) */}
            <div className="lg:hidden mt-4">
              <h3 className="font-(--font-merriweather) text-xl font-bold text-white mb-2">
                {activeStep.title}
              </h3>
              
              <p className="font-(--font-inter) text-sm text-(--color-cream-200) leading-relaxed">
                {activeStep.description}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}