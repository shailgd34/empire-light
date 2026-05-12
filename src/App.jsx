import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Nav from './components/Nav';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Selection from './components/Selection';
import Locations from './components/Locations';
import Services from './components/Services';
import TrustSignals from './components/TrustSignals';
import Protocol from './components/Protocol';
import FAQs from './components/FAQs';
import JoinBanner from './components/JoinBanner';
import SEOContent from './components/SEOContent';
import OurEthos from './components/OurEthos';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import Partners from './components/Partners';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    useEffect(() => {
        // 2. Hero Logic (Handled within Hero.jsx)

        // 3. Global Reveal Logic (Using fromTo for guaranteed visibility)
        document.querySelectorAll('section:not(#hero) h2, section:not(#hero) p, .anim-section-reveal').forEach(el => {
            gsap.fromTo(el, 
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 92%',
                        once: true
                    }
                }
            );
        });

        // 4. Mobile Menu Logic (Now handled natively within Nav.jsx state)

        // 5. Swiper Initialization
        if (typeof Swiper !== 'undefined' && document.querySelector('.archive-swiper')) {
            new Swiper('.archive-swiper', {
                slidesPerView: 'auto',
                spaceBetween: 40,
                centeredSlides: false,
                loop: true,
                speed: 1000,
                navigation: {
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                },
                breakpoints: {
                    320: { spaceBetween: 20 },
                    768: { spaceBetween: 40 }
                }
            });
        }

        return () => {};
    }, []);

    return (
        <div id="app-root">
            <Nav />
            <main>
                <Hero />
                <Selection />
                <OurEthos />
                <ValueProp />
                <Services />
                <Contact />
                <Locations />
                <Protocol />
                <TrustSignals />
                <Testimonials />
                <FAQs />
                <JoinBanner />
                <SEOContent />
            </main>
            <Footer />
            <StickyCTA />
        </div>
    );
};

export default App;
