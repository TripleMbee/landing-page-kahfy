import React from 'react';

const Gallery = () => {
  const features = [
    {
      icon: "🚀",
      title: "Feature One",
      description: "This is a customizable feature description. Replace this text with your own content to showcase what makes your product or service unique.",
      color: "bg-highlight"
    },
    {
      icon: "💡",
      title: "Feature Two", 
      description: "Another customizable feature section. Describe your key benefits, services, or product features here to engage your visitors.",
      color: "bg-accent"
    },
    {
      icon: "✨",
      title: "Feature Three",
      description: "The third feature section. Use this space to highlight important aspects of your business, technology, or service offerings.",
      color: "bg-success"
    }
  ];

  const services = [
    {
      title: "Service One",
      description: "Customize this service description to match your business offerings. This could be a product, service, or solution you provide.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      title: "Service Two",
      description: "Another service or product description. Make this relevant to your industry, whether it's technology, consulting, design, or any other field.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      title: "Service Three", 
      description: "The third service section. Use compelling descriptions that resonate with your target audience and clearly communicate value.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    }
  ];

  const FeatureCard = ({ icon, title, description, color }) => (
    <div className="card-effect p-6 rounded-xl text-center hover-scale">
      <div className={`w-16 h-16 ${color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
        <span className="text-primary font-bold text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-primary-white">{title}</h3>
      <p className="text-secondary-white">{description}</p>
    </div>
  );

  const ServiceCard = ({ title, description, image }) => (
    <div className="card-effect rounded-xl overflow-hidden hover-scale">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-primary-white">{title}</h3>
        <p className="text-secondary-white mb-4">{description}</p>
        <button className="btn-secondary w-full">
          Learn More
        </button>
      </div>
    </div>
  );

  return (
    <section id="features" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary-white">
            Our Features
          </h2>
          <p className="text-xl text-secondary-white max-w-2xl mx-auto">
            Discover what makes us different and how we can help you achieve your goals
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Services Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6 text-primary-white">Our Services</h3>
          <p className="text-secondary-white max-w-2xl mx-auto">
            Explore our comprehensive range of services designed to meet your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-effect-dark p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary-white">Ready to Get Started?</h3>
            <p className="text-secondary-white mb-6">
              Join thousands of satisfied customers who have transformed their business with our solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Free Trial
              </button>
              <button className="btn-secondary">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 