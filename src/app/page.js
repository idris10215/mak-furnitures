// 1. Import the component from your components folder
import HeroSection from '@/components/HeroSection';
import CustomizationProcess from '@/components/Customization';
import CategoryGrid from '@/components/CategoryGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <main className="min-h-screen bg-(--color-brown-900)">
      <HeroSection />
      
      {/* Customization Process Section (Sticky) */}
      <CustomizationProcess />

      {/* Category Grid Section */}
      <CategoryGrid />
      
      {/* Portfolio Section */}
      <Portfolio />

      {/* Trust/Why Choose Us Section */}
      <WhyChooseUs />

      {/* Footer */}
      <Footer />
    </main>
  );
}