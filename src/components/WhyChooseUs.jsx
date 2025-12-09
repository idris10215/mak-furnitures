'use client';

import { motion } from 'framer-motion';
import { Armchair, Hammer, Sparkles, PencilRuler, ShieldCheck } from 'lucide-react';

const features = [
    {
        icon: <Armchair className="w-8 h-8" />,
        title: "Premium Materials",
        description: "Only the finest wood and fabrics"
    },
    {
        icon: <Hammer className="w-8 h-8" />,
        title: "Crafted in Bangalore",
        description: "Locally made with care"
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "10+ Years Mastery",
        description: "A decade of expertise"
    },
    {
        icon: <PencilRuler className="w-8 h-8" />,
        title: "Fully Custom Designs",
        description: "Tailored to your vision"
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Warranty Care",
        description: "Quality you can trust"
    }
];

export default function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="py-24 bg-(--color-brown-900) text-(--color-cream-50)">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="text-center mb-16">
                     <span className="block text-(--color-cognac-default) font-(--font-inter) text-lg font-bold tracking-widest uppercase mb-4">
                        Why Choose Mak
                    </span>
                    <h2 className="font-(--font-merriweather) text-4xl md:text-5xl font-bold mb-6">
                        Excellence in Every Detail
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors duration-300 flex flex-col items-center"
                        >
                            <div className="inline-flex items-center justify-center p-4 bg-(--color-cognac-default)/10 text-(--color-cognac-default) rounded-2xl mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="font-(--font-merriweather) text-lg font-bold mb-3">
                                {feature.title}
                            </h3>
                            <p className="font-(--font-inter) text-gray-300 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
