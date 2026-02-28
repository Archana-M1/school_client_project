import { Layout } from '@/components/Layout';
import { GraduationCap, BookOpen, ClipboardCheck, UserCheck, Monitor, HelpCircle, Target } from 'lucide-react';

const IitNeet = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Experienced Faculty',
      description: 'Our teachers are highly qualified and experienced, making learning clear and easy to understand. They provide in-depth explanations and help students grasp even the toughest concepts.'
    },
    {
      icon: BookOpen,
      title: 'Well-Structured Curriculum',
      description: 'We follow a systematic and result-oriented curriculum that covers the entire syllabus step by step. This ensures students understand concepts thoroughly and are well-prepared for exams.'
    },
    {
      icon: ClipboardCheck,
      title: 'Regular Tests & Mock Exams',
      description: 'Frequent quizzes, tests, and mock exams help students assess their progress. These practice tests prepare them for the real exam environment, improving confidence and performance.'
    },
    {
      icon: UserCheck,
      title: 'Personalized Attention',
      description: 'Our small batch sizes ensure that each student gets individual attention. Teachers mentor students personally, helping them overcome challenges and excel in their studies.'
    },
    {
      icon: Monitor,
      title: 'Modern Classrooms & Learning Tools',
      description: 'Our classrooms are well-equipped with the latest digital learning tools, making lessons engaging and interactive.'
    },
    {
      icon: HelpCircle,
      title: 'Dedicated Doubt-Solving Sessions',
      description: 'We offer special sessions for students to ask questions. They can get extra help in areas they find hard.'
    },
    {
      icon: Target,
      title: 'Expert Guidance on Exam Strategies',
      description: 'We teach students time management techniques, problem-solving skills, and exam strategies to help them perform their best on exam day.'
    }
  ];

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

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              IIT JEE & NEET Coaching at International Delhi Public School, Gangavathi
            </h2>
            <p className="text-lg text-muted-foreground text-justify leading-relaxed">
              At International Delhi Public School (IDPS) in Gangavathi, we help students reach their dreams of being engineers and doctors. Our IIT-JEE and NEET coaching programs build strong subject foundations. We offer expert guidance and effective strategies. This helps students succeed in these tough exams. With experienced teachers, structured lessons, and regular practice tests, we ensure students build confidence and perform well. Our program is designed to make learning simpler, stress-free, and result-oriented, helping students balance their school studies and exam preparation. At IDPS Gangavathi, we prepare students for a bright future in engineering and medical fields.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose IDPS */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
              Why Choose IDPS for IIT JEE & NEET Coaching?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="card-elevated p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm text-justify">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IitNeet;
