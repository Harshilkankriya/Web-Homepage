import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative">
                            <div className="overflow-hidden shadow-xl">
                                <img src="/images/founder_success.png" alt="Successful startup founder" className="w-full h-[520px] object-cover" />
                            </div>
                            <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-gradient-to-r from-red-500 to-purple-600 -z-10"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex-1"
                    >
                        <div className="w-16 h-16 bg-red-50 flex items-center justify-center mb-10">
                            <Quote className="w-8 h-8 text-red-500" />
                        </div>

                        <blockquote className="text-3xl md:text-4xl font-serif text-slate-900 leading-snug mb-10">
                            "KaroStartup changed the trajectory of our startup. We went from struggling to find investors to raising our seed round in just 3 weeks."
                        </blockquote>

                        <div className="flex items-center gap-5 mb-12">
                            <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-purple-600 text-white flex items-center justify-center font-bold text-xl">
                                RK
                            </div>
                            <div>
                                <p className="font-bold text-lg text-slate-900">Rahul Kumar</p>
                                <p className="text-base text-slate-500">Founder & CEO, EcoKart</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-10 pt-10 border-t border-slate-100">
                            {[
                                { value: "3 weeks", label: "to close round" },
                                { value: "₹2.5Cr", label: "raised" },
                                { value: "5x", label: "growth since" }
                            ].map((stat, idx) => (
                                <div key={idx}>
                                    <p className="text-2xl font-serif text-red-500">{stat.value}</p>
                                    <p className="text-sm text-slate-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
