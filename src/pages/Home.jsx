import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Selection from '../components/Selection';
import AboutGirls from '../components/AboutGirls';
import Locations from '../components/Locations';
import Services from '../components/Services';
import Protocol from '../components/Protocol';
import GirlSlider from '../components/GirlSlider';
import TrustSignals from '../components/TrustSignals';
import Testimonials from '../components/Testimonials';
import JoinBanner from '../components/JoinBanner';
import FAQs from '../components/FAQs';
import SEOContent from '../components/SEOContent';
import gsap from 'gsap';

const Home = () => {
    useEffect(() => {
        document.querySelectorAll('.anim-reveal').forEach(el => {
            gsap.fromTo(el, 
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        once: true
                    }
                }
            );
        });
    }, []);

    return (
        <>
            <Hero />
            <Selection />
            <AboutGirls />
            <Locations />
            <Services />
            <Protocol />
            <GirlSlider />
            <TrustSignals />
            <Testimonials />
            <JoinBanner />
            <FAQs />
            <SEOContent />
        </>
    );
};

export default Home;
