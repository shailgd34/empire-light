import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Pages
import Home from './pages/Home';
import GirlsPage from './pages/GirlsPage';
import ProfilePage from './pages/ProfilePage';
import CityPage from './pages/CityPage';
import BookingPage from './pages/BookingPage';
import JoinPage from './pages/JoinPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import RegionsPage from './pages/RegionsPage';

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import ScrollToTop from './components/ScrollToTop';
import ScrollReset from './components/ScrollReset';

const App = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    return (
        <Router>
            <div id="app-root">
                <ScrollReset />
                <Nav />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/girls" element={<GirlsPage />} />
                        <Route path="/profile/:id" element={<ProfilePage />} />
                        <Route path="/escorts/:city" element={<CityPage />} />
                        <Route path="/booking" element={<BookingPage />} />
                        <Route path="/join-us" element={<JoinPage />} />
                        <Route path="/regions" element={<RegionsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/blog/:id" element={<BlogDetailsPage />} />
                        {/* Fallback for other routes */}
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
                <ScrollToTop />
                <StickyCTA />
            </div>
        </Router>
    );
};

export default App;
