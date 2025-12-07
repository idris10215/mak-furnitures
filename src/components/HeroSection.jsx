import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide';

export default function HeroSection() {
  return (
    // Added -mt-20 to pull the hero section up behind the transparent navbar
    <section className="relative w-full h-[600px] md:h-[800px] flex items-start justify-start overflow-hidden -mt-20 ">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/image2.png" // Ensure your dark image is here
          alt="Luxury custom sofa in a dark, moody living room"
          fill
          className="w-full h-full object-cover object-[center_bottom]"
          priority
        />
        {/* Darker Overlay */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content Overlay (Your original alignment) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center text-(--color-cream-50) pt-20">
        
        <h1 className="font-(--font-merriweather) text-2xl md:text-2xl lg:text-5xl leading-tight drop-shadow-lg pt-10 ">
          Furniture That Feels Like You.
        </h1>
        
        <p className="font-(--font-inter) md:text-2xl mt-6 max-w-2xl drop-shadow-md text-(--color-cream-200)">
          Custom-made furniture handcrafted in Bangalore, designed to fit your home and your life perfectly.
        </p>
        
        {/* Buttons (Commented out as per your code) */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 font-(--font-inter)">
          {/* <Link ... > WhatsApp Chat </Link> */}
          {/* <Link ... > Call Now </Link> */}
        </div>
      </div>

    </section>
  );
}