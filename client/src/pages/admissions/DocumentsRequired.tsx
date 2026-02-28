import { Layout } from '@/components/Layout';
import { FileText, CreditCard, ClipboardList, FileOutput, Camera, AlertTriangle } from 'lucide-react';

const DocumentsRequired = () => {
  const documents = [
    {
      icon: FileText,
      title: 'Birth Certificate',
      description: 'Required from Nursery onwards.'
    },
    {
      icon: CreditCard,
      title: 'Aadhaar Card',
      description: 'Required from Nursery onwards.'
    },
    {
      icon: ClipboardList,
      title: 'Mark Sheet/Record Sheet',
      description: 'Required from Class II onwards.'
    },
    {
      icon: FileOutput,
      title: 'Leaving Certificate',
      description: 'Required from Class II onwards.'
    },
    {
      icon: Camera,
      title: 'Two passport-size photographs',
      description: 'Required for all classes.'
    }
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

      {/* Documents Required for Admission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Documents Required for Admission</h2>
            <p className="text-muted-foreground mb-8 text-justify">
              To complete the admission process, please submit copies of the following documents:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {documents.map((doc, index) => {
                const Icon = doc.icon;
                return (
                  <div key={index} className="card-elevated p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2">{doc.title}</h3>
                    <p className="text-muted-foreground text-sm">{doc.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Important Notes */}
            <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="font-display font-bold text-lg text-amber-900 dark:text-amber-400">Important Notes</span>
              </div>
              <ul className="space-y-3 ml-9">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-700 dark:text-amber-500 flex-shrink-0">01.</span>
                  <span className="text-amber-800 dark:text-amber-300 text-justify">The Transfer Certificate (TC) must be signed by the regular Principal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-700 dark:text-amber-500 flex-shrink-0">02.</span>
                  <span className="text-amber-800 dark:text-amber-300 text-justify">Admission is not confirmed until all required documents are submitted and verified.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-700 dark:text-amber-500 flex-shrink-0">03.</span>
                  <span className="text-amber-800 dark:text-amber-300 text-justify">Even after paying the admission fee, admission will remain provisional until all documents are approved by the school.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-700 dark:text-amber-500 flex-shrink-0">04.</span>
                  <span className="text-amber-800 dark:text-amber-300 text-justify">Admission for Nursery to Class I requires an attested Xerox copy of the Birth Certificate issued by the municipal authority.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Withdrawal / Issue of Transfer Certificate */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Withdrawal / Issue of Transfer Certificate (TC)</h2>
            <div className="card-elevated p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">01.</span>
                  <span className="text-muted-foreground text-justify">A one-month written notice or one month's fee is required before withdrawing a student.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">02.</span>
                  <span className="text-muted-foreground text-justify">Students leaving in May must also pay the June fees.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">03.</span>
                  <span className="text-muted-foreground text-justify">TC will be issued only after clearing all school dues.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">04.</span>
                  <div className="text-muted-foreground text-justify">
                    <span>A student may be asked to leave the school for:</span>
                    <ul className="mt-2 ml-4 space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">4.1.</span>
                        <span>Non-payment of fees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">4.2.</span>
                        <span>Disciplinary issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">4.3.</span>
                        <span>Repeated failure in exams</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">4.4.</span>
                        <span>Repeated delays in fee payment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">4.5.</span>
                        <span>Long absences without notice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">4.6.</span>
                        <span>Not following school rules</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">05.</span>
                  <span className="text-muted-foreground text-justify">If a withdrawal request is submitted after June 15, a pro-rata fee will be charged.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">06.</span>
                  <span className="text-muted-foreground text-justify">TC will be issued only after all dues are cleared and the clearance form is completed.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Payment Guidelines */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Fee Payment Guidelines</h2>
            <div className="card-elevated p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">01.</span>
                  <span className="text-muted-foreground text-justify">Fees can be paid online through our website internationaldelhipublicschool.com via net banking, debit, or credit card. (For login ID and password, contact the school office.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">02.</span>
                  <span className="text-muted-foreground text-justify">Fees can also be paid in advance for multiple terms or the full session.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">03.</span>
                  <span className="text-muted-foreground text-justify">If fees are not paid on time, the student's name may be removed from the school list.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">04.</span>
                  <span className="text-muted-foreground text-justify">Re-admission will be at the Principal's discretion and only after clearing all dues.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">05.</span>
                  <span className="text-muted-foreground text-justify">Cheque payments will be considered complete only if they are not dishonored by the bank.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">06.</span>
                  <span className="text-muted-foreground text-justify">If a cheque bounces, it will be treated as non-payment, and legal action may be taken.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">07.</span>
                  <span className="text-muted-foreground text-justify">If unsure about any fee payment, parents should pay first and request a refund if needed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">08.</span>
                  <span className="text-muted-foreground text-justify">Keep all payment receipts safe, as they serve as proof of payment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">09.</span>
                  <span className="text-muted-foreground text-justify">When paying fees, provide correct details like Admission Number, Name, Class, and Section.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">10.</span>
                  <span className="text-muted-foreground text-justify">Late admissions will be charged fees on a pro-rata basis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">11.</span>
                  <span className="text-muted-foreground text-justify">All fees for a term must be paid before the term exams. Admit cards will only be issued if there are no pending dues.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DocumentsRequired;
