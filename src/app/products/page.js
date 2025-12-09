'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

// Dummy Data for Stacked Rows
const productCategories = [
  {
    id: 'living-room',
    title: 'Living Room Collection',
    items: [
      { id: 'lr-1', name: 'Velvet Sectional', image: '/image1.png', price: '₹85,000' },
      { id: 'lr-2', name: 'Leather Recliner', image: '/image5.png', price: '₹45,000' },
      { id: 'lr-3', name: 'Marble Coffee Table', image: '/image1.png', price: '₹32,000' },
      { id: 'lr-4', name: 'Accent Armchair', image: '/image5.png', price: '₹28,000' },
      { id: 'lr-5', name: 'TV Console', image: '/image1.png', price: '₹42,000' },
    ]
  },
  {
    id: 'bedroom',
    title: 'Bedroom Sanctuary',
    items: [
      { id: 'br-1', name: 'King Size Bed', image: '/image2.png', price: '₹95,000' },
      { id: 'br-2', name: 'Bedside Table', image: '/image3.png', price: '₹12,000' },
      { id: 'br-3', name: 'Wardrobe', image: '/image2.png', price: '₹110,000' },
      { id: 'br-4', name: 'Dressing Unit', image: '/image3.png', price: '₹35,000' },
    ]
  },
  {
    id: 'dining',
    title: 'Dining & Kitchen',
    items: [
      { id: 'dn-1', name: '6-Seater Dining Set', image: '/image4.jpg', price: '₹120,000' },
      { id: 'dn-2', name: 'Bar Stool', image: '/image1.png', price: '₹15,000' },
      { id: 'dn-3', name: 'Crockery Unit', image: '/image4.jpg', price: '₹55,000' },
    ]
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-(--color-brown-900) text-(--color-cream-50) pb-24">
      
      {/* Hero Header */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-(--color-cognac-default) font-bold tracking-widest uppercase text-sm mb-2 block">
              Catalog
            </span>
            <h1 className="font-(--font-merriweather) text-4xl md:text-6xl font-bold">
              Explore Collections
            </h1>
          </div>
          <p className="text-(--color-cream-200) max-w-md text-sm md:text-base">
            Discover our meticulously crafted furniture pieces, designed to elevate every corner of your home.
          </p>
        </div>
      </section>

      {/* Stacked Carousels */}
      <div className="flex flex-col gap-16 md:gap-24">
        {productCategories.map((category, index) => (
          <section key={category.id} className="relative pl-6 md:pl-0">
            
            <div className="max-w-7xl mx-auto mb-8 pr-6 md:pr-0 flex items-center justify-between">
              <h2 className="font-(--font-merriweather) text-2xl md:text-3xl font-bold">
                {category.title}
              </h2>
              <Link href={`/category/${category.id}`} className="hidden md:flex items-center gap-2 text-(--color-gold-default) hover:text-white transition-colors text-sm font-bold uppercase tracking-widest group">
                View All <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

            {/* Swiper Container */}
            <div className="w-full relative group/carousel">
              
              {/* Navigation Wrapper - Padded Container */}
              <div className="max-w-[1400px] mx-auto relative px-4 md:px-12">
                
                {/* Prev Button */}
                <button className={`custom-prev-${index} absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-(--color-gold-default) hover:text-(--color-brown-900) transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0`}>
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Next Button */}
                <button className={`custom-next-${index} absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-(--color-gold-default) hover:text-(--color-brown-900) transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0`}>
                  <ChevronRight className="w-6 h-6" />
                </button>

                <Swiper
                  modules={[Navigation]}
                  spaceBetween={16}
                  slidesPerView={1.2}
                  navigation={{
                    nextEl: `.custom-next-${index}`,
                    prevEl: `.custom-prev-${index}`,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 2.2, spaceBetween: 20 },
                    1024: { slidesPerView: 3.2, spaceBetween: 24 },
                    1280: { slidesPerView: 4, spaceBetween: 30 },
                  }}
                  className="!overflow-visible"
                >
                  {category.items.map((item) => (
                    <SwiperSlide key={item.id}>
                      <Link href={`/product/${item.id}`} className="block group/card">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white/5 border border-white/5 mb-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/0 transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-(--font-merriweather) text-lg text-white group-hover/card:text-(--color-gold-default) transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-(--color-cream-200) text-sm font-(--font-inter)">
                            {item.price}
                          </p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                  
                  {/* "See More" Slide */}
                  <SwiperSlide>
                    <Link href={`/category/${category.id}`} className="block h-full">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center p-6 group/more hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-full border border-(--color-gold-default) flex items-center justify-center mb-4 text-(--color-gold-default) group-hover/more:scale-110 transition-transform">
                          <ArrowUpRight className="w-6 h-6" />
                        </div>
                        <span className="font-(--font-merriweather) text-xl text-white">
                          View All<br/>{category.title}
                        </span>
                      </div>
                    </Link>
                  </SwiperSlide>

                </Swiper>
              </div>

            </div>
          </section>
        ))}
      </div>

    </main>
  );
}
