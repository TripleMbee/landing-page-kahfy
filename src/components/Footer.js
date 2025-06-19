import React from 'react';
import { FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Fixed Social Media Menu */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 glass-effect-dark p-4 rounded-lg shadow-lg z-50">
        <div className="flex flex-col space-y-4">
          <a
            href="https://www.instagram.com/_kahfyy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-secondary-white hover:text-white hover:scale-110 transition-transform duration-300"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href="https://x.com/Fy_uhuyy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
            className="text-secondary-white hover:text-white hover:scale-110 transition-transform duration-300"
          >
            <FaTwitter className="text-3xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-secondary-white hover:text-white hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://github.com/TripleMbee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-secondary-white hover:text-white hover:scale-110 transition-transform duration-300"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>

      <footer id="contact" className="glass-effect-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-white">
              Get In Touch
            </h2>
            <p className="text-secondary-white max-w-2xl mx-auto">
              Ready to start your journey? Contact us today and let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Contact Information */}
            <div className="card-effect p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary-white">Contact Info</h3>
              <div className="space-y-4">
                <p className="flex items-center space-x-3">
                  <FaEnvelope className="text-highlight text-xl" />
                  <span className="text-secondary-white">hello@yourcompany.com</span>
                </p>
                <p className="flex items-center space-x-3">
                  <FaPhone className="text-highlight text-xl" />
                  <span className="text-secondary-white">+1 (555) 123-4567</span>
                </p>
                <p className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-highlight text-xl" />
                  <span className="text-secondary-white">Your City, State 12345</span>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="card-effect p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                    className="text-secondary-white hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                    className="text-secondary-white hover:text-white transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="text-secondary-white hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="card-effect p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary-white">Stay Updated</h3>
              <p className="text-secondary-white mb-4">Subscribe to our newsletter for the latest updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-highlight"
                />
                <button className="px-4 py-2 bg-highlight text-primary rounded-r-lg font-semibold hover:bg-light transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-secondary-white">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 