import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Lightbulb, Award, Shield, Heart } from "lucide-react";
import hero1 from "@/assets/LandingPageImages/hero-1.jpeg";
import hero2 from "@/assets/hero-2.jpg";

const slides = [
  { image: hero1, alt: "School Campus" },
  { image: hero2, alt: "Students Learning" },
];

const featureCards = [
  {
    title: "Empowering Future Innovators",
    description:
      "Fostering creativity and critical thinking skills that prepare students for tomorrow's challenges.",
    icon: Lightbulb,
  },
  {
    title: "Inspiring Academic Excellence",
    description:
      "Comprehensive curriculum designed to nurture intellectual growth and academic achievement.",
    icon: Award,
  },
  {
    title: "Building Strong Ethical Foundations",
    description:
      "Instilling values of integrity, respect, and social responsibility in every student.",
    icon: Shield,
  },
  {
    title: "Creating a Safe and Supportive Environment",
    description:
      "A nurturing atmosphere where every child feels valued, respected, and encouraged to excel.",
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

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[95vh] min-h-[450px] overflow-hidden">

        {/* Background Slides */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-20 text-center md:text-left">

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Welcome to{" "}
              <span className="text-yellow-200">
                International Delhi Public School,
              </span>{" "}
              Gangavathi
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 max-w-2xl mx-auto md:mx-0">
              Nurturing minds, building futures, creating leaders of tomorrow
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/admissions/enquiry"
                className="px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-200 transition"
              >
                Apply Now
              </a>

              <a
                href="/about"
                className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-primary transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition"
        >
          <ChevronLeft className="text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition"
        >
          <ChevronRight className="text-white" />
        </button>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {card.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}