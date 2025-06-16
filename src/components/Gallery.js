import React from 'react';

const Gallery = () => {
  const merbabuImages = [
    {
      url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
      title: "Merbabu Summit",
      description: "The highest point of Mount Merbabu at 3,145 meters above sea level"
    },
    {
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
      title: "Merbabu Crater",
      description: "Ancient volcanic crater with unique geological formations"
    },
    {
      url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
      title: "Merbabu Sunrise",
      description: "Breathtaking sunrise views from the summit"
    }
  ];

  const sumbingImages = [
    {
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
      title: "Sumbing Peak",
      description: "The majestic peak of Mount Sumbing at 3,371 meters"
    },
    {
      url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
      title: "Sumbing Crater",
      description: "The impressive crater with its unique landscape"
    },
    {
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
      title: "Sumbing Trail",
      description: "Scenic hiking trails through lush vegetation"
    }
  ];

  const kembangImages = [
    {
      url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
      title: "Kembang Summit",
      description: "The beautiful peak of Mount Kembang"
    },
    {
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
      title: "Kembang Forest",
      description: "Rich biodiversity in the mountain's forest"
    },
    {
      url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
      title: "Kembang View",
      description: "Panoramic views of the surrounding landscape"
    }
  ];

  const MountainSection = ({ title, description, images }) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <p className="text-nature mb-8 max-w-2xl">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-nature">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="mountains" className="py-16 px-4 bg-forest-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Central Java Mountains</h2>
        
        <MountainSection
          title="Mount Merbabu"
          description="Mount Merbabu is a dormant stratovolcano in Central Java, Indonesia. Known for its beautiful crater and stunning views, it's a popular destination for hikers and nature enthusiasts. The mountain offers various trails with different difficulty levels, making it accessible for both beginners and experienced climbers."
          images={merbabuImages}
        />

        <MountainSection
          title="Mount Sumbing"
          description="Mount Sumbing is one of the highest volcanoes in Central Java, standing at 3,371 meters. It features a large crater and offers spectacular views of the surrounding landscape. The mountain is known for its challenging trails and beautiful sunrise views from the summit."
          images={sumbingImages}
        />

        <MountainSection
          title="Mount Kembang"
          description="Mount Kembang, though smaller than its neighbors, offers unique natural beauty and rich biodiversity. The mountain is surrounded by lush forests and provides excellent opportunities for nature photography and wildlife observation."
          images={kembangImages}
        />

        <div className="text-center mt-12">
          <button className="bg-nature text-forest px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white transition-colors">
            Plan Your Hike
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 