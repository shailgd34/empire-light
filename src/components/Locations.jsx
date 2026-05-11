import React, { useState } from 'react';

const Locations = () => {
    const [activeLoc, setActiveLoc] = useState(0);

    const locations = [
        { 
            city: 'Sheffield', 
            area: 'South Yorkshire (Our Base)', 
            desc: 'Our main office is in Sheffield. We provide fast outcall service for the city and surrounding areas.',
            img: '/images/pexels-noirgenesis-5953288.jpg',
            stats: ['24/7 Service', 'Fast Arrival', 'Trusted Agency']
        },
        { 
            city: 'Leeds', 
            area: 'West Yorkshire', 
            desc: 'We offer elite outcall services in Leeds. We visit all major hotels and private homes with full discretion.',
            img: '/images/pexels-yulianaphoto-10110684.jpg',
            stats: ['Hotel Visits', 'Discreet Service', 'Leeds Hub']
        },
        { 
            city: 'Nottingham', 
            area: 'East Midlands', 
            desc: 'We provide beautiful companions across Nottingham. We cover the city center and all nearby areas.',
            img: '/images/pexels-vika-glitter-392079-11363751.jpg',
            stats: ['East Midlands', 'Safe Travel', 'Always On Time']
        },
        { 
            city: 'Manchester', 
            area: 'Greater Manchester', 
            desc: 'A premium service in Manchester city center. Our girls provide elite visits across the Manchester region.',
            img: '/images/pexels-vika-glitter-392079-8780221.jpg',
            stats: ['City Center', 'VIP Service', 'Luxury Travel']
        },
        { 
            city: 'Doncaster', 
            area: 'South Yorkshire', 
            desc: 'Serving Doncaster and surrounding districts with elite companionship. Fast response for all local inquiries.',
            img: '/images/pexels-macnalodao-20270579.jpg',
            stats: ['Fast Response', 'Discreet Hub', 'Local Service']
        },
        { 
            city: 'Barnsley', 
            area: 'South Yorkshire', 
            desc: 'Elite outcall services provided throughout Barnsley. Our girls are available for social and personal dates.',
            img: '/images/pexels-vika-glitter-392079-13066145.jpg',
            stats: ['South Yorkshire', 'Social Dates', 'Verified Profiles']
        }
    ];

    const surroundings = [
        'Chesterfield', 'Rotherham', 'Worksop', 'Wakefield', 'Bradford', 'Huddersfield'
    ];

    return (
        <section className="bg-bg-primary py-16 md:py-24 relative overflow-hidden" id="locations">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
                <div className="absolute top-0 right-0 w-1/2 h-full border-l border-black/10"></div>
                <span className="text-[30vw] font-bold text-black absolute -bottom-10 -left-10 leading-none">Map</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Left: City List */}
                    <div className="lg:col-span-6 space-y-10 anim-section-reveal">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-px bg-gold/30"></div>
                                <span className="text-gold font-bold text-xs tracking-[0.3em] uppercase">Where We Cover</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
                                Major <span className="italic text-transparent" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.25)' }}>Hubs</span>
                            </h2>
                        </div>

                        <div className="flex flex-col">
                            {locations.map((loc, idx) => (
                                <button 
                                    key={idx}
                                    onMouseEnter={() => setActiveLoc(idx)}
                                    className="group flex items-center justify-between py-5 border-b border-black/5 text-left transition-all duration-500"
                                >
                                    <div className="flex items-baseline gap-6">
                                        <span className={`text-xs font-bold transition-colors duration-500 ${activeLoc === idx ? 'text-gold' : 'text-black/20'}`}>0{idx + 1}</span>
                                        <span className={`text-2xl md:text-5xl font-bold transition-all duration-700 ${activeLoc === idx ? 'text-black translate-x-4 italic' : 'text-black/30 group-hover:text-black/60'}`}>
                                            {loc.city}
                                        </span>
                                    </div>
                                    <div className={`w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center transition-all duration-700 ${activeLoc === idx ? 'bg-gold border-gold text-white rotate-45 scale-110' : 'opacity-0'}`}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: City Details Card */}
                    <div className="lg:col-span-6 anim-section-reveal">
                        <div className="bg-bg-secondary h-full relative overflow-hidden group shadow-2xl border border-black/5">
                            <img 
                                src={locations[activeLoc].img} 
                                alt={locations[activeLoc].city} 
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-[2000ms]" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                            
                            <div className="absolute bottom-0 left-0 p-10 md:p-14 space-y-8 w-full">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-px bg-gold/50"></div>
                                        <span className="text-gold font-bold text-xs uppercase tracking-widest">{locations[activeLoc].area}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-white italic">{locations[activeLoc].city}</h3>
                                    <p className="text-white/60 text-base md:text-lg max-w-sm font-medium leading-relaxed">
                                        {locations[activeLoc].desc}
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                                    {locations[activeLoc].stats.map((stat, sIdx) => (
                                        <div key={sIdx} className="space-y-1">
                                            <span className="text-gold font-bold text-[0.65rem] uppercase tracking-widest block">{stat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Other Areas */}
                <div className="mt-16 pt-8 border-t border-black/5 flex flex-wrap items-center gap-x-12 gap-y-6 anim-section-reveal">
                    <span className="text-xs font-bold text-black/30 uppercase tracking-[0.4em]">Surrounding Areas</span>
                    <div className="flex flex-wrap gap-8">
                        {surroundings.map((area) => (
                            <span key={area} className="text-xs font-bold text-black/60 hover:text-gold cursor-default transition-colors uppercase tracking-widest">
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
