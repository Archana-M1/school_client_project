import { Layout } from '@/components/Layout';
import { BookOpen, Users, Clock, Award } from 'lucide-react';

const PrimarySchool = () => {
  return (
    <Layout>
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Primary School</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Building strong foundations for lifelong learning (Classes I - V)
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Our Primary School program focuses on creating a nurturing environment where young learners 
              develop essential skills in literacy, numeracy, and social interaction. We believe in 
              learning through exploration and discovery.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="card-elevated p-6">
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Comprehensive Curriculum</h3>
                <p className="text-muted-foreground text-sm">
                  English, Hindi, Mathematics, Environmental Science, General Knowledge, Computer Science, Art & Craft
                </p>
              </div>
              <div className="card-elevated p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Small Class Sizes</h3>
                <p className="text-muted-foreground text-sm">
                  Personalized attention with optimal teacher-student ratios
                </p>
              </div>
              <div className="card-elevated p-6">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Activity-Based Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Hands-on experiences that make learning fun and memorable
                </p>
              </div>
              <div className="card-elevated p-6">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Holistic Development</h3>
                <p className="text-muted-foreground text-sm">
                  Focus on academic, physical, emotional, and social growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrimarySchool;
