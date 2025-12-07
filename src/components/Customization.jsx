'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const customizationOptions = [
  {
    id: 1,
    category: "Fabrics & Leathers",
    title: "A Palette of Texture",
    description: "Don't settle for 'standard grey.' Choose from premium fabrics. From spill-resistant performance velvets to buttery Italian leathers in warm tones. We match the upholstery to your life.",
    image: "/custom-fabrics.jpg",
  },
  {
    id: 2,
    category: "Wood Finishes",
    title: "Solid Wood, Your Way",
    description: "We work with solid Teak, Rosewood, and Oak. Whether you prefer a natural matte oil finish or a warm, rich stain, we hand-finish the wood to enhance its natural beauty.",
    image: "/custom-woods.jpg",
  },
  {
    id: 3,
    category: "Made to Measure",
    title: "Fits Your Space Perfectly",
    description: "Love the design but need it to fit a specific nook? We adjust dimensions, seat depths, and arm heights. Your furniture is built to your exact floor plan.",
    image: "/custom-design.jpg",
  },
];

export default function CustomizationProcess() {
  return (
    <section className="bg-(--color-gold-default) py-24 px-6 relative overflow-hidden text-(--color-cream-50)">
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="block text-(--color-cognac-default) text-2xl font-bold tracking-wider uppercase mb-4">
            Limitless Possibilities
          </span>
          {/* Title in light cream */}
          <h2 className=" text-3xl md:text-5xl font-bold text-(--color-cream-50) mb-6">
            You Design. We Craft.
          </h2>
          {/* Description in muted cream */}
          <p className=" text-lg font-bold text-(--color-cream-200) max-w-3xl mx-auto leading-relaxed">
            Every home is different. Why should your furniture be the same? Explore the elements you can customize at MAK to build a piece that is uniquely yours.
          </p>
        </div>

        {/* The Slideshow */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            effect={'fade'}
            fadeEffect={{ crossFade: true }}
            speed={1000}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            // Updated shadow to blend better with wood tone
            className="w-full rounded-3xl overflow-hidden shadow-2xl shadow-(--color-brown-900)/20"
          >
            {customizationOptions.map((item) => (
              <SwiperSlide key={item.id}>
                {/* Split Layout */}
                {/* 2. COLOR CHANGE: Inner text container is a slightly darker wood tone (tan-600) for depth */}
                <div className="flex flex-col md:flex-row h-full bg-(--color-gold-rich)">
                  
                  {/* Image Side */}
                  <div className="relative w-full md:w-1/2 h-[300px] md:h-auto min-h-[400px] md:min-h-[550px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    {/* Added subtle warm overlay to blend image with new background color */}
                    <div className="absolute inset-0 bg-(--color-brown-900)/10"></div>
                  </div>

                  {/* Text Side */}
                  <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                    <span className="block text-sm font-bold tracking-widest text-(--color-cognac-default) uppercase mb-4">
                      {item.category}
                    </span>
                    {/* Headlines in cream */}
                    <h3 className=" text-3xl md:text-4xl font-bold text-(--color-cream-50) mb-6">
                      {item.title}
                    </h3>
                    {/* Body text in muted cream */}
                    <p className="font-(--font-inter) text-lg text-(--color-cream-200) leading-relaxed mb-8">
                      {item.description}
                    </p>
                    
                    <div>
                      {/* Link updated for light text on dark background */}
                      <Link href="/customization" className="inline-flex items-center gap-2 text-(--color-cream-50) font-medium pb-2 border-b-2 border-(--color-cognac-default) hover:text-(--color-cognac-default) transition-colors">
                        Explore {item.category}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Styling for Swiper Dots (Updated for light dots on dark bg) */}
          <style jsx global>{`
            .swiper-pagination-bullet {
              background: var(--color-cream-200) !important; /* Light dots */
              opacity: 0.4;
              width: 10px;
              height: 10px;
              transition: all 0.3s ease;
            }
            .swiper-pagination-bullet-active {
              background: var(--color-cognac-default) !important; /* Cognac active dot */
              opacity: 1;
              width: 12px;
              height: 12px;
            }
          `}</style>
        </div>

      </div>
    </section>
  );
}