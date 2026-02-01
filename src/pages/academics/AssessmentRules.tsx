import { Layout } from '@/components/Layout';
import { CheckCircle } from 'lucide-react';

const AssessmentRules = () => {
  return (
    <Layout>
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Assessment & Promotion Rules</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Our comprehensive evaluation system ensures holistic student development
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated p-8 mb-8">
              <h3 className="font-display font-bold text-xl mb-6">Assessment Structure</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Continuous and Comprehensive Evaluation (CCE) pattern</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Two terms per academic year with periodic tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Regular class tests and assignments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Co-scholastic activities evaluation</span>
                </li>
              </ul>
            </div>

            <div className="card-elevated p-8">
              <h3 className="font-display font-bold text-xl mb-6">Promotion Criteria</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Minimum 75% attendance required</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Pass in all subjects with minimum 33% marks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Satisfactory performance in co-curricular activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Good conduct and discipline record</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AssessmentRules;
