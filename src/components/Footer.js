import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Fixed Social Media Menu */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-forest-light p-4 rounded-lg shadow-lg z-50">
        <div className="flex flex-col space-y-4">
          <a href="https://www.instagram.com/_kahfyy" className="text-nature hover:text-white transition-colors">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://x.com/Fy_uhuyy" className="text-nature hover:text-white transition-colors">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="www.facebook.com/muh.kahfy.2025" className="text-nature hover:text-white transition-colors">
            <FaFacebook className="text-2xl" />
          </a>
        </div>
      </div>

      <footer id="contact" className="bg-forest py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Nature is Adventure</h2>
          <p className="text-nature text-center mb-12 max-w-2xl mx-auto">
          God created beauty to be enjoyed, not owned, so keep and preserve it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-forest-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-4">
                <p className="flex items-center space-x-3">
                  <FaEnvelope className="text-nature text-xl" />
                  <span>info@centraljavamountains.com</span>
                </p>
                <p className="flex items-center space-x-3">
                  <FaPhone className="text-nature text-xl" />
                  <span>+62 21 1234 5678</span>
                </p>
                <p className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-nature text-xl" />
                  <span>Semarang, Central Java</span>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-forest-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Mountain Guides</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => document.getElementById('mountains').scrollIntoView({ behavior: 'smooth' })}
                    className="text-nature hover:text-white transition-colors"
                  >
                    Mount Merbabu Guide
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('mountains').scrollIntoView({ behavior: 'smooth' })}
                    className="text-nature hover:text-white transition-colors"
                  >
                    Mount Sumbing Guide
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('mountains').scrollIntoView({ behavior: 'smooth' })}
                    className="text-nature hover:text-white transition-colors"
                  >
                    Mount Kembang Guide
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-forest-light mt-8 pt-8 text-center text-nature">
            <p>&copy; {new Date().getFullYear()} Central Java Mountains. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 