import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, CheckCircle2, Mic, Rocket } from 'lucide-react';

const HowItWorksSection = () => {
    const steps = [
        {
            step: 1,
            title: "Apply with Your Pitch Deck",
            description: "Submit your startup details and pitch deck through our platform.",
            icon: <UploadCloud className="w-7 h-7" />,
            color: "bg-gradient-to-r from-red-500 to-purple-600"
        },
        {
            step: 2,
            title: "Get Shortlisted",
            description: "Our expert team reviews applications and selects promising startups.",
            icon: <CheckCircle2 className="w-7 h-7" />,
            color: "bg-purple-600"
        },
        {
            step: 3,
            title: "Pitch to Investors",
            description: "Present your startup live to curated investors at exclusive pitch events.",
            icon: <Mic className="w-7 h-7" />,
            color: "bg-purple-700"
        },
        {
            step: 4,
            title: "Raise Funding & Scale",
            description: "Connect with investors, close your round, and scale your vision.",
            icon: <Rocket className="w-7 h-7" />,
            color: "bg-purple-800"
        }
    ];

    return (
        <section id="how-it-works" className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-red-500 font-semibold tracking-wide uppercase text-base mb-4">
                            Process
                        </span>
                        <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
                            How It Works
                        </h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">From application to funding — a simple, transparent process.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.12 }}
                            className="relative group"
                        >
                            <div className="bg-white p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                                <div className="text-[100px] font-serif text-slate-100 leading-none absolute top-4 right-6 select-none group-hover:text-red-50 transition-colors">
                                    {item.step}
                                </div>

                                <div className={`relative z-10 w-16 h-16 ${item.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>

                                <h4 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{item.title}</h4>
                                <p className="text-slate-500 text-base leading-relaxed relative z-10">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="hidden lg:flex items-center justify-center mt-10">
                    <div className="flex items-center gap-2 text-slate-300">
                        <div className="w-48 h-px bg-slate-200"></div>
                        <span className="text-base font-medium text-slate-400">Your founder journey →</span>
                        <div className="w-48 h-px bg-slate-200"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
