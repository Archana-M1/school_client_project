import { Layout } from '@/components/Layout';
import { BookOpen, Palette, Dumbbell, Laptop, Lightbulb, Book, TrendingUp, Users, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const MiddleSchool = () => {
  const [openCollapse, setOpenCollapse] = useState<number | null>(null);

  const toggleCollapse = (index: number) => {
    setOpenCollapse(openCollapse === index ? null : index);
  };
  return (
    <Layout>
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Middle School</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Preparing students for academic excellence (Classes VI - X)
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 text-justify ">
              At International Delhi Public School (IDPS) Gangavathi, our Middle School Program helps students in Grades 6 to 8. This program supports them as they move from elementary school to high school. We focus on academics, personal growth, and leadership skills to prepare them for future challenges. Our curriculum builds a strong foundation in all subjects, encouraging critical thinking, problem-solving, and creativity.
              Beyond academics, we emphasize character development through leadership activities, sports, arts, and community service. These experiences help students build confidence, teamwork, and responsibility. Our teachers provide individual attention, ensuring a supportive environment where students can explore their talents and interests.
              <br/><br/>By balancing academics with extracurricular activities, we help students grow intellectually, emotionally, and socially, preparing them for lifelong success.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card-elevated p-6">
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Core Subjects</h3>
                <p className="text-muted-foreground text-sm">
                  Mathematics, Science, English, and Social Studies build a strong academic foundation.
                </p>
              </div>
              <div className="card-elevated p-6">
                <Palette className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Electives</h3>
                <p className="text-muted-foreground text-sm">
                  Art, Music, Drama, and Foreign Languages encourage creativity and self-expression.
                </p>
              </div>
              <div className="card-elevated p-6">
                <Dumbbell className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Physical Education</h3>
                <p className="text-muted-foreground text-sm">
                  Enhances fitness, teamwork, and discipline through sports and activities.
                </p>
              </div>
              <div className="card-elevated p-6">
                <Laptop className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Technology & Life Skills</h3>
                <p className="text-muted-foreground text-sm">
                  Prepares students for the digital era with practical and innovative learning.
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-12 text-justify">
              This well-rounded curriculum helps students grow intellectually, think creatively, and develop real-world skills. It prepares them for future success by building knowledge, confidence, and practical abilities for life and career.
            </p>
          </div>
        </div>
      </section>

      {/* New Collapsible Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              Middle School at IDPS Helps Students Build a Strong Foundation for Future Success
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Explore how our program nurtures essential skills and values
            </p>

            <div className="grid grid-cols-1 gap-4">
              {/* Love for Learning */}
              <div className={`group bg-background border-2 rounded-xl overflow-hidden transition-all duration-300 ${openCollapse === 0 ? 'border-primary shadow-lg' : 'border-border hover:border-primary hover:shadow-lg'}`}>
                <button
                  onClick={() => toggleCollapse(0)}
                  className="w-full p-6 flex items-center gap-4"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-display font-bold text-lg">Love for Learning</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform duration-300 ${openCollapse === 0 ? 'rotate-180' : ''}`}
                  />
                </button>
                {openCollapse === 0 && (
                  <div className="px-6 pb-6 animate-slide-down">
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      A love for learning helps students stay curious, explore new ideas, and enjoy discovering knowledge. It encourages them to ask questions and think creatively. This helps them stay engaged in their studies. It builds a strong foundation for future success.
                    </p>
                  </div>
                )}
              </div>

              {/* Good Study Habits */}
              <div className={`group bg-background border-2 rounded-xl overflow-hidden transition-all duration-300 ${openCollapse === 1 ? 'border-primary shadow-lg' : 'border-border hover:border-primary hover:shadow-lg'}`}>
                <button
                  onClick={() => toggleCollapse(1)}
                  className="w-full p-6 flex items-center gap-4"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Book className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-display font-bold text-lg">Good Study Habits</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform duration-300 ${openCollapse === 1 ? 'rotate-180' : ''}`}
                  />
                </button>
                {openCollapse === 1 && (
                  <div className="px-6 pb-6 animate-slide-down">
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      Teachers show students how to study well. This helps them stay organized, manage their time, and finish tasks on time. They learn to plan their studies. They focus better and create a routine. This makes learning easier and helps them succeed in the future.
                    </p>
                  </div>
                )}
              </div>

              {/* Confidence to Succeed */}
              <div className={`group bg-background border-2 rounded-xl overflow-hidden transition-all duration-300 ${openCollapse === 2 ? 'border-primary shadow-lg' : 'border-border hover:border-primary hover:shadow-lg'}`}>
                <button
                  onClick={() => toggleCollapse(2)}
                  className="w-full p-6 flex items-center gap-4"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-display font-bold text-lg">Confidence to Succeed</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform duration-300 ${openCollapse === 2 ? 'rotate-180' : ''}`}
                  />
                </button>
                {openCollapse === 2 && (
                  <div className="px-6 pb-6 animate-slide-down">
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      It helps students trust their abilities, take on challenges, and stay motivated. It encourages them to try new things and learn from mistakes. This helps them develop a positive mindset. It prepares them to reach their goals in school and beyond.
                    </p>
                  </div>
                )}
              </div>

              {/* Supportive Environment */}
              <div className={`group bg-background border-2 rounded-xl overflow-hidden transition-all duration-300 ${openCollapse === 3 ? 'border-primary shadow-lg' : 'border-border hover:border-primary hover:shadow-lg'}`}>
                <button
                  onClick={() => toggleCollapse(3)}
                  className="w-full p-6 flex items-center gap-4"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-display font-bold text-lg">Supportive Environment</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform duration-300 ${openCollapse === 3 ? 'rotate-180' : ''}`}
                  />
                </button>
                {openCollapse === 3 && (
                  <div className="px-6 pb-6 animate-slide-down">
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      Provides guidance, encouragement, and care to help students learn and grow. It builds confidence and encourages a positive mindset. It also helps them feel safe and motivated to explore new ideas and reach their full potential.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MiddleSchool;
