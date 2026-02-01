import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { X } from 'lucide-react';
import heroImage from '@/assets/hero-1.jpg';
import classroomImage from '@/assets/hero-2.jpg';
import schoolImage from '@/assets/school-about-1.jpg';
import libraryImage from '@/assets/school-about-2.jpg';

const galleryImages = [
  { src: heroImage, alt: 'School Campus', category: 'Campus' },
  { src: classroomImage, alt: 'Classroom', category: 'Academics' },
  { src: schoolImage, alt: 'School Building', category: 'Campus' },
  { src: libraryImage, alt: 'Library', category: 'Facilities' },
  { src: heroImage, alt: 'Sports Ground', category: 'Sports' },
  { src: classroomImage, alt: 'Science Lab', category: 'Facilities' },
  { src: schoolImage, alt: 'Assembly Hall', category: 'Events' },
  { src: libraryImage, alt: 'Art Room', category: 'Activities' },
];

const categories = ['All', 'Campus', 'Academics', 'Facilities', 'Sports', 'Events', 'Activities'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Gallery</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Explore moments from our vibrant school life through our photo gallery
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
