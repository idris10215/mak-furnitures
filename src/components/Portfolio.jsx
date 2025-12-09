'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const projects = [
  {
    id: 1,
    title: 'Luxury Living Room',
    image: '/image1.png',
    description: 'Bespoke sofa set in Italian leather',
  },
  {
    id: 2,
    title: 'Modern Bedroom',
    image: '/image2.png',
    description: 'Custom bed frame with premium upholstery',
  },
  {
    id: 3,
    title: 'Elegant Dining',
    image: '/image4.jpg',
    description: 'Handcrafted dining set for 8',
  },
  {
    id: 4,
    title: 'Minimalist Lounge',
    image: '/image1.png', // Reusing placeholder for demo
    description: 'Contemporary lounge chair design',
  },
  {
    id: 5,
    title: 'Classic Study',
    image: '/image2.png', // Reusing placeholder for demo
    description: 'Solid wood study table and chair',
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-(--color-brown-900) text-(--color-cream-50) relative border-t border-(--color-cream-50)/5 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
          <div className="text-center md:text-left">
            <span className="block text-(--color-cognac-default) font-(--font-inter) text-lg font-bold tracking-widest uppercase mb-4">
              Our Work
            </span>
            <h2 className="font-(--font-merriweather) text-4xl md:text-5xl font-bold">
              Portfolio
            </h2>
          </div>
          
          <Link href="/portfolio" className="hidden md:inline-block border-b border-(--color-gold-default) text-(--color-gold-default) pb-1 hover:text-white hover:border-white transition-colors">
             View Full Gallery →
          </Link>
        </div>

        {/* --- DESKTOP STATIC GRID (md:grid) --- */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.slice(0, 4).map((project) => (
                <div key={project.id} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>
            ))}
        </div>

        {/* --- MOBILE GRID (md:hidden) --- */}
        <div className="md:hidden flex flex-col gap-8">
          
          <div className="grid grid-cols-2 gap-4">
             {/* First Item - Full Width */}
             {projects.length > 0 && (
                <div className="col-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                    <Image
                      src={projects[0].image}
                      alt={projects[0].title}
                      fill
                      className="object-cover"
                    />
                </div>
             )}

             {/* Next Two Items - Half Width */}
             {projects.slice(1, 3).map((project) => (
                <div key={project.id} className="col-span-1 relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                </div>
             ))}
          </div>

          <div className="text-center">
             <Link href="/portfolio" className="inline-block border-b border-(--color-gold-default) text-(--color-gold-default) pb-1 hover:text-white transition-colors">
                View Full Gallery →
            </Link>
          </div>
        </div>



      </div>
    </section>
  );
}
