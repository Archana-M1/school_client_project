import { Layout } from '@/components/Layout';
import { Atom, Stethoscope, Calculator, Target } from 'lucide-react';

const IitNeet = () => {
  return (
    <Layout>
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">IIT JEE & NEET Preparation</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Foundation programs for engineering and medical aspirants
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Our specialized programs prepare students for competitive examinations right from their 
              school years, building a strong foundation for success in IIT JEE and NEET.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card-elevated p-8">
                <Atom className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-display font-bold text-xl mb-4">IIT JEE Foundation</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Advanced Physics, Chemistry & Mathematics</li>
                  <li>• Problem-solving techniques</li>
                  <li>• Regular mock tests</li>
                  <li>• Expert faculty guidance</li>
                </ul>
              </div>
              <div className="card-elevated p-8">
                <Stethoscope className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-display font-bold text-xl mb-4">NEET Foundation</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Biology, Physics & Chemistry focus</li>
                  <li>• NCERT-aligned preparation</li>
                  <li>• Regular assessments</li>
                  <li>• Doubt clearing sessions</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-elevated p-6">
                <Calculator className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Integrated Program</h3>
                <p className="text-muted-foreground text-sm">
                  School curriculum seamlessly integrated with competitive exam preparation
                </p>
              </div>
              <div className="card-elevated p-6">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Success Record</h3>
                <p className="text-muted-foreground text-sm">
                  Track record of students qualifying for premier institutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IitNeet;
