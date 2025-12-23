'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      {id: '3-seater-sofa-with-extendable-footrest', name:'3 seater Sofa with extendable footrest', image:'/3-seater-recliner-sofa-with-extendable-footrest.png'},
      {id: 'custom', name:'Custom designed Sofas', image:'/custom.png'},
    ]
  },
  bedroom: {
    title: 'Bedroom Collection',
    subtypes: [
      { id: 'modern-upholstered-bed', name: 'Modern upholstered beds', image: '/modern-upholstered-bed.png' },
      { id: 'modern-upholstered-bed-with-footboard', name: 'Modern upholstered beds with footboard', image: '/modern-upholstered-bed-with-footboard.png' },
      { id: 'upholstered-luxury-bed', name: 'Upholstered luxury beds', image: '/upholstered-luxury-bed.png' },
      { id: 'sofa-cum-bed', name: 'Sofa cum beds', image: '/sofa-cum-bed.png' },
      { id: 'l-shaped-sofa-cum-bed-with-storage', name: 'L-shaped sofa cum beds with storage', image: '/l-shaped-sofa-cum-bed-with-storage.png' },
    ]
  },
  dining: {
    title: 'Dining',
    subtypes: [
      { id: '6-seater', name: '6-Seater Sets', image: '/6-seater-dining.png' },
      { id: '4-seater', name: '4-Seater Sets', image: '/4-seater-dining.png' },
      { id: 'round-tables', name: 'Round Dining Tables', image: '/round-dining.png' },
    ]
  },
  recliners: {
    title: 'Recliners',
    subtypes: [
      { id: 'single-seater', name: 'Single Seaters', image: '/1-seater-recliner.png' },
      { id: '2-seater', name: '2 Seater Recliners', image: '/2-seater-recliner.png' },
      { id: '3-seater', name: '3 Seater Recliners', image: '/3-seater-recliner.png' },
    ]
  },
  chairs: {
    title: 'Accent Chairs',
    subtypes: [
      { id: 'sofa-chair', name: 'Sofa Chairs', image: '/sofa-chair.png' },
      { id: 'chair-with-ottoman', name: 'Chair with Ottoman', image: '/chair-with-ottomon.png' },
      { id: 'upholstered-chair', name: 'Upholstered Chairs', image: '/upholstered-chair.png' },
      { id: 'luxury-sofa-chairs', name: 'Luxury Sofa Chairs', image: '/luxury-sofa-chair.png' },
      { id: '2-chairs-with-ottomon', name: '2 Chairs set with Ottoman', image: '/2-chairs-with-ottomon.png' },
      { id: 'rocking-chair', name: 'Rocking Chairs', image: '/rocking-chair-with-ottomon.png' },
      { id: 'custom-chair', name: 'Custom designed Chairs', image: '/custom-designed-chairs.png' },
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
        <div 
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
        </div>
      </section>

      {/* Sub-types Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.subtypes.map((subtype, index) => (
            <div
                key={subtype.id}
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
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
