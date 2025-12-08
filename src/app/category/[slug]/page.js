import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }) {
    const { slug } = await params;
    const category = categories.find((c) => c.slug === slug);

    if (!category) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-(--color-brown-900) text-(--color-cream-50)">
            
            {/* Header Hero */}
            <div className="relative h-[60vh] w-full flex items-center justify-center">
                <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-black/60" />
                
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="font-(--font-merriweather) text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
                        {category.title}
                    </h1>
                    <p className="font-(--font-inter) text-xl text-gray-200">
                        {category.description}
                    </p>
                </div>
            </div>

            {/* Breadcrumb / Back */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                 <Link href="/" className="inline-flex items-center text-(--color-cognac-default) hover:text-(--color-cream-50) transition-colors font-(--font-inter) font-bold text-sm tracking-widest uppercase">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to Collections
                 </Link>
            </div>

            {/* Subcategories Grid */}
            <section className="max-w-7xl mx-auto px-6 pb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.subcategories.map((sub) => (
                        <div key={sub.id} className="group cursor-pointer">
                            <div className="relative h-[400px] w-full mb-6 rounded-2xl overflow-hidden shadow-lg border border-(--color-cream-50)/10">
                                <Image
                                    src={sub.image}
                                    alt={sub.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                            </div>
                            <h3 className="font-(--font-merriweather) text-2xl font-bold text-white mb-2 group-hover:text-(--color-cognac-default) transition-colors">
                                {sub.title}
                            </h3>
                            <p className="text-gray-400 text-sm font-(--font-inter)">
                                View Collection →
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
