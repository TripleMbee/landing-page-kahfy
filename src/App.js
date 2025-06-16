import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
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
    <div className="min-h-screen bg-gradient-to-br from-forest to-sky">
      {/* Top Dashboard */}
      <div className="fixed top-0 left-0 right-0 bg-forest text-white p-4 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Kahfyy</h1>
            <p className="text-nature">Fail is not an option</p>
          </div>
          <div className="p-4 bg-forest-light rounded-lg">
            <h3 className="font-semibold mb-2">My journey</h3>
            <div className="flex space-x-4 text-sm">
              <p>come from nature back to nature</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Menu */}
      <div className={`fixed top-0 left-0 right-0 bg-forest text-white p-4 z-40 transition-transform duration-300 ${showSlideMenu ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto flex justify-center space-x-8">
          <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })} className="text-nature hover:text-white transition-colors">
            Home
          </button>
          <button onClick={() => document.getElementById('mountains').scrollIntoView({ behavior: 'smooth' })} className="text-nature hover:text-white transition-colors">
            Mountains
          </button>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="text-nature hover:text-white transition-colors">
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