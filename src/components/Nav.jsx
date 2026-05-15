import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to handle scrolling to section if on home page, or navigate to home first
    const handleNavClick = (e, targetId) => {
        if (location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const isHome = location.pathname === '/';

    const [showDropdown, setShowDropdown] = useState(false);

    const girlLinks = [
        { name: 'All Girls', path: '/girls' },
        { name: 'Sheffield Escorts', path: '/escorts/sheffield' },
        { name: 'Leeds Escorts', path: '/escorts/leeds' },
        { name: 'Nottingham Escorts', path: '/escorts/nottingham' },
        { name: 'Doncaster Escorts', path: '/escorts/doncaster' },
        { name: 'Barnsley Escorts', path: '/escorts/barnsley' },
        { name: 'Rotherham Escorts', path: '/escorts/rotherham' },
        { name: 'Chesterfield Escorts', path: '/escorts/chesterfield' },
    ];

    return (
        <nav className={`premium-nav ${scrolled || !isHome ? 'scrolled' : ''} ${!isHome ? 'always-dark' : ''}`}>
            <div className="container flex justify-between items-center">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/logo.webp" alt="Empire Escorts" style={{ height: (scrolled || !isHome) ? '40px' : '55px', transition: '0.4s var(--ease-expo)' }} />
                    </Link>
                </div>
 
                <div className="nav-links desktop-only flex items-center">
                    <Link to="/" className="nav-item">HOME</Link>
                    
                    <div 
                        className="nav-item-wrap"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                        <Link to="/girls" className={`nav-item ${location.pathname === '/girls' ? 'active' : ''}`}>
                            OUR GIRLS
                            <svg className="dropdown-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9"/></svg>
                        </Link>
                        
                        {showDropdown && (
                            <div className="nav-dropdown">
                                {girlLinks.map((link, idx) => (
                                    <Link key={idx} to={link.path} className="dropdown-link">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/regions" className={`nav-item ${location.pathname === '/regions' ? 'active' : ''}`}>REGIONS</Link>
                    <Link to="/booking" className={`nav-item ${location.pathname === '/booking' ? 'active' : ''}`}>BOOKING</Link>
                    <Link to="/join-us" className="nav-item">CAREERS</Link>
                    <Link to="/blog" className="nav-item">JOURNAL</Link>
                    <Link to="/contact" className="nav-item">CONTACT</Link>
                </div>
 
                <div className="nav-actions flex items-center gap-8">
                    <div className="nav-contact desktop-only">
                        <a href="tel:07368428158" className="nav-phone">07368 428 158</a>
                    </div>
                    <a href="https://wa.me/447368428158" className="btn btn-primary">
                        WHATSAPP
                    </a>
                </div>
            </div>

            <style jsx>{`
                .nav-links {
                    display: flex;
                    gap: 40px;
                    margin: 0 auto;
                }
                .nav-item-wrap {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .nav-item {
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.15em;
                    text-decoration: none;
                    color: inherit;
                    transition: 0.3s;
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    padding: 10px 0;
                }
                .dropdown-icon {
                    transition: 0.3s;
                }
                .nav-item-wrap:hover .dropdown-icon {
                    transform: rotate(180deg);
                    color: var(--accent);
                }
                .nav-item:hover, .nav-item.active {
                    color: var(--accent);
                }
                .nav-item.active::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: var(--accent);
                }

                /* Dropdown Menu Styling */
                .nav-dropdown {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background: var(--accent);
                    min-width: 220px;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
                    display: flex;
                    flex-direction: column;
                    padding: 5px 0;
                    z-index: 1000;
                    animation: dropdownFade 0.3s var(--ease-expo);
                }
                @keyframes dropdownFade {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .dropdown-link {
                    padding: 12px 25px;
                    color: #fff;
                    text-decoration: none;
                    font-size: 13px;
                    font-weight: 600;
                    transition: 0.3s;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    white-space: nowrap;
                }
                .dropdown-link:last-child {
                    border-bottom: none;
                }
                .dropdown-link:hover {
                    background: rgba(0,0,0,0.1);
                    padding-left: 30px;
                }

                .nav-phone {
                    font-size: 15px;
                    font-weight: 900;
                    color: inherit;
                    text-decoration: none;
                    letter-spacing: 0.05em;
                }
                .premium-nav { 
                    color: #fff; 
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 1000;
                    padding: 20px 0;
                    transition: 0.4s var(--ease-expo);
                }
                .premium-nav.scrolled { 
                    color: #111; 
                    background: rgba(255,255,255,0.95);
                    backdrop-filter: blur(10px);
                    padding: 12px 0;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }
                .premium-nav.always-dark {
                    background: #fff;
                    border-bottom: 1px solid #eee;
                }
                
                @media (max-width: 1024px) {
                    .nav-links { display: none; }
                }
            `}</style>
        </nav>
    );
};

export default Nav;
