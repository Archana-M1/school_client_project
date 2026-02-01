import { Layout } from '@/components/Layout';
import { FileText, CheckCircle } from 'lucide-react';

const DocumentsRequired = () => {
  const documents = [
    'Birth Certificate (Original & Photocopy)',
    'Transfer Certificate from previous school',
    'Report Card of the previous academic year',
    'Passport-size photographs (6 copies)',
    'Aadhar Card of the student',
    'Aadhar Card of parents/guardians',
    'Address Proof (Utility bill/Ration card)',
    'Caste Certificate (if applicable)',
    'Medical Fitness Certificate',
  ];

  return (
    <Layout>
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Documents Required</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Complete checklist of documents needed for admission
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="card-elevated p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">Required Documents</h3>
                  <p className="text-muted-foreground">Please ensure all documents are ready before applying</p>
                </div>
              </div>

              <ul className="space-y-4">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{doc}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 rounded-lg bg-accent">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Original documents are required for verification at the time of admission. 
                  Additional documents may be requested based on specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DocumentsRequired;
