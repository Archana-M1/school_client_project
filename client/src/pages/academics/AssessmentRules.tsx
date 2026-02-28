import { Layout } from '@/components/Layout';
import { ChevronDown, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

const AssessmentRules = () => {
  const [openRule, setOpenRule] = useState<number | null>(null);

  const toggleRule = (index: number) => {
    setOpenRule(openRule === index ? null : index);
  };

  const rules = [
    {
      title: 'Attendance for Assessments',
      points: [
        'Attendance is mandatory for all assessments conducted throughout the year.',
        'Students who miss an assessment will receive zero marks.',
        'Consideration will be given only for genuine medical reasons.',
        'Parents need to submit an application and photocopies of medical documents on the exam day at the school office.',
        'The final decision rests with the Principal.'
      ]
    },
    {
      title: 'Leaving School After Assessments',
      points: [
        'Students cannot take a weekly assessment and then leave for home due to medical or personal reasons.',
        'If a student leaves after an assessment, they will receive zero marks in that subject.'
      ]
    },
    {
      title: 'Minimum Attendance Requirement',
      points: [
        'Attendance is mandatory for all assessments conducted throughout the year.',
        'Students who miss an assessment will receive zero marks.'
      ]
    },
    {
      title: 'No Reassessments',
      points: [
        'Students must have at least 90% attendance for each term/unit.',
        'If a student is absent due to health issues, the school will decide on any possible waivers.',
        'However, absence beyond 20% of working days (even on medical grounds) will not be accepted.'
      ]
    },
    {
      title: 'Punctuality During Assessments',
      points: [
        'Arrive on time for exams.',
        'Latecomers won’t get extra time.',
        'Time lost due to lateness cannot be given back.',
        'Being on time makes the exam fair for everyone.'
      ]
    },
    {
      title: 'Unfair Means',
      points: [
        'If a student is caught using unfair means during an assessment, they will receive zero marks in that subject.',
        'Parents and the student will be called for an explanation.',
        'A repeated offense will lead to immediate issuance of a Transfer Certificate without notice.'
      ]
    },
    {
      title: 'Answer Scripts and Evaluation',
      points: [
        'Answer sheets will be given to students after checking in the next week.',
        'Students should check for mistakes like totaling errors or unmarked answers.',
        'Any mistakes must be reported on the same day.',
        'Late reports will not be considered for final results.'
      ]
    },
    {
      title: 'Progress Reports',
      points: [
        'Progress reports will be given only after the official result is declared.',
        'Requests for early reports will not be accepted.',
        'If a report card is lost or damaged, a duplicate can be issued.',
        'A fee of Rs. 500/- will be charged for duplicates.'
      ]
    }
  ];
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
              <h3 className="font-display font-bold text-xl mb-6">Assessment & Promotion Rules</h3>
              <ul className="space-y-1">
                {rules.map((rule, index) => (
                  <li key={index}>
                    <button
                      onClick={() => toggleRule(index)}
                      className="w-full flex items-start gap-3 p-3 hover:bg-accent/30 rounded-lg transition-colors"
                    >
                      <ChevronDown
                        className={`h-5 w-5 text-primary transition-transform duration-300 flex-shrink-0 mt-0.5 ${
                          openRule === index ? 'rotate-180' : ''
                        }`}
                      />
                      <span className="font-semibold text-left">{rule.title}</span>
                    </button>
                    {openRule === index && (
                      <div className="ml-8 pl-4 pb-3 border-l-2 border-primary/30">
                        <ul className="space-y-2">
                          {rule.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground text-justify">
                              <span className="font-semibold mt-0.5">{String(pointIndex + 1).padStart(2, '0')}.</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Warning Message and Key Points */}
            <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-6 rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-lg text-amber-900 dark:text-amber-400 mb-2">
                    Important Notice for Nursery to Class VIII
                  </h3>
                  <p className="text-amber-800 dark:text-amber-300 text-justify leading-relaxed">
                    For students from Nursery to Class VIII, maintaining at least 90% attendance is essential. If a student has low attendance and has trouble with the syllabus, they may not do well on tests. This could mean they have to repeat the class. The final decision will be taken after discussing the student's progress with parents and school authorities.
                  </p>
                </div>
              </div>

              <div className="ml-9">
                <h4 className="font-display font-semibold text-amber-900 dark:text-amber-400 mb-3">
                  Key Points:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-amber-800 dark:text-amber-300">
                    <span className="font-semibold">01.</span>
                    <span>90% attendance is mandatory for promotion.</span>
                  </li>
                  <li className="flex items-start gap-2 text-amber-800 dark:text-amber-300">
                    <span className="font-semibold">02.</span>
                    <span>Consistent low grades may lead to detention.</span>
                  </li>
                  <li className="flex items-start gap-2 text-amber-800 dark:text-amber-300">
                    <span className="font-semibold">03.</span>
                    <span>Parents and school will mutually decide on retention.</span>
                  </li>
                  <li className="flex items-start gap-2 text-amber-800 dark:text-amber-300">
                    <span className="font-semibold">04.</span>
                    <span>Support and guidance will be provided to improve performance.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AssessmentRules;
