import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="about" className="py-32 bg-white relative">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="relative">
                            <div className="overflow-hidden shadow-xl">
                                <img src="/images/pitch_presentation.png" alt="Founder pitching to investors" className="w-full h-[520px] object-cover" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-red-500 to-purple-600 p-8 shadow-xl text-white max-w-[220px]">
                                <p className="text-4xl font-serif mb-1">95%</p>
                                <p className="text-base text-red-100">of founders get investor meetings after pitching</p>
                            </div>
                            <div className="absolute -top-5 -left-5 w-28 h-28 bg-red-50 -z-10"></div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block text-red-500 font-semibold tracking-wide uppercase text-base mb-5">
                                About KaroStartup
                            </span>
                            <h2 className="text-4xl md:text-5xl text-slate-900 mb-8 leading-tight">
                                Bridging the Gap for{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 italic">Bharat Founders</span>
                            </h2>
                            <p className="text-xl text-slate-500 leading-relaxed mb-12">
                                Thousands of founders across India are building amazing businesses but struggle to access investors and mentorship. KaroStartup connects these founders with investors through curated pitch events and a startup discovery platform.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {[
                                {
                                    icon: <Users className="w-7 h-7 text-red-500" />,
                                    title: "Unprecedented Visibility",
                                    desc: "Get your startup in front of India's top Angel Networks and VCs."
                                },
                                {
                                    icon: <Target className="w-7 h-7 text-red-500" />,
                                    title: "Direct Investor Access",
                                    desc: "Skip the cold emails. Pitch directly to investors who invest."
                                },
                                {
                                    icon: <TrendingUp className="w-7 h-7 text-red-500" />,
                                    title: "Growth Opportunities",
                                    desc: "Beyond funding — mentorship, community, and ecosystem support."
                                }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                    className="flex items-start gap-5 group"
                                >
                                    <div className="w-14 h-14 bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                                        <p className="text-slate-500 text-base">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
