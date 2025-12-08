'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-(--color-brown-900) text-(--color-cream-50) relative border-t border-(--color-cream-50)/5">
        
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                     <span className="block text-(--color-cognac-default) font-(--font-inter) text-sm font-bold tracking-widest uppercase mb-4">
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

            {/* Placeholder Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Visual Placeholder 1 */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="aspect-[4/3] bg-white/5 rounded-2xl flex items-center justify-center border border-white/10"
                >
                    <p className="text-gray-500 font-(--font-inter)">Project Showcase #1</p>
                </motion.div>

                 {/* Visual Placeholder 2 */}
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="aspect-[4/3] bg-white/5 rounded-2xl flex items-center justify-center border border-white/10"
                >
                    <p className="text-gray-500 font-(--font-inter)">Project Showcase #2</p>
                </motion.div>
            </div>

             <div className="mt-8 text-center md:hidden">
                <Link href="/portfolio" className="inline-block border-b border-(--color-gold-default) text-(--color-gold-default) pb-1">
                    View Full Gallery →
                </Link>
            </div>

        </div>
    </section>
  );
}
