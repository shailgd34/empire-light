import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            gsap.fromTo(".menu-anim", 
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: "expo.out", delay: 0.4 }
            );
        }
    }, [isMenuOpen]);

    return (
        <nav id="main-nav" className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 px-8 md:px-16 flex justify-between items-center ${scrolled ? 'py-4 bg-bg-primary shadow-xl' : 'py-8 bg-transparent'}`}>
            {/* Logo */}
            <div className="flex items-center gap-4">
                <img src="/images/logo.webp" alt="Empire Escorts" className="h-8 md:h-12 w-auto transition-all duration-700" />
            </div>

            {/* Desktop Navigation (Syncing with Sidebar) */}
            <div className="hidden lg:flex items-center gap-10">
                <a href="/" className={`text-base font-bold transition-colors no-underline border-b border-gold/40 pb-1 ${scrolled ? 'text-black hover:text-gold' : 'text-white hover:text-gold'}`}>Home</a>
                
                {/* Our Girls Dropdown */}
                <div className="relative group">
                    <button 
                        onMouseEnter={() => setActiveDropdown('girls')}
                        className={`flex items-center gap-2 text-base font-bold transition-colors ${scrolled ? 'text-black hover:text-gold' : 'text-white hover:text-gold'}`}
                    >
                        Our Girls <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                    </button>
                    <div 
                        onMouseLeave={() => setActiveDropdown(null)}
                        className={`absolute top-full left-0 mt-4 w-56 bg-ivory shadow-2xl transition-all duration-500 border border-black/5 ${activeDropdown === 'girls' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
                    >
                        <div className="flex flex-col">
                            {['All Girls', 'Sheffield Girls', 'Leeds Girls', 'Nottingham Girls', 'Doncaster Girls', 'Barnsley Girls', 'Rotherham Girls', 'Chesterfield Girls'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="px-6 py-4 text-sm font-semibold text-black/70 hover:text-gold hover:bg-black/[0.02] border-b border-black/5 transition-all no-underline">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <a href="/blogs" className={`text-base font-bold transition-colors no-underline ${scrolled ? 'text-black hover:text-gold' : 'text-white hover:text-gold'}`}>Blogs</a>
                <a href="/contact" className={`text-base font-bold transition-colors no-underline ${scrolled ? 'text-black hover:text-gold' : 'text-white hover:text-gold'}`}>Contact Us</a>
                <a href="/join" className={`text-base font-bold transition-colors no-underline ${scrolled ? 'text-black hover:text-gold' : 'text-white hover:text-gold'}`}>Join Us</a>

                {/* Explore Dropdown */}
                <div className="relative group">
                    <button 
                        onMouseEnter={() => setActiveDropdown('explore')}
                        className={`flex items-center gap-2 text-base font-bold transition-colors ${scrolled ? 'text-black hover:text-gold' : 'text-white hover:text-gold'}`}
                    >
                        Help & FAQ <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                    </button>
                    <div 
                        onMouseLeave={() => setActiveDropdown(null)}
                        className={`absolute top-full left-0 mt-4 w-56 bg-ivory shadow-2xl transition-all duration-500 border border-black/5 ${activeDropdown === 'explore' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
                    >
                        <div className="flex flex-col">
                            {['About Us', 'How to Book', 'Opening Times', 'FAQ'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="px-6 py-4 text-sm font-semibold text-black/70 hover:text-gold hover:bg-black/[0.02] border-b border-black/5 transition-all no-underline">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hamburger Button */}
            <button 
                onClick={toggleMenu} 
                className="group relative w-10 h-10 flex flex-col justify-center items-center gap-1 z-[3500]"
            >
                <div className={`w-6 h-[1.5px] transition-all duration-500 origin-center ${scrolled || isMenuOpen ? 'bg-black' : 'bg-white'} ${isMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`}></div>
                <div className={`w-4 h-[1.5px] bg-gold self-end transition-all duration-500 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-[1.5px] transition-all duration-500 origin-center ${scrolled || isMenuOpen ? 'bg-black' : 'bg-white'} ${isMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`}></div>
            </button>

            {/* Sidebar (Syncing with Primary Nav Links) */}
            <div className={`fixed inset-0 z-[2500] bg-bg-primary shadow-2xl transition-all duration-700 flex flex-col ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} pointer-events-none ${isMenuOpen ? 'pointer-events-auto' : ''}`}>
                <div className="p-8 md:p-16 flex justify-between items-center relative z-10">
                    <img src="/images/logo.webp" alt="Empire" className="h-8 md:h-12 w-auto menu-anim" />
                    <button onClick={closeMenu} className="text-sm text-black/80 hover:text-gold transition-colors font-bold border-l border-black/10 pl-8">Exit [X]</button>
                </div>

                {/* Primary Sidebar Links (Syncing verbatim) */}
                <div className="flex-1 flex flex-col items-center justify-center gap-2 md:gap-6 overflow-y-auto px-8 relative z-10">
                    <a href="/" onClick={closeMenu} className="group flex flex-col items-center no-underline menu-anim">
                        <span className="text-gold text-[0.4rem] font-black tracking-widest mb-1 opacity-30 group-hover:opacity-100 transition-all">01</span>
                        <span className="text-4xl md:text-8xl font-light text-black group-hover:italic transition-all duration-700" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Home</span>
                    </a>
                    <a href="#profiles" onClick={closeMenu} className="group flex flex-col items-center no-underline menu-anim">
                        <span className="text-gold text-[0.4rem] font-black tracking-widest mb-1 opacity-30 group-hover:opacity-100 transition-all">02</span>
                        <span className="text-4xl md:text-8xl font-light text-black group-hover:italic transition-all duration-700" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Our Girls</span>
                    </a>
                    <a href="/blogs" onClick={closeMenu} className="group flex flex-col items-center no-underline menu-anim">
                        <span className="text-gold text-[0.4rem] font-black tracking-widest mb-1 opacity-30 group-hover:opacity-100 transition-all">03</span>
                        <span className="text-4xl md:text-8xl font-light text-black group-hover:italic transition-all duration-700" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Blogs</span>
                    </a>
                    <a href="/contact" onClick={closeMenu} className="group flex flex-col items-center no-underline menu-anim">
                        <span className="text-gold text-[0.4rem] font-black tracking-widest mb-1 opacity-30 group-hover:opacity-100 transition-all">04</span>
                        <span className="text-4xl md:text-8xl font-light text-black group-hover:italic transition-all duration-700" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Contact Us</span>
                    </a>
                    <a href="/join" onClick={closeMenu} className="group flex flex-col items-center no-underline menu-anim">
                        <span className="text-gold text-[0.4rem] font-black tracking-widest mb-1 opacity-30 group-hover:opacity-100 transition-all">05</span>
                        <span className="text-4xl md:text-8xl font-light text-black group-hover:italic transition-all duration-700" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Join Us</span>
                    </a>
                    <a href="#explore" onClick={closeMenu} className="group flex flex-col items-center no-underline menu-anim">
                        <span className="text-gold text-[0.4rem] font-black tracking-widest mb-1 opacity-30 group-hover:opacity-100 transition-all">06</span>
                        <span className="text-4xl md:text-8xl font-light text-black group-hover:italic transition-all duration-700" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Help & FAQ</span>
                    </a>
                </div>

                <div className="p-12 md:px-24 md:py-12 bg-black/[0.03] grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
                    <div className="space-y-4 menu-anim text-center md:text-left">
                        <span className="text-xs text-gold font-bold block">Direct Line</span>
                        <a href="tel:+447368428158" className="text-black text-base md:text-xl font-bold no-underline hover:text-gold transition-colors">07368 428 158</a>
                    </div>
                    <div className="flex justify-center gap-12 menu-anim">
                        <a href="#" className="text-black/60 hover:text-gold transition-all no-underline text-sm font-semibold">Instagram</a>
                        <a href="#" className="text-black/60 hover:text-gold transition-all no-underline text-sm font-semibold">Twitter / X</a>
                        <a href="#" className="text-black/60 hover:text-gold transition-all no-underline text-sm font-semibold">WhatsApp</a>
                    </div>
                    <div className="space-y-2 menu-anim text-center md:text-right">
                        <span className="text-xs text-black/60 font-bold block">Sheffield HQ</span>
                        <p className="text-gold text-sm font-bold">Verified Service / 24-7</p>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none z-0">
                    <span className="text-[40vw] font-black uppercase text-black leading-none">Empire</span>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
