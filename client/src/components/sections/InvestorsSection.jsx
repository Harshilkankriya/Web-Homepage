import React from 'react';
import { motion } from 'framer-motion';

const InvestorsSection = () => {
    const investors = [
        { name: "Venture Fund Alpha", role: "Early Stage VC", initials: "VF" },
        { name: "Angel Builders", role: "Super Angel", initials: "AB" },
        { name: "Capital Partners", role: "Seed Fund", initials: "CP" },
        { name: "Bharat Angels", role: "Angel Network", initials: "BA" },
    ];

    return (
        <section id="investors" className="py-32 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <span className="inline-block text-red-500 font-semibold tracking-wide uppercase text-base mb-5">
                            Investors
                        </span>
                        <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                            Meet investors looking for the{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 italic">next big startup</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                            Angel investors, VCs, and startup ecosystem leaders attend KaroStartup events to discover promising startups from across India.
                        </p>

                        <div className="flex items-center gap-10">
                            <div>
                                <p className="text-4xl font-serif text-white">50+</p>
                                <p className="text-base text-slate-400">Curated Investors</p>
                            </div>
                            <div className="w-px h-14 bg-slate-700"></div>
                            <div>
                                <p className="text-4xl font-serif text-white">₹50Cr+</p>
                                <p className="text-base text-slate-400">Deployed Capital</p>
                            </div>
                            <div className="w-px h-14 bg-slate-700 hidden sm:block"></div>
                            <div className="hidden sm:block">
                                <p className="text-4xl font-serif text-white">15+</p>
                                <p className="text-base text-slate-400">Pitch Events</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex-1"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            {investors.map((investor, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all group cursor-pointer hover:-translate-y-1"
                                >
                                    <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 flex items-center justify-center text-xl font-bold text-red-500 mb-5 group-hover:scale-110 transition-transform">
                                        {investor.initials}
                                    </div>
                                    <h4 className="font-bold text-lg text-white mb-1">{investor.name}</h4>
                                    <p className="text-base text-slate-400">{investor.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default InvestorsSection;
