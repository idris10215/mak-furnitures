'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

// Dummy Data Database
const categoryData = {
  sofas: {
    title: 'Sofas & Sectionals',
    subtypes: [
      { id: '3-seater', name: '3-Seater Sofas', image: '/3.png' },
      { id: '2-seater', name: '2-Seater Sofas', image: '/2-wide.png' },
      { id: '3-2-seater', name: '3-seater + 2-seater Sofas', image: '/3+2.png '},
      { id: '2-1-seater', name: '2-seater + 1-seater Sofas', image: '/2+1.png' },
      { id: 'custom-seater', name: 'Custom seater Sofas', image: '/royal-3.png' },
      {id: 'L-shaped', name:'L-shaped Sofas', image:'/L-shaped.png'},
      {id: 'L-shaped-custom', name:'L-shaped custom Sofas', image:'/L-custom.png'},
      {id: 'custom', name:'Custom designed Sofas', image:'/custom.png'},
    ]
  },
  bedroom: {
    title: 'Bedroom Collection',
    subtypes: [
      { id: 'king-beds', name: 'King Size Beds', image: '/image3.png' },
      { id: 'queen-beds', name: 'Queen Size Beds', image: '/image3.png' },
      { id: 'storage-beds', name: 'Hydraulic Storage Beds', image: '/image3.png' },
      { id: 'upholstered', name: 'Upholstered Beds', image: '/image2.png' },
    ]
  },
  dining: {
    title: 'Dining',
    subtypes: [
      { id: '6-seater', name: '6-Seater Sets', image: '/dining-6-seater.png' },
      { id: '4-seater', name: '4-Seater Sets', image: '/dining-4-seater.png' },
      { id: 'round-tables', name: 'Round Dining Tables', image: '/dining-round.png' },
    ]
  },
  recliners: {
    title: 'Recliners',
    subtypes: [
      { id: 'single-seater', name: 'Single Seaters', image: '/image5.png' },
      { id: 'motorized', name: 'Motorized Recliners', image: '/image5.png' },
      { id: 'manual', name: 'Manual Recliners', image: '/image5.png' },
    ]
  },
  chairs: {
    title: 'Accent Chairs',
    subtypes: [
      { id: 'wing-chairs', name: 'Wingback Chairs', image: '/image1.png' },
      { id: 'lounge-chairs', name: 'Lounge Chairs', image: '/image1.png' },
      { id: 'arm-chairs', name: 'Arm Chairs', image: '/image1.png' },
      { id: 'benches', name: 'Benches & Ottomans', image: '/image1.png' },
    ]
  }
};

export default function CategoryPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug; 
  console.log('Category Page Debug:', { slug, availableCategories: Object.keys(categoryData) });
  
  const data = categoryData[slug];

  if (!data) {
    return (
      <div className="min-h-screen bg-(--color-brown-900) flex items-center justify-center text-white">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
            <Link href="/" className="text-(--color-gold-default) hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-(--color-brown-900) text-(--color-cream-50) pb-24 relative">
      
      {/* Fixed Back Button */}
      <Link 
        href="/#categories" 
        className="fixed top-24 left-6 z-50 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:bg-(--color-gold-default) hover:text-(--color-brown-900) transition-colors group"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="hidden md:inline font-bold uppercase tracking-widest text-sm">Back</span>
      </Link>

      {/* Hero Header */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8"
        >
          <div>
            <span className="text-(--color-cognac-default) font-bold tracking-widest uppercase text-lg mb-2 block">
              Collection
            </span>
            <h1 className="font-(--font-merriweather) text-4xl md:text-6xl font-bold capitalize text-left">
              {data.title}
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Sub-types Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {data.subtypes.map((subtype, index) => (
            <motion.div
                key={subtype.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
            >
                <div 
                    className="group block cursor-default"
                >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 mb-4 text-center">
                    <Image
                        src={subtype.image}
                        alt={subtype.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-(--font-merriweather) group-hover:text-(--color-gold-default) transition-colors">
                    {subtype.name}
                </h3>
                </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
