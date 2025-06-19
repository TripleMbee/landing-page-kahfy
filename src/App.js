import React, { useState, useEffect } from 'react';
//import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [showSlideMenu, setShowSlideMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowSlideMenu(scrollPosition > 100); // Show menu after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Top Dashboard */}
      <div className="fixed top-0 left-0 right-0 glass-effect-dark p-4 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary-white">Your Brand</h1>
            <p className="text-secondary-white">Your tagline here</p>
          </div>
          <div className="glass-effect p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-primary-white">Welcome</h3>
            <div className="flex space-x-4 text-sm">
              <p className="text-secondary-white">Customize this section</p>
            </div>
          </div>
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
}

export default App; 