'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Inline Icon to avoid dependency issues
const ArrowUpRightIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M7 17l9.2-9.2M17 17V7H7" />
  </svg>
);

const categories = [
  {
    id: 'living-room',
    title: 'Sofas',
    description: 'The heart of your home.',
    image: '/image1.png', 
    link: '/category/sofas',
    desktopClass: 'col-span-2 row-span-1',
  },
  {
    id: 'bedroom',
    title: 'Beds',
    description: 'Sanctuary of comfort.',
    image: '/image3.png', 
    link: '/category/bedroom',
    desktopClass: 'col-span-2 row-span-1',
  },
  {
    id: 'dining',
    title: 'Dining',
    description: 'Gather around excellence.',
    image: '/image2.png', 
    link: '/category/dining',
    desktopClass: 'col-span-2 row-span-1',
  },
  {
    id: 'recliners',
    title: 'Recliners',
    description: 'Relaxation refined.',
    image: '/image5.png', 
    link: '/category/recliners',
    desktopClass: 'col-span-1 row-span-1',
  },
   {
    id: 'accents',
    title: 'Accent Chairs',
    description: 'Statement pieces.',
    image: '/image1.png', 
    link: '/category/chairs',
    desktopClass: 'col-span-1 row-span-1',
  }
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="pt-12 pb-12 bg-(--color-brown-900) text-(--color-cream-50)">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12 text-center">
            <span className="block text-(--color-cognac-default) font-(--font-inter) text-lg font-bold tracking-widest uppercase mb-4">
                Our Collections
            </span>
            <h2 className="font-(--font-merriweather) text-4xl md:text-5xl font-bold">
                Curated for Luxury
            </h2>
        </div>

        {/* --- DESKTOP BENTO GRID (md:grid) --- */}
        <div className="hidden md:grid grid-cols-4 auto-rows-[300px] gap-6">
            {categories.map((category) => (
                <Link 
                    key={category.id} 
                    href={category.link}
                    className={`group relative rounded-3xl overflow-hidden shadow-lg border border-white/5 ${category.desktopClass}`}
                >
                    <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="font-(--font-merriweather) text-2xl font-bold text-white mb-2">{category.title}</h3>
                                <p className="text-(--color-cream-200) text-sm font-(--font-inter) opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-[80%]">
                                    {category.description}
                                </p>
                            </div>
                            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm group-hover:bg-(--color-cognac-default) transition-colors">
                                <ArrowUpRightIcon className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        {/* --- MOBILE STICKY STACK (md:hidden) --- */}
        <div className="md:hidden relative pb-12">
             {categories.map((category, index) => (
                <div 
                    key={category.id}
                    className="sticky top-20 mb-0 last:mb-0"
                    style={{ zIndex: index + 1 }}
                >
                    <div className="relative h-[350px] w-full rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl">
                         <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-cover opacity-60"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                         
                         <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="font-(--font-merriweather) text-3xl font-bold text-white mb-2">{category.title}</h3>
                             <p className="text-(--color-cream-200) text-base font-(--font-inter)">
                                {category.description}
                            </p>
                             <div className="mt-6">
                                <Link href={category.link} className="inline-flex items-center gap-2 text-(--color-gold-default) font-bold uppercase tracking-widest text-sm">
                                    Explore Collection <ArrowUpRightIcon className="w-4 h-4" />
                                </Link>
                            </div>
                         </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
