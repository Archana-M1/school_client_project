import { Layout } from '@/components/Layout';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdmissionProcedures = () => {
  const ageCriteria = [
    { id: 1, class: 'Pre-Nursery', minAge: '2 Yrs.', maxAge: '3 Yrs.' },
    { id: 2, class: 'Nursery', minAge: '3 Yrs.', maxAge: '5 Yrs.' },
    { id: 3, class: 'PP-I', minAge: '4 Yrs.', maxAge: '6 Yrs.' },
    { id: 4, class: 'PP-II', minAge: '5 Yrs.', maxAge: '7 Yrs.' },
    { id: 5, class: 'Class I', minAge: '6 Yrs.', maxAge: '8 Yrs.' },
    { id: 6, class: 'Class II', minAge: '7 Yrs.', maxAge: '9 Yrs.' },
    { id: 7, class: 'Class III', minAge: '8 Yrs.', maxAge: '10 Yrs.' },
    { id: 8, class: 'Class IV', minAge: '8 Yrs.', maxAge: '10 Yrs.' },
    { id: 9, class: 'Class V', minAge: '9 Yrs.', maxAge: '11 Yrs.' },
    { id: 10, class: 'Class VI', minAge: '10 Yrs.', maxAge: '12 Yrs.' },
    { id: 11, class: 'Class VII', minAge: '11 Yrs.', maxAge: '13 Yrs.' },
    { id: 12, class: 'Class VIII', minAge: '12 Yrs.', maxAge: '14 Yrs.' },
    { id: 13, class: 'Class IX', minAge: '13 Yrs.', maxAge: '15 Yrs.' },
    { id: 14, class: 'Class X', minAge: '14 Yrs.', maxAge: '16 Yrs.' },
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

      {/* General Admission Rules */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">General Admission Rules</h2>
            <div className="card-elevated p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">01.</span>
                  <span className="text-muted-foreground text-justify">Admission is subject to available vacancies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">02.</span>
                  <span className="text-muted-foreground text-justify">No restrictions on caste, creed, gender, or any other factor.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">03.</span>
                  <span className="text-muted-foreground text-justify">An informal assessment (lasting 30–60 minutes) is encouraged but not mandatory.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">04.</span>
                  <span className="text-muted-foreground text-justify">This assessment helps gauge the student's prior knowledge.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">05.</span>
                  <span className="text-muted-foreground text-justify">No minimum passing marks are required.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">06.</span>
                  <span className="text-muted-foreground text-justify">Admission is not granted or denied based on assessment results.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">07.</span>
                  <span className="text-muted-foreground text-justify">The assessment can be taken even after completing the admission process.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Test */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Scholarship Test</h2>
            <div className="card-elevated p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">01.</span>
                  <span className="text-muted-foreground text-justify">Students can take an optional scholarship test before admission.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">02.</span>
                  <span className="text-muted-foreground text-justify">This test assesses academic proficiency.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">03.</span>
                  <span className="text-muted-foreground text-justify">Students who qualify receive a 15% tuition fee discount.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">04.</span>
                  <span className="text-muted-foreground text-justify">Helps deserving students with financial support.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Age Criteria Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Age Criteria for Admission</h2>
            <div className="card-elevated overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="px-4 py-3 text-left font-semibold">#</th>
                      <th className="px-4 py-3 text-left font-semibold">Class</th>
                      <th className="px-4 py-3 text-left font-semibold">Minimum Age (as of April 1)</th>
                      <th className="px-4 py-3 text-left font-semibold">Maximum Age (as of April 1)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ageCriteria.map((row, index) => (
                      <tr
                        key={row.id}
                        className={`border-b border-border ${index % 2 === 0 ? 'bg-background' : 'bg-accent/30'}`}
                      >
                        <td className="px-4 py-3 font-semibold text-primary">{row.id}</td>
                        <td className="px-4 py-3 font-medium">{row.class}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.minAge}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.maxAge}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Admission Process</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-elevated p-6">
                <h3 className="font-display font-bold text-lg mb-4 text-primary">Classes I to VII</h3>
                <p className="text-muted-foreground">
                  Admission is based purely on the availability of seats.
                </p>
              </div>
              <div className="card-elevated p-6">
                <h3 className="font-display font-bold text-lg mb-4 text-primary">Classes VIII to X</h3>
                <p className="text-muted-foreground mb-4">Admission is granted based on:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary flex-shrink-0">01.</span>
                    <span className="text-muted-foreground text-justify">Performance in the previous academic year.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary flex-shrink-0">02.</span>
                    <span className="text-muted-foreground text-justify">A written test conducted by the school.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary flex-shrink-0">03.</span>
                    <span className="text-muted-foreground text-justify">The school reserves the right to shortlist candidates based on test performance and interviews.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interview/Test Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Interview/Test Process</h2>
            <div className="card-elevated p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">01.</span>
                  <span className="text-muted-foreground text-justify">The school does not have a management quota.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">02.</span>
                  <span className="text-muted-foreground text-justify">The written test evaluates the student's knowledge in core subjects.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">03.</span>
                  <span className="text-muted-foreground text-justify">Shortlisted candidates may be called for an interview.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">04.</span>
                  <span className="text-muted-foreground text-justify">Admission results are only available at the school office.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Important Notes</h2>
            <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="font-display font-bold text-lg text-amber-900 dark:text-amber-400">Please Note</span>
              </div>
              <ul className="space-y-3 ml-9">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-700 dark:text-amber-500 flex-shrink-0">01.</span>
                  <span className="text-amber-800 dark:text-amber-300 text-justify">Parents are encouraged to visit the school office for details.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-700 dark:text-amber-500 flex-shrink-0">02.</span>
                  <span className="text-amber-800 dark:text-amber-300 text-justify">All admissions are processed transparently based on merit and vacancy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-700 dark:text-amber-500 flex-shrink-0">03.</span>
                  <span className="text-amber-800 dark:text-amber-300 text-justify">Scholarship discounts apply only to tuition fees.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-700 dark:text-amber-500 flex-shrink-0">04.</span>
                  <span className="text-amber-800 dark:text-amber-300 text-justify">Any false information provided during the admission process may lead to disqualification.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-700 dark:text-amber-500 flex-shrink-0">05.</span>
                  <span className="text-amber-800 dark:text-amber-300 text-justify">The school reserves the right to amend admission policies as needed.</span>
                </li>
              </ul>
            </div>

            <div className="text-center mt-12">
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
