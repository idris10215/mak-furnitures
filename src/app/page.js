// 1. Import the component from your components folder
import HeroSection from '@/components/HeroSection';
import CustomizationProcess from '@/components/Customization';
import CategoryGrid from '@/components/CategoryGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  const specificIndices = [1, 6, 21, 35];
  
  const projects = specificIndices.map((index) => ({
    id: index,
    title: `Custom Project`,
    image: `/p${index}.png`,
    description: 'Bespoke custom furniture',
  }));

  return (
    <main className="min-h-screen bg-(--color-brown-900)">
      <HeroSection />
      
      {/* Customization Process Section (Sticky) */}
      <CustomizationProcess />

      {/* Category Grid Section */}
      <CategoryGrid />
      
      {/* Portfolio Section */}
      <Portfolio projects={projects} />

      {/* Trust/Why Choose Us Section */}
      <WhyChooseUs />

      {/* Footer */}
      <Footer />
    </main>
  );
}