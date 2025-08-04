import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-highlight/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-2 sm:px-4 max-w-4xl mx-auto">
        <div className="glass-effect-dark p-4 sm:p-8 rounded-2xl mb-8 mt-4 sm:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-primary-white">
          Build Your Dream Website, Effortlessly
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto text-secondary-white">
          We create stunning, fully customized websites to help your business grow.
          No hassle. No hidden fees. Just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary min-h-[44px]"
            >
              Start Your Project
            </button>
            <button className="btn-secondary min-h-[44px]">
            View Our Work
            </button>
          </div>
        </div>
        
        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          <div className="card-effect p-4 sm:p-6 rounded-xl text-center mb-4 md:mb-0">
            <div className="w-12 h-12 bg-highlight rounded-full mx-auto mb-2 sm:mb-4 flex items-center justify-center">
              <span className="text-primary font-bold text-xl">✨</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-primary-white">Anything One</h3>
            <p className="text-secondary-white text-xs sm:text-sm">Online Store Websites
            Sell your products with a professional and modern design</p>
          </div>
          <div className="card-effect p-4 sm:p-6 rounded-xl text-center mb-4 md:mb-0">
            <div className="w-12 h-12 bg-accent rounded-full mx-auto mb-2 sm:mb-4 flex items-center justify-center">
              <span className="text-primary font-bold text-xl">🚀</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-primary-white">Anything Two</h3>
            <p className="text-secondary-white text-xs sm:text-sm">Business Profile Websites
            Boost your brand's credibility with a beautiful website</p>
          </div>
          <div className="card-effect p-4 sm:p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-success rounded-full mx-auto mb-2 sm:mb-4 flex items-center justify-center">
              <span className="text-primary font-bold text-xl">💡</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-primary-white">Anything Three</h3>
            <p className="text-secondary-white text-xs sm:text-sm">Custom Website Development
            Have a unique idea? Let's build it together</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-secondary-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 