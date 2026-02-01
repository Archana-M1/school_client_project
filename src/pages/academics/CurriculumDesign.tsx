import { Layout } from '@/components/Layout';
import { BookOpen, Brain, Globe, Heart } from 'lucide-react';

const CurriculumDesign = () => {
  return (
    <Layout>
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Curriculum Design</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            A balanced curriculum designed for holistic development
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Our curriculum is designed to provide a well-rounded education that balances academic 
              rigor with creative expression and physical development.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-elevated p-6">
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Academic Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  CBSE-aligned curriculum with focus on conceptual understanding and application-based learning
                </p>
              </div>
              <div className="card-elevated p-6">
                <Brain className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Critical Thinking</h3>
                <p className="text-muted-foreground text-sm">
                  Problem-solving activities and project-based learning to develop analytical skills
                </p>
              </div>
              <div className="card-elevated p-6">
                <Globe className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Global Perspective</h3>
                <p className="text-muted-foreground text-sm">
                  Exposure to diverse cultures and current affairs to create global citizens
                </p>
              </div>
              <div className="card-elevated p-6">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Value Education</h3>
                <p className="text-muted-foreground text-sm">
                  Integration of moral values and life skills throughout the curriculum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CurriculumDesign;
