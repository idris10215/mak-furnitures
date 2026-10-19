'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pillars = [
  {
    id: 1,
    title: 'Solid Hardwood',
    subtitle: 'Structural Integrity',
    description: 'Hand-selected Pine, Neem, Silver, and Honne woods — inspected for grain density, durability, and lifetime strength.',
  },
  {
    id: 2,
    title: 'Bangalore Atelier',
    subtitle: 'Direct Craftsmanship',
    description: 'Direct factory pricing with zero middleman markups. Every joint, frame, and stitch crafted locally with precision.',
  },
  {
    id: 3,
    title: '20+ Years Mastery',
    subtitle: 'Decades of Artistry',
    description: 'Over two decades perfecting bespoke upholstery, ergonomic seating comfort, and structural joinery.',
  },
  {
    id: 4,
    title: 'Bespoke Tailoring',
    subtitle: 'Made to Measure',
    description: 'Tailored to the exact millimeter of your floor plan with hundreds of curated Italian leathers, fabrics, and colors.',
  },
  {
    id: 5,
    title: 'Warranty Care',
    subtitle: 'Guaranteed Quality',
    description: 'Built to endure generations. Backed by our dedicated structural warranty and lifetime customer care.',
  },
];

export default function WhyChooseUs() {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const handleMobileNext = () => {
    setActiveMobileIndex((prev) => (prev + 1) % pillars.length);
  };

  const handleMobilePrev = () => {
    setActiveMobileIndex((prev) => (prev - 1 + pillars.length) % pillars.length);
  };

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-(--color-brown-900) text-(--color-cream-50) border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <span className="block text-(--color-cognac-default) font-(--font-inter) text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3">
            Why Choose Ghareeb Nawaz
          </span>
          <h2 className="font-(--font-merriweather) text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Excellence in Every Detail
          </h2>
        </div>

        {/* --- DESKTOP GRID (Hidden on mobile) --- */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 p-6 md:p-8 rounded-none transition-all duration-300 flex flex-col justify-between border-t-2 border-t-transparent hover:border-t-(--color-gold-default)"
            >
              <div>
                {/* Gold Top Accent Bar */}
                <div className="w-8 h-[2px] bg-(--color-gold-default) mb-6 group-hover:w-14 transition-all duration-300" />

                {/* Title */}
                <h3 className="font-(--font-merriweather) text-lg font-bold text-white mb-2 group-hover:text-(--color-gold-default) transition-colors">
                  {pillar.title}
                </h3>

                {/* Subtitle */}
                <p className="font-mono text-[11px] uppercase tracking-wider text-white/40 mb-4">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="font-(--font-inter) text-xs sm:text-sm text-(--color-cream-200)/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MOBILE CAROUSEL (md:hidden) --- */}
        <div className="md:hidden flex flex-col">
          {/* Swipeable Card */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -35) {
                handleMobileNext();
              } else if (offset.x > 35) {
                handleMobilePrev();
              }
            }}
            className="touch-pan-y cursor-grab active:cursor-grabbing select-none"
          >
            <div className="bg-white/[0.04] border border-white/15 p-6 sm:p-8 rounded-none relative overflow-hidden min-h-[220px] shadow-xl">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={pillars[activeMobileIndex].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-[2px] bg-(--color-gold-default) mb-5" />

                  <h3 className="font-(--font-merriweather) text-2xl font-bold text-white mb-1.5">
                    {pillars[activeMobileIndex].title}
                  </h3>

                  <p className="font-mono text-xs uppercase tracking-wider text-(--color-cognac-default) mb-4 font-semibold">
                    {pillars[activeMobileIndex].subtitle}
                  </p>

                  <p className="font-(--font-inter) text-sm text-(--color-cream-200) leading-relaxed">
                    {pillars[activeMobileIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Carousel Pagination Bars */}
          <div className="flex items-center justify-between mt-5 px-1">
            <div className="flex items-center gap-1.5">
              {pillars.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMobileIndex(i)}
                  aria-label={`Go to pillar ${i + 1}`}
                  className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer ${
                    i === activeMobileIndex
                      ? 'w-8 bg-(--color-gold-default)'
                      : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-white/40">
              Swipe to explore →
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
