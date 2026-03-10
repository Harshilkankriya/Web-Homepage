import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import TrustedBySection from '../components/sections/TrustedBySection';
import AboutSection from '../components/sections/AboutSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import BentoGridSection from '../components/sections/BentoGridSection';
import WhoCanApplySection from '../components/sections/WhoCanApplySection';
import InvestorsSection from '../components/sections/InvestorsSection';
import FeaturedStartupsSection from '../components/sections/FeaturedStartupsSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import AboutKaroStartupSection from '../components/sections/AboutKaroStartupSection';
import CTASection from '../components/sections/CTASection';

const LandingPage = ({ onApplyClick }) => {
    return (
        <div>
            <HeroSection onApplyClick={onApplyClick} />
            <TrustedBySection />
            <AboutSection />
            <HowItWorksSection />
            <BentoGridSection />
            <WhoCanApplySection />
            <InvestorsSection />
            <FeaturedStartupsSection />
            <TestimonialSection />
            <AboutKaroStartupSection />
            <CTASection onApplyClick={onApplyClick} />
        </div>
    );
};

export default LandingPage;
