import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Globe2, ExternalLink } from 'lucide-react';

const AboutKaroStartupSection = () => {
    return (
        <section id="about-karo" className="py-32 bg-slate-50">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                {/* Stats Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-red-500 to-purple-600 p-10 md:p-16 mb-20 shadow-xl"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-white">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl md:text-4xl mb-3">Backed by KaroStartup</h3>
                            <p className="text-red-100 text-lg max-w-lg">India's leading startup media platform, trusted by thousands of founders.</p>
                        </div>
                        <div className="flex items-center gap-10 md:gap-16">
                            {[
                                { value: "10k+", label: "Stories" },
                                { value: "500k", label: "Community" },
                                { value: "5+", label: "Years" }
                            ].map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <p className="text-4xl md:text-5xl font-serif text-white">{stat.value}</p>
                                    <p className="text-base text-red-100">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Content Grid */}
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <span className="inline-block text-red-500 font-semibold tracking-wide uppercase text-base mb-5">
                            The Parent Platform
                        </span>
                        <h2 className="text-4xl md:text-5xl text-slate-900 mb-8 leading-tight">
                            A media powerhouse for the{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 italic">startup ecosystem</span>
                        </h2>
                        <p className="text-xl text-slate-500 mb-12 leading-relaxed">
                            KaroStartup has shared thousands of founder stories and built a massive community of entrepreneurs, investors, and startup enthusiasts across India.
                        </p>

                        <div className="space-y-6 mb-12">
                            {[
                                { icon: <BookOpen className="w-6 h-6 text-red-500" />, text: "Thousands of startup stories published" },
                                { icon: <Users className="w-6 h-6 text-red-500" />, text: "Large, active founder community" },
                                { icon: <Globe2 className="w-6 h-6 text-red-500" />, text: "Strong pan-India startup network" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-5">
                                    <div className="w-12 h-12 bg-red-50 flex items-center justify-center flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <span className="text-slate-700 font-medium text-lg">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#" className="inline-flex items-center gap-2 text-red-500 font-semibold text-lg hover:text-red-600 transition-colors group">
                            Visit KaroStartup
                            <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
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
                                <img src="/images/startup_workspace.png" alt="Startup workspace" className="w-full h-[520px] object-cover" />
                            </div>
                            <div className="absolute -top-5 -right-5 w-24 h-24 bg-red-50 -z-10"></div>
                            <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-gradient-to-r from-red-500 to-purple-600 -z-10"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutKaroStartupSection;
