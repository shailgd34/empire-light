import React, { useState, useEffect } from 'react';
import { girls } from '../data/girls';
import gsap from 'gsap';
import { useLocation, Link } from 'react-router-dom';

const GirlsPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialLocation = queryParams.get('location') || 'All';

    const [filter, setFilter] = useState({
        location: initialLocation,
        type: 'All',
        status: 'All',
        age: 'All'
    });
    const [sortBy, setSortBy] = useState('name');
    const [viewMode, setViewMode] = useState('grid');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const locations = ['All', ...new Set(girls.map(g => g.location))];
    const types = ['All', ...new Set(girls.map(g => g.type))];
    const statuses = ['All', 'Available Now', 'Busy'];
    const ageGroups = ['All', '18-21', '22-25', '26+'];

    const filteredGirls = girls.filter(girl => {
        const locationMatch = filter.location === 'All' ||
            girl.location.toLowerCase().includes(filter.location.toLowerCase());

        const ageMatch = filter.age === 'All' ||
            (filter.age === '18-21' && girl.age >= 18 && girl.age <= 21) ||
            (filter.age === '22-25' && girl.age >= 22 && girl.age <= 25) ||
            (filter.age === '26+' && girl.age >= 26);

        return locationMatch &&
            ageMatch &&
            (filter.type === 'All' || girl.type === filter.type) &&
            (filter.status === 'All' || girl.status === filter.status);
    }).sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'age') return a.age - b.age;
        if (sortBy === 'price') return parseInt(a.price.replace('£', '')) - parseInt(b.price.replace('£', ''));
        return 0;
    });

    const [visibleCount, setVisibleCount] = useState(8);

    useEffect(() => {
        const currentLoc = new URLSearchParams(location.search).get('location') || 'All';
        setFilter(prev => ({ ...prev, location: currentLoc }));
    }, [location.search]);

    // Reset visible count when filters change
    useEffect(() => {
        setVisibleCount(8);
    }, [filter, sortBy]);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Header animations
        gsap.from('.simple-banner .anim-reveal', {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out'
        });

        // Grid items reveal
        document.querySelectorAll('.anim-reveal').forEach(el => {
            gsap.fromTo(el, 
                { opacity: 0, y: 30 },
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
    }, [filteredGirls.length, visibleCount]);

    const girlsToShow = filteredGirls.slice(0, visibleCount);
    const hasMore = visibleCount < filteredGirls.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 8);
    };

    return (
        <div className="girls-page">
            {/* Simple Banner */}
            <header className="simple-banner">
                <div className="banner-bg">
                    <img src="/images/pexels-connorscottmcmanus-13614895.jpg" alt="Banner" />
                    <div className="overlay"></div>
                </div>
                <div className="container relative z-10">
                    <h1 className="title anim-reveal">Our <span>Girls</span></h1>
                    <p className="description anim-reveal">
                        Meet our available companions. Professional, elegant, and verified.
                    </p>
                </div>
            </header>

            <div className="container girls-layout-wrap">
                {/* Creative Sidebar Filter */}
                <aside className={`filter-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                    <div className="sidebar-header">
                        <h3>FILTERS</h3>
                        <button className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            {isSidebarOpen ? 'CLOSE' : 'OPEN'}
                        </button>
                    </div>

                    <div className="filter-content">
                        <div className="filter-section">
                            <h4>Location</h4>
                            <div className="filter-chips">
                                {locations.map(loc => (
                                    <button
                                        key={loc}
                                        className={`chip ${filter.location === loc ? 'active' : ''}`}
                                        onClick={() => setFilter({ ...filter, location: loc })}
                                    >
                                        {loc}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="filter-section">
                            <h4>Age Group</h4>
                            <div className="filter-chips">
                                {ageGroups.map(age => (
                                    <button
                                        key={age}
                                        className={`chip ${filter.age === age ? 'active' : ''}`}
                                        onClick={() => setFilter({ ...filter, age: age })}
                                    >
                                        {age}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="filter-section">
                            <h4>Category</h4>
                            <div className="filter-chips">
                                {types.map(t => (
                                    <button
                                        key={t}
                                        className={`chip ${filter.type === t ? 'active' : ''}`}
                                        onClick={() => setFilter({ ...filter, type: t })}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="filter-section">
                            <h4>Availability</h4>
                            <div className="filter-chips">
                                {statuses.map(s => (
                                    <button
                                        key={s}
                                        className={`chip ${filter.status === s ? 'active' : ''}`}
                                        onClick={() => setFilter({ ...filter, status: s })}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="filter-section">
                            <h4>Sort By</h4>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sidebar-select">
                                <option value="name">Name (A-Z)</option>
                                <option value="age">Age</option>
                                <option value="price">Price (Low to High)</option>
                            </select>
                        </div>

                        <button className="reset-btn" onClick={() => setFilter({ location: 'All', type: 'All', status: 'All', age: 'All' })}>
                            RESET ALL
                        </button>
                    </div>
                </aside>

                {/* Profile Grid/List */}
                <main className="girls-main">
                    <div className="grid-header">
                        <span className="results-count">Showing {girlsToShow.length} of {filteredGirls.length} models</span>
                        <div className="view-controls">
                            <button 
                                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`} 
                                onClick={() => setViewMode('grid')}
                                title="Grid View"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                            </button>
                            <button 
                                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`} 
                                onClick={() => setViewMode('list')}
                                title="List View"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                            </button>
                        </div>
                    </div>

                    {girlsToShow.length > 0 ? (
                        <>
                            <div className={viewMode === 'grid' ? 'girls-grid-4col' : 'girls-list-view'}>
                                {girlsToShow.map((girl) => (
                                    viewMode === 'grid' ? (
                                        <div key={girl.id} className="girl-card-simple anim-reveal">
                                            <Link to={`/profile/${girl.id}`} className="card-link-wrapper">
                                                <div className="card-media">
                                                    <img src={girl.image} alt={girl.name} />
                                                    {girl.isVip && <span className="vip-badge">VIP</span>}
                                                    <div className={`status-dot ${girl.status === 'Available Now' ? 'online' : 'busy'}`}></div>
                                                </div>
                                                <div className="card-info">
                                                    <div className="info-top">
                                                        <span className="name">{girl.name}, {girl.age}</span>
                                                        <span className="price">{girl.price}</span>
                                                    </div>
                                                    <div className="info-bottom">
                                                        <span className="location">{girl.location}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="card-hover-actions">
                                                <Link to={`/profile/${girl.id}`} className="view-link">VIEW PROFILE</Link>
                                            </div>
                                        </div>
                                    ) : (
                                        <div key={girl.id} className="girl-card-list anim-reveal">
                                            <Link to={`/profile/${girl.id}`} className="list-media">
                                                <img src={girl.image} alt={girl.name} />
                                                {girl.isVip && <span className="vip-badge">VIP</span>}
                                            </Link>
                                            <div className="list-content">
                                                <div className="list-header">
                                                    <Link to={`/profile/${girl.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                        <h3>{girl.name}, {girl.age}</h3>
                                                        <span className="list-location">{girl.location}</span>
                                                    </Link>
                                                    <div className="list-status">
                                                        <span className={`status-tag ${girl.status === 'Available Now' ? 'online' : 'busy'}`}>
                                                            {girl.status}
                                                        </span>
                                                        <span className="list-price">{girl.price}</span>
                                                    </div>
                                                </div>
                                                <p className="list-desc">Available for bookings in {girl.location} and surrounding areas. Experience elite companionship at its finest.</p>
                                                <div className="list-footer">
                                                    <div className="list-tags">
                                                        <span>{girl.type}</span>
                                                        <span>{girl.availability}</span>
                                                    </div>
                                                    <Link to={`/profile/${girl.id}`} className="btn-outline btn-small">VIEW FULL PROFILE</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>

                            {hasMore && (
                                <div className="load-more-wrap">
                                    <button className="load-more-btn" onClick={handleLoadMore}>
                                        LOAD MORE MODELS
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="no-results">
                            <h3>No results found</h3>
                            <p>Try different filters</p>
                        </div>
                    )}
                </main>
            </div>

            <style jsx>{`
                .view-controls {
                    display: flex;
                    gap: 10px;
                }
                .view-btn {
                    background: none;
                    border: 1px solid #eee;
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: #999;
                    transition: 0.3s;
                }
                .view-btn:hover, .view-btn.active {
                    border-color: var(--accent);
                    color: var(--accent);
                }

                /* List View Styling */
                .girls-list-view {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .girl-card-list {
                    display: flex;
                    background: #fff;
                    border: 1px solid #eee;
                    overflow: hidden;
                    transition: 0.3s;
                }
                .girl-card-list:hover {
                    border-color: var(--accent);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }
                .list-media {
                    width: 220px;
                    min-width: 220px;
                    position: relative;
                    aspect-ratio: 1/1.2;
                }
                .list-media img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .list-content {
                    flex: 1;
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                }
                .list-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 15px;
                }
                .list-header h3 {
                    font-size: 20px;
                    font-weight: 900;
                    text-transform: uppercase;
                    margin-bottom: 5px;
                }
                .list-location {
                    font-size: 12px;
                    color: #999;
                    font-weight: 700;
                    text-transform: uppercase;
                }
                .list-status {
                    text-align: right;
                }
                .status-tag {
                    display: block;
                    font-size: 10px;
                    font-weight: 900;
                    text-transform: uppercase;
                    margin-bottom: 8px;
                }
                .status-tag.online { color: #25D366; }
                .status-tag.busy { color: #ff007f; }
                .list-price {
                    font-size: 18px;
                    font-weight: 900;
                    color: var(--accent);
                }
                .list-desc {
                    font-size: 14px;
                    color: #666;
                    line-height: 1.6;
                    margin-bottom: 25px;
                }
                .list-footer {
                    margin-top: auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .list-tags {
                    display: flex;
                    gap: 10px;
                }
                .list-tags span {
                    font-size: 10px;
                    font-weight: 800;
                    background: #f7f7f7;
                    padding: 5px 12px;
                    text-transform: uppercase;
                }
                .btn-small {
                    padding: 10px 20px;
                    font-size: 10px;
                }

                @media (max-width: 768px) {
                    .girl-card-list { flex-direction: column; }
                    .list-media { width: 100%; aspect-ratio: 1/1.3; }
                }

                .grid-header {
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .results-count {
                    font-size: 11px;
                    font-weight: 800;
                    color: #999;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                .card-link-wrapper {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                }
                .load-more-wrap {
                    margin-top: 50px;
                    text-align: center;
                }
                .load-more-btn {
                    background: transparent;
                    border: 1px solid #eee;
                    padding: 15px 40px;
                    font-size: 11px;
                    font-weight: 900;
                    color: #111;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    transition: 0.3s;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }
                .load-more-btn:hover {
                    border-color: var(--accent);
                    color: var(--accent);
                    transform: translateY(-2px);
                }
                .girls-page {
                    background: #fcfaf5;
                    padding-top: 80px;
                    min-height: 100vh;
                }

                .simple-banner {
                    position: relative;
                    height: 350px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: #fff;
                    margin-bottom: 40px;
                }
                .banner-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }
                .banner-bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.6);
                }
                .simple-banner .title {
                    font-size: 3rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    margin-bottom: 10px;
                }
                .simple-banner .title span { color: var(--accent); }
                .simple-banner .description {
                    font-size: 1.1rem;
                    opacity: 0.9;
                }

                .girls-layout-wrap {
                    display: flex;
                    gap: 30px;
                    padding-bottom: 80px;
                }

                /* Sidebar */
                .filter-sidebar {
                    width: 280px;
                    background: #fff;
                    border: 1px solid #eee;
                    padding: 25px;
                    height: fit-content;
                    position: sticky;
                    top: 100px;
                    transition: 0.3s;
                }
                .sidebar-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 25px;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 15px;
                }
                .sidebar-header h3 { font-size: 14px; letter-spacing: 0.1em; color: #111; }
                .toggle-btn {
                    font-size: 10px;
                    font-weight: 900;
                    color: var(--accent);
                    background: none;
                    border: none;
                    cursor: pointer;
                }

                .filter-section {
                    margin-bottom: 25px;
                }
                .filter-section h4 {
                    font-size: 11px;
                    font-weight: 900;
                    text-transform: uppercase;
                    color: #999;
                    margin-bottom: 12px;
                    letter-spacing: 0.05em;
                }
                .filter-chips {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }
                .chip {
                    background: #f7f7f7;
                    border: 1px solid #eee;
                    padding: 6px 12px;
                    font-size: 11px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: 0.2s;
                    color: #555;
                }
                .chip:hover { border-color: var(--accent); }
                .chip.active {
                    background: var(--accent);
                    color: #fff;
                    border-color: var(--accent);
                }

                .sidebar-select {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #eee;
                    font-size: 12px;
                    font-weight: 700;
                    background: #f7f7f7;
                }

                .reset-btn {
                    width: 100%;
                    padding: 12px;
                    background: #111;
                    color: #fff;
                    border: none;
                    font-size: 11px;
                    font-weight: 900;
                    cursor: pointer;
                    margin-top: 10px;
                }

                /* Grid */
                .girls-main {
                    flex: 1;
                }
                .girls-grid-4col {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                }

                .girl-card-simple {
                    background: #fff;
                    border: 1px solid #eee;
                    transition: 0.3s;
                    position: relative;
                }
                .girl-card-simple:hover {
                    box-shadow: 0 15px 30px rgba(0,0,0,0.05);
                    border-color: var(--accent);
                }

                .card-media {
                    position: relative;
                    aspect-ratio: 1 / 1.3;
                    overflow: hidden;
                    background: #eee;
                }
                .card-media img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: 0.5s;
                }
                .girl-card-simple:hover .card-media img { transform: scale(1.05); }

                .vip-badge {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background: #ff007f;
                    color: #fff;
                    font-size: 9px;
                    font-weight: 900;
                    padding: 3px 8px;
                    z-index: 5;
                }
                .status-dot {
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    border: 2px solid #fff;
                }
                .status-dot.online { background: #25D366; box-shadow: 0 0 5px #25D366; }
                .status-dot.busy { background: #ff007f; }

                .card-info {
                    padding: 15px;
                }
                .info-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 5px;
                }
                .name { font-size: 13px; font-weight: 900; color: #111; text-transform: uppercase; }
                .price { font-size: 12px; font-weight: 900; color: var(--accent); }
                .location { font-size: 10px; color: #999; font-weight: 700; text-transform: uppercase; }

                .card-hover-actions {
                    margin-top: 12px;
                    padding-top: 12px;
                    border-top: 1px solid #f7f7f7;
                    text-align: center;
                }
                .view-link {
                    font-size: 10px;
                    font-weight: 900;
                    color: #111;
                    text-decoration: none;
                    letter-spacing: 0.1em;
                }
                .view-link:hover { color: var(--accent); }

                @media (max-width: 1200px) {
                    .girls-grid-4col { grid-template-columns: repeat(3, 1fr); }
                }
                @media (max-width: 992px) {
                    .girls-layout-wrap { flex-direction: column; }
                    .filter-sidebar { width: 100%; position: static; }
                    .girls-grid-4col { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 480px) {
                    .girls-grid-4col { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default GirlsPage;
