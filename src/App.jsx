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
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import Partners from './components/Partners';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    useEffect(() => {
        // 1. Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const follower = document.getElementById('cursor-follower');
        
        if (cursor && follower) {
            const onMouseMove = (e) => {
                gsap.to(cursor, { x: e.clientX - 6, y: e.clientY - 6, duration: 0 });
                gsap.to(follower, { x: e.clientX - 17, y: e.clientY - 17, duration: 0.3 });
            };
            document.addEventListener('mousemove', onMouseMove);

            const interactive = document.querySelectorAll('a, button, .swiper-slide, .faq-trigger');
            interactive.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    gsap.to(cursor, { scale: 3, opacity: 0.2, duration: 0.3 });
                    gsap.to(follower, { scale: 1.5, borderColor: 'var(--gold)', duration: 0.3 });
                });
                el.addEventListener('mouseleave', () => {
                    gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
                    gsap.to(follower, { scale: 1, borderColor: 'rgba(255,255,255,0.1)', duration: 0.3 });
                });
            });

            return () => document.removeEventListener('mousemove', onMouseMove);
        }
    }, []);

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

        // 5. Navbar Scroll Effect
        const onScroll = () => {
            const nav = document.getElementById('main-nav');
            if (window.scrollY > 100) {
                nav.style.backgroundColor = 'rgba(8, 8, 8, 0.95)';
                nav.style.paddingTop = '1rem';
                nav.style.paddingBottom = '1rem';
            } else {
                nav.style.backgroundColor = 'transparent';
                nav.style.paddingTop = '2rem';
                nav.style.paddingBottom = '2rem';
            }
        };
        window.addEventListener('scroll', onScroll);

        // 6. Swiper Initialization
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

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div id="app-root">
            <Nav />
            <main>
                <Hero />
                <ValueProp />
                <Selection />
                <Locations />
                <Services />
                <TrustSignals />
                <Protocol />
                <FAQs />
                <Contact />
            </main>
            <Partners />
            <Footer />
            <StickyCTA />
        </div>
    );
};

export default App;
