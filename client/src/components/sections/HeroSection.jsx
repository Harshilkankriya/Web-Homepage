import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = ({ onApplyClick }) => {
    return (
        <section id="hero" className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-white">
            {/* Subtle background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-[140px]"></div>
                <div className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] bg-purple-50/80 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-5 py-2 mb-8">
                                <Star className="w-5 h-5 text-red-500" fill="currentColor" />
                                <span className="text-base font-medium text-purple-900">India's #1 Startup Pitch Platform</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-normal text-slate-900 leading-[1.08] tracking-tight mb-8">
                                Unlimited{' '}
                                <span className="relative inline-block">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 italic">Potential</span>
                                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8C50 2 150 2 198 8" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" opacity="0.3" /></svg>
                                </span>
                                <br />
                                for India's Best{' '}
                                <br className="hidden lg:block" />
                                Startup Founders.
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p className="text-xl text-slate-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                KaroStartup connects early-stage founders with top investors through curated pitch events. Get funded, get mentored, get growing.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
                        >
                            <button onClick={onApplyClick} className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-red-500 to-purple-600 hover:opacity-90 text-white font-semibold text-lg transition-all shadow-[0_8px_30px_rgba(239,68,68,0.3)] hover:shadow-[0_8px_30px_rgba(239,68,68,0.5)] hover:-translate-y-0.5 flex items-center justify-center group">
                                Apply to Pitch
                                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold text-lg transition-all flex items-center justify-center hover:bg-slate-50">
                                Explore Startups
                            </button>
                        </motion.div>

                        {/* Trust indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-14 flex items-center gap-6 justify-center lg:justify-start"
                        >
                            <div className="flex -space-x-3">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className={`w-12 h-12 border-2 border-white shadow-sm flex items-center justify-center text-sm font-bold text-white ${['bg-gradient-to-r from-red-500 to-purple-600', 'bg-purple-600', 'bg-purple-700', 'bg-purple-800'][i]}`}>
                                        {['AK', 'RS', 'PM', 'SV'][i]}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-base font-semibold text-slate-900">500+ Founders</p>
                                <p className="text-sm text-slate-500">have already pitched</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Collage */}
                    <div className="flex-1 w-full max-w-xl lg:max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="overflow-hidden shadow-2xl">
                                <img src="/images/hero_founders.png" alt="Startup founders collaborating" className="w-full h-[500px] object-cover" />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="absolute -bottom-8 -left-8 bg-white shadow-xl border border-slate-100 p-6 z-10"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-red-50 flex items-center justify-center">
                                        <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-serif text-slate-900">₹50Cr+</p>
                                        <p className="text-sm text-slate-500">Total Funding Raised</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="absolute -top-5 -right-5 bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-xl px-6 py-4 z-10"
                            >
                                <p className="text-2xl font-serif">50+</p>
                                <p className="text-sm text-red-100">Active Investors</p>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
