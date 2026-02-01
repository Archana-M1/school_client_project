import { Layout } from '@/components/Layout';
import { Compass, Briefcase, GraduationCap, Users } from 'lucide-react';

const CareerGuidance = () => {
  return (
    <Layout>
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Career Guidance & Counselling</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Helping students discover their path to success
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Our career guidance program helps students identify their strengths, explore career options, 
              and make informed decisions about their future education and profession.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-elevated p-6">
                <Compass className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Career Assessment</h3>
                <p className="text-muted-foreground text-sm">
                  Aptitude tests and personality assessments to identify suitable career paths
                </p>
              </div>
              <div className="card-elevated p-6">
                <Briefcase className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Industry Exposure</h3>
                <p className="text-muted-foreground text-sm">
                  Interactions with professionals from various fields and career fairs
                </p>
              </div>
              <div className="card-elevated p-6">
                <GraduationCap className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Higher Education Guidance</h3>
                <p className="text-muted-foreground text-sm">
                  Information about colleges, entrance exams, and scholarship opportunities
                </p>
              </div>
              <div className="card-elevated p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Personal Counselling</h3>
                <p className="text-muted-foreground text-sm">
                  One-on-one sessions to address individual concerns and aspirations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareerGuidance;
