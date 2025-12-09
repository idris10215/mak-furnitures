'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

// Dummy Portfolio Data (Using requested placeholders)
const portfolioItems = [
  { id: 1, image: '/image1.png', size: 'large' },
  { id: 2, image: '/image2.png', size: 'small' },
  { id: 3, image: '/image1.png', size: 'small' },
  { id: 4, image: '/image2.png', size: 'large' },
  { id: 5, image: '/image1.png', size: 'small' },
  { id: 6, image: '/image2.png', size: 'small' },
  { id: 7, image: '/image1.png', size: 'large' },
  { id: 8, image: '/image2.png', size: 'small' },
  { id: 9, image: '/image1.png', size: 'small' },
];



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

      {/* Grid Gallery */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
             <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 group
                ${item.size === 'large' ? 'aspect-[3/4] md:row-span-2' : 'aspect-square'}
              `}
            >
              <Image
                src={item.image}
                alt={`Portfolio Item ${item.id}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* No Text Overlay as requested */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
