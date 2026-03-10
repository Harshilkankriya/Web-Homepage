import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Handshake, ArrowRight } from 'lucide-react';

const CTASection = ({ onApplyClick }) => {
    return (
        <section id="cta" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-slate-900"></div>
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-red-500/15 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center justify-center p-4 bg-red-500/20 mb-8 backdrop-blur-md border border-red-500/20">
                            <Rocket className="w-7 h-7 text-red-500" />
                        </div>

                        <h2 className="text-4xl md:text-6xl text-white mb-8 tracking-tight leading-tight">
                            Ready to pitch your{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 italic">startup?</span>
                        </h2>

                        <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0">
                            Take the next big step in your founder journey. Connect with top investors and scale your vision with KaroStartup.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                            <button onClick={onApplyClick} className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-red-500 to-purple-600 hover:opacity-90 text-white font-semibold text-lg transition-all shadow-[0_8px_30px_rgba(239,68,68,0.4)] hover:shadow-[0_8px_30px_rgba(239,68,68,0.6)] hover:-translate-y-0.5 flex items-center justify-center group">
                                Apply Now
                                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 hover:bg-white/5 text-white font-semibold text-lg transition-all flex items-center justify-center backdrop-blur-sm">
                                <Handshake className="mr-2 w-6 h-6" />
                                Partner With Us
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex-1 w-full hidden lg:block"
                    >
                        <div className="relative">
                            <div className="overflow-hidden shadow-2xl ring-1 ring-white/10">
                                <img src="/images/investor_meeting.png" alt="Investor meeting" className="w-full h-[460px] object-cover opacity-80" />
                            </div>
                            <div className="absolute -bottom-5 -left-5 bg-gradient-to-r from-red-500 to-purple-600 px-8 py-5 shadow-xl">
                                <p className="text-white font-bold text-xl">Join 500+ Founders</p>
                                <p className="text-red-100 text-base">who have already pitched</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CTASection;
