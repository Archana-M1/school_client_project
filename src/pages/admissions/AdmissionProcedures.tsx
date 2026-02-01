import { Layout } from '@/components/Layout';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdmissionProcedures = () => {
  const steps = [
    { step: 1, title: 'Submit Enquiry', description: 'Fill out the admission enquiry form online or visit our campus' },
    { step: 2, title: 'Campus Visit', description: 'Schedule a campus tour to explore our facilities' },
    { step: 3, title: 'Document Submission', description: 'Submit all required documents for verification' },
    { step: 4, title: 'Interaction', description: 'Student interaction and assessment as per age group' },
    { step: 5, title: 'Admission Confirmation', description: 'Complete fee payment and confirm admission' },
  ];

  return (
    <Layout>
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Admission Procedures</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Simple and transparent admission process for new students
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 mb-12">
              {steps.map((item, index) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="card-elevated p-6 flex-1">
                    <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/admissions/enquiry" className="btn-primary inline-flex items-center gap-2">
                Start Your Application
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdmissionProcedures;
