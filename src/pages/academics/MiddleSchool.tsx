import { Layout } from '@/components/Layout';
import { BookOpen, FlaskConical, Globe, Trophy } from 'lucide-react';

const MiddleSchool = () => {
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
            <p className="text-lg text-muted-foreground mb-8">
              Our Middle School program challenges students to think critically, work collaboratively, 
              and develop the skills necessary for success in higher education and beyond.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="card-elevated p-6">
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Core Subjects</h3>
                <p className="text-muted-foreground text-sm">
                  English, Hindi, Mathematics, Science, Social Studies, Sanskrit/Third Language
                </p>
              </div>
              <div className="card-elevated p-6">
                <FlaskConical className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Science Labs</h3>
                <p className="text-muted-foreground text-sm">
                  Well-equipped Physics, Chemistry, and Biology laboratories
                </p>
              </div>
              <div className="card-elevated p-6">
                <Globe className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Digital Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Smart classrooms and computer education integrated into curriculum
                </p>
              </div>
              <div className="card-elevated p-6">
                <Trophy className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Board Preparation</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive preparation for Class X board examinations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MiddleSchool;
