import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Laptop, Building2, Cloud, Factory, MapPin } from 'lucide-react';

const WhoCanApplySection = () => {
    const categories = [
        { name: "D2C Brands", icon: <ShoppingBag className="w-7 h-7" />, desc: "Consumer product brands selling directly" },
        { name: "Consumer Startups", icon: <Laptop className="w-7 h-7" />, desc: "Consumer tech & mobile-first ventures" },
        { name: "MSMEs", icon: <Building2 className="w-7 h-7" />, desc: "Micro, small & medium enterprises" },
        { name: "SaaS Startups", icon: <Cloud className="w-7 h-7" />, desc: "B2B & B2C SaaS platforms" },
        { name: "Manufacturing", icon: <Factory className="w-7 h-7" />, desc: "Hardware & deep-tech manufacturing" },
        { name: "Bharat-focused", icon: <MapPin className="w-7 h-7" />, desc: "Tier 2/3 city focused ventures" },
    ];

    return (
        <section id="who-can-apply" className="py-32 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <span className="inline-block text-red-500 font-semibold tracking-wide uppercase text-base mb-4">
                            Eligibility
                        </span>
                        <h2 className="text-4xl md:text-5xl text-slate-900 mb-8 leading-tight">
                            Built for founders{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 italic">across sectors</span>
                        </h2>
                        <p className="text-xl text-slate-500 mb-12 leading-relaxed">
                            Whether you're building in fintech, agritech, D2C, or deep tech — if you're solving a real problem, we want to hear your pitch.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {categories.map((cat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                                    className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors group cursor-default"
                                >
                                    <div className="w-12 h-12 bg-red-50 flex items-center justify-center flex-shrink-0 text-red-500 group-hover:scale-110 transition-transform">
                                        {cat.icon}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-base">{cat.name}</p>
                                        <p className="text-sm text-slate-400">{cat.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative">
                            <div className="overflow-hidden shadow-xl">
                                <img src="/images/team_collaboration.png" alt="Startup team collaboration" className="w-full h-[520px] object-cover" />
                            </div>
                            <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-red-500/10 -z-10"></div>
                            <div className="absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-r from-red-500 to-purple-600 -z-10"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhoCanApplySection;
