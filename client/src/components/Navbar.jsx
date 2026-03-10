import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onApplyClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'How It Works', to: 'how-it-works' },
        { name: 'Investors', to: 'investors' },
        { name: 'Startups', to: 'startups' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <Link to="hero" spy={true} smooth={true} duration={500}>
                            <img src="/logo.png" alt="KaroStartup" className="h-10" />
                        </Link>
                    </div>

                    <div className="hidden md:ml-6 md:flex md:items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="text-slate-500 hover:text-slate-900 font-medium cursor-pointer transition-colors text-[17px]"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button onClick={onApplyClick} className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-3 font-semibold hover:opacity-90 transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30 text-base">
                            Apply to Pitch
                        </button>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full border-t border-slate-100">
                    <div className="px-6 pt-3 pb-8 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="block px-4 py-4 text-lg font-medium text-slate-700 hover:text-red-500 hover:bg-red-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <button onClick={() => { setIsMobileMenuOpen(false); onApplyClick(); }} className="w-full bg-gradient-to-r from-red-500 to-purple-600 text-white px-6 py-4 font-semibold text-lg hover:opacity-90 transition-colors">
                                Apply to Pitch
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
