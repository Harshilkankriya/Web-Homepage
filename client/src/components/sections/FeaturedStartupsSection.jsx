import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Tractor, Briefcase, ArrowUpRight } from 'lucide-react';

const FeaturedStartupsSection = () => {
    const startups = [
        {
            name: "EcoKart",
            category: "D2C Sustainability",
            description: "A sustainable product marketplace for eco-friendly living, delivering zero-waste alternatives to everyday essentials.",
            icon: <Leaf className="w-6 h-6 text-purple-600" />,
            raised: "₹2.5Cr",
            stage: "Seed",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-100"
        },
        {
            name: "AgroLink",
            category: "AgriTech",
            description: "Connecting farmers directly with urban retailers, bypassing intermediaries to increase farmer revenue by 40%.",
            icon: <Tractor className="w-6 h-6 text-orange-500" />,
            raised: "₹4Cr",
            stage: "Pre-Series A",
            bgColor: "bg-amber-50",
            borderColor: "border-amber-100"
        },
        {
            name: "FinEdge",
            category: "FinTech",
            description: "Smart financial tools for MSME businesses to manage cash flow and access credit instantly.",
            icon: <Briefcase className="w-6 h-6 text-blue-600" />,
            raised: "₹8Cr",
            stage: "Series A",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-100"
        }
    ];

    return (
        <section id="startups" className="py-32 bg-slate-50 relative">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-red-500 font-semibold tracking-wide uppercase text-base mb-4">
                            Success Stories
                        </span>
                        <h2 className="text-4xl md:text-5xl text-slate-900 mb-5">
                            Featured Startups
                        </h2>
                        <p className="text-xl text-slate-500 max-w-2xl">
                            Discover promising businesses that found success through our ecosystem.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <button className="text-red-500 font-semibold text-lg hover:text-purple-800 transition-colors flex items-center group">
                            View All Startups
                            <ArrowUpRight className="ml-1 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {startups.map((startup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="bg-white border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className={`${startup.bgColor} p-8 border-b ${startup.borderColor}`}>
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center">
                                            {startup.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">{startup.name}</h3>
                                            <span className="text-sm font-medium text-slate-500">{startup.category}</span>
                                        </div>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight className="w-6 h-6 text-slate-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <p className="text-slate-500 text-base mb-8 leading-relaxed">
                                    {startup.description}
                                </p>

                                <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                                    <div>
                                        <p className="text-sm text-slate-400 mb-1">Raised</p>
                                        <p className="font-bold text-lg text-red-500">{startup.raised}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-slate-400 mb-1">Stage</p>
                                        <p className="font-semibold text-lg text-slate-700">{startup.stage}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedStartupsSection;
