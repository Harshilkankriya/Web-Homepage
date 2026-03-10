import React from 'react';
import { motion } from 'framer-motion';

const TrustedBySection = () => {
    const brands = ['YourStory', 'Inc42', 'Entrepreneur India', 'StartupIndia', 'VCCircle', 'TechSparks'];
    // Duplicate the list to create a seamless loop
    const marqueeItems = [...brands, ...brands];

    return (
        <section className="py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-base font-medium text-slate-400 mb-10 tracking-wide uppercase">Trusted by leading startup ecosystems</p>
                </motion.div>
            </div>

            {/* Marquee container */}
            <div className="relative w-full">
                {/* Left fade */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                {/* Right fade */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

                <div className="flex animate-marquee">
                    {marqueeItems.map((brand, idx) => (
                        <span
                            key={idx}
                            className="flex-shrink-0 text-xl font-bold text-slate-300 tracking-wide mx-12 whitespace-nowrap"
                        >
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBySection;
