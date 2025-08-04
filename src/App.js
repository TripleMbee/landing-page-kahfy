import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
//import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [showSlideMenu, setShowSlideMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowSlideMenu(scrollPosition > 100); // Show menu after scrolling 100px
    };
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };
    
    window.addEventListener('scroll', handleScroll);
    checkAuthStatus(); // Check initial auth status
    
    // Listen for storage changes (when token is added/removed)
    window.addEventListener('storage', checkAuthStatus);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/login';
  };

  const AuthButtons = () => {
    const navigate = useNavigate();
    
    if (isLoggedIn) {
      return (
        <button
          onClick={handleLogout}
          className="px-6 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-medium"
        >
          Logout
        </button>
      );
    }
    
    return (
      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/login')}
          className="px-6 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-medium"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/register')}
          className="px-6 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300 font-medium"
        >
          Register
        </button>
      </div>
    );
  };

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Top Dashboard */}
      <div className="fixed top-0 left-0 right-0 glass-effect-dark p-4 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
          <div>
            <h1 className="text-2xl font-bold text-primary-white">Fy Studio</h1>
            <p className="text-secondary-white">Professional Websites Made Simple</p>
          </div>
          {/* Auth buttons */}
          <AuthButtons />
        </div>
      </div>

      {/* Slide Menu */}
      <div className={`fixed top-0 left-0 right-0 glass-effect-dark p-4 z-40 transition-transform duration-300 ${showSlideMenu ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto flex justify-center space-x-8">
          <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })} className="text-secondary-white hover:text-white transition-colors font-medium">
            Home
          </button>
          <button onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })} className="text-secondary-white hover:text-white transition-colors font-medium">
            Features
          </button>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="text-secondary-white hover:text-white transition-colors font-medium">
            Contact
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24"> {/* Add padding-top to account for fixed dashboard */}
        <Hero />
        <Gallery />
        <Footer />
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App; 