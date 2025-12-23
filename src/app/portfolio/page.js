'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';





export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-(--color-brown-900) text-(--color-cream-50) pb-24 relative">
       
       {/* Fixed Back Button */}
      <Link 
        href="/#portfolio" 
        className="fixed top-24 left-6 z-50 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:bg-(--color-gold-default) hover:text-(--color-brown-900) transition-colors group"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="hidden md:inline font-bold uppercase tracking-widest text-sm">Back</span>
      </Link>
      
      {/* Hero Header */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-(--color-cognac-default) font-bold tracking-widest uppercase text-lg mb-2 block">
              Our Masterpieces
            </span>
            <h1 className="font-(--font-merriweather) text-4xl md:text-6xl font-bold">
              Full Portfolio
            </h1>
          </div>
          <p className="text-(--color-cream-200) max-w-md text-sm md:text-base">
            A showcase of our finest custom furniture projects, crafted with precision and passion.
          </p>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {Array.from({ length: 36 }).map((_, index) => {
            const id = index + 1;
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }} // Stagger based on column position approx
                viewport={{ once: true }}
                className="break-inside-avoid relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 group mb-6"
              >
                <div className="relative w-full">
                  <Image
                    src={`/p${id}.png`}
                    alt={`Portfolio Item ${id}`}
                    width={800}
                    height={1000} // Aspect ratio will be natural, mostly purely for next/image optimization
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

    </main>
  );
}
