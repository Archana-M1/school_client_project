import { useState, useMemo } from 'react';
import { Layout } from '@/components/Layout';
import { X } from 'lucide-react';

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

// ✅ Allowed folders only
const allowedFolders = [
  'Dance',
  'Drawing',
  'Exercise',
  'Karate',
  'Meditation',
  'Singing',
  'Swimming',
  'sports',
  'TeachingImages',
  'Quiz Competitions',
];

// ✅ Static glob (Vite requirement)
const allImages = import.meta.glob(
  '/src/assets/**/*.{jpg,jpeg,png,webp}',
  { eager: true }
) as Record<string, { default: string }>;

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages: GalleryImage[] = useMemo(() => {
    return Object.entries(allImages)
      .map(([path, module]) => {
        const parts = path.split('/');
        const folderName = parts[parts.length - 2];
        const fileName = parts[parts.length - 1].split('.')[0];

        return {
          src: module.default,
          alt: fileName.replace(/[-_]/g, ' '),
          category: folderName,
        };
      })
      .filter((img) => allowedFolders.includes(img.category)); // ✅ Filter here
  }, []);

  const categories = ['All', ...allowedFolders];

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Gallery
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Explore moments from our vibrant school life
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">

          {/* Filter Buttons */}
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
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-center px-2">
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
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6 text-black" />
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