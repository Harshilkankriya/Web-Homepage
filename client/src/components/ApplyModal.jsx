import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UploadCloud, CheckCircle2 } from 'lucide-react';

const ApplyModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setStep(3); // Success step
        }, 1500);
    };

    const resetAndClose = () => {
        onClose();
        setTimeout(() => setStep(1), 300); // Reset after exit animation
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={resetAndClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-2xl bg-white shadow-2xl overflow-hidden pointer-events-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h2 className="text-2xl font-serif text-red-500">
                                Pitch Application
                            </h2>
                            <button
                                onClick={resetAndClose}
                                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {step === 1 && (
                                <form onSubmit={() => setStep(2)}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Founder Name</label>
                                            <input required type="text" className="w-full px-4 py-3 border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                            <input required type="email" className="w-full px-4 py-3 border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="john@startup.com" />
                                        </div>
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-sm font-semibold text-slate-700">Startup Name</label>
                                            <input required type="text" className="w-full px-4 py-3 border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="Acme Corp" />
                                        </div>
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-sm font-semibold text-slate-700">Sector / Category</label>
                                            <select className="w-full px-4 py-3 border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-white">
                                                <option>D2C</option>
                                                <option>SaaS</option>
                                                <option>MSME</option>
                                                <option>Consumer Tech</option>
                                                <option>Manufacturing</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full py-4 bg-gradient-to-r from-red-500 to-purple-600 hover:opacity-90 text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                        Next Step
                                    </button>
                                </form>
                            )}

                            {step === 2 && (
                                <form onSubmit={handleSubmit}>
                                    <div className="space-y-6 mb-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Pitch Deck (PDF)</label>
                                            <div className="border-2 border-dashed border-slate-300 p-10 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                                                <UploadCloud className="w-10 h-10 mx-auto text-slate-400 group-hover:text-red-500 mb-4 transition-colors" />
                                                <p className="text-slate-600 font-medium mb-1">Click to upload or drag and drop</p>
                                                <p className="text-xs text-slate-500">PDF up to 10MB</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Short Pitch Video Link (Optional)</label>
                                            <input type="url" className="w-full px-4 py-3 border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="Youtube / Loom link" />
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button type="button" onClick={() => setStep(1)} className="px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors">
                                            Back
                                        </button>
                                        <button type="submit" disabled={isSubmitting} className="flex-1 py-4 bg-gradient-to-r from-red-500 to-purple-600 hover:opacity-90 text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex justify-center items-center">
                                            {isSubmitting ? (
                                                <div className="w-6 h-6 border-3 border-white border-t-transparent animate-spin"></div>
                                            ) : (
                                                "Submit Application"
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}

                            {step === 3 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-20 h-20 bg-red-100 flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-red-600" />
                                    </div>
                                    <h3 className="text-2xl text-slate-900 mb-2">Application Received!</h3>
                                    <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                                        We've successfully received your pitch deck. Our team will review it and get back to you within 48 hours.
                                    </p>
                                    <button onClick={resetAndClose} className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors">
                                        Close Window
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ApplyModal;
