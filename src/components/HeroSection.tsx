import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Lightbulb, Award, Shield, Heart } from 'lucide-react';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';

const slides = [
  { image: hero1, alt: 'School Campus' },
  { image: hero2, alt: 'Students Learning' },
];

const featureCards = [
  {
    title: 'Empowering Future Innovators',
    description: 'Fostering creativity and critical thinking skills that prepare students for tomorrow\'s challenges.',
    icon: Lightbulb,
  },
  {
    title: 'Inspiring Academic Excellence',
    description: 'Comprehensive curriculum designed to nurture intellectual growth and academic achievement.',
    icon: Award,
  },
  {
    title: 'Building Strong Ethical Foundations',
    description: 'Instilling values of integrity, respect, and social responsibility in every student.',
    icon: Shield,
  },
  {
    title: 'Creating a Safe and Supportive Environment',
    description: 'A nurturing atmosphere where every child feels valued, respected, and encouraged to excel.',
    icon: Heart,
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <section className="relative h-[80vh] md:h-[90vh] min-h-[500px] md:min-h-[600px] overflow-hidden">
          {/* Carousel */}
          <div className="absolute inset-0">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="hero-overlay absolute inset-0" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 md:px-20 h-full flex flex-col justify-center">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-in">
                Welcome to <span className="text-[#ffffcc]">International Delhi Public School,</span> Gangavathi
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-slide-up">
                Nurturing minds, building futures, creating leaders of tomorrow
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up justify-center md:justify-start">
                <a href="/admissions/enquiry" className="btn-primary bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Apply Now
                </a>
                <a href="/about" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 lg:hidden">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary-foreground' : 'bg-primary-foreground/40'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Feature Cards - Desktop: Overlapping, Mobile: Below hero */}
        {/* Desktop version - hidden on mobile */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 z-30 translate-y-[40%]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {featureCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className="feature-card text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for desktop overlapping cards */}
      <div className="hidden md:block h-40 lg:h-48"></div>

      {/* Mobile Feature Cards - Normal flow, below hero */}
      <div className="md:hidden py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4">
            {featureCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="feature-card text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
