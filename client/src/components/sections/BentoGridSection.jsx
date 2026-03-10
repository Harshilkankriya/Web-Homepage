import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, BarChart3, Globe2, Shield } from 'lucide-react';

const BentoGridSection = () => {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block text-red-500 font-semibold tracking-wide uppercase text-base mb-4">
                        Why KaroStartup
                    </span>
                    <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
                        Everything founders need{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 italic">in one place</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[320px]">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 overflow-hidden relative group cursor-pointer"
                    >
                        <img src="/images/investor_meeting.png" alt="Investor meeting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-10 z-10">
                            <span className="inline-block px-4 py-1.5 bg-red-500/90 text-white text-sm font-semibold mb-4">Featured</span>
                            <h3 className="text-3xl text-white mb-3">Curated Investor Network</h3>
                            <p className="text-white/80 text-base max-w-lg">Access to 50+ investors from India's top angel networks and VC funds, all in one event.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-gradient-to-r from-red-500 to-purple-600 p-10 flex flex-col justify-between group hover:shadow-xl transition-shadow cursor-pointer"
                    >
                        <div className="w-14 h-14 bg-white/20 flex items-center justify-center mb-6">
                            <Lightbulb className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Pitch Coaching</h3>
                            <p className="text-red-100 text-base">Get expert feedback on your pitch deck before the big day.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-slate-900 p-10 flex flex-col justify-between group hover:shadow-xl transition-shadow cursor-pointer"
                    >
                        <div className="w-14 h-14 bg-white/10 flex items-center justify-center mb-6">
                            <BarChart3 className="w-7 h-7 text-red-500" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Startup Analytics</h3>
                            <p className="text-slate-400 text-base">Track your pitch performance and investor interest in real-time.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-slate-50 border border-slate-200 p-10 flex flex-col justify-between group hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer"
                    >
                        <div className="w-14 h-14 bg-red-50 flex items-center justify-center mb-6">
                            <Globe2 className="w-7 h-7 text-red-500" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Pan-India Network</h3>
                            <p className="text-slate-500 text-base">Connect with founders and investors from every corner of India.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-purple-50 border border-purple-100 p-10 flex flex-col justify-between group hover:shadow-xl hover:border-purple-200 transition-all cursor-pointer"
                    >
                        <div className="w-14 h-14 bg-red-500/10 flex items-center justify-center mb-6">
                            <Shield className="w-7 h-7 text-red-500" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Trusted Platform</h3>
                            <p className="text-slate-500 text-base">Backed by KaroStartup, India's leading startup media platform.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default BentoGridSection;
