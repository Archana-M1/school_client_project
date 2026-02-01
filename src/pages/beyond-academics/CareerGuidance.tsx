import { Layout } from '@/components/Layout';
import { UserCheck, ClipboardCheck, Presentation, GraduationCap, Building2, Briefcase, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const CareerGuidance = () => {
  const [openCollapse, setOpenCollapse] = useState<number | null>(null);

  const toggleCollapse = (index: number) => {
    setOpenCollapse(openCollapse === index ? null : index);
  };

  const services = [
    {
      icon: UserCheck,
      title: 'One-on-One Career Counseling',
      description: 'Students receive personal help from expert counselors. These counselors assist them in understanding their strengths. They also suggest good career options, higher studies, and future plans.'
    },
    {
      icon: ClipboardCheck,
      title: 'Career Assessment Tests',
      description: 'We use trusted career tests to help students discover their skills and interests. These tests help them see good career options. This makes it easier to choose the right path for their future success and happiness.'
    },
    {
      icon: Presentation,
      title: 'Workshops & Seminars',
      description: 'We organize workshops and seminars where experts and former students share knowledge about different careers, job trends, and opportunities. These events help students learn more about the professional world and explore different career options for their future.'
    },
    {
      icon: GraduationCap,
      title: 'College & University Guidance',
      description: 'Picking the right college or university is just as important as choosing a career. Our team helps students understand admission rules, eligibility, and select courses that match their career goals.'
    },
    {
      icon: Building2,
      title: 'University & Career Fairs',
      description: 'Each year, we host career and university fairs. At these events, students can meet experts from top colleges, universities, and companies. They can learn about future opportunities.'
    },
    {
      icon: Briefcase,
      title: 'Post-Graduation Support',
      description: 'Our career guidance continues even after school. We help students start their careers by supporting them with job placements, resume writing, and interview preparation.'
    }
  ];

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

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Career Guidance & Counselling at International Delhi Public School, Gangavathi
            </h2>
            <p className="text-lg text-muted-foreground text-justify leading-relaxed">
              At International Delhi Public School (IDPS) Gangavathi, we understand that choosing a career is an important decision. Our Career Guidance and Counseling services help students make smart choices. We focus on their interests, skills, and future goals. We not only focus on academics but also help students explore different career options. Our expert counselors provide personalized advice, career assessments, and information on colleges, courses, and job opportunities. Through workshops, internships, and career fairs, we ensure students gain the knowledge and confidence to choose the right path. At IDPS, we are dedicated to shaping bright futures for all our students.
            </p>
          </div>
        </div>
      </section>

      {/* Why Career Guidance is Important */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Why Career Guidance is Important</h2>
            <p className="text-lg text-muted-foreground text-justify leading-relaxed">
              Choosing the right career is important for both success and happiness. With so many career options available, students need to make smart and informed decisions. At International Delhi Public School (IDPS) Gangavathi, our skilled career counselors help students discover their interests, strengths, and goals. We help them explore different fields, learn about job opportunities, and choose the best career path. Through counseling sessions, career tests, and expert guidance, we ensure students feel confident about their future. Our goal is to support every student in making the right choices for a bright and successful career ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services - Collapsible Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">Our Career Guidance Services</h2>

            <div className="grid grid-cols-1 gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className={`group bg-background border-2 rounded-xl overflow-hidden transition-all duration-300 ${openCollapse === index ? 'border-primary shadow-lg' : 'border-border hover:border-primary hover:shadow-lg'}`}
                  >
                    <button
                      onClick={() => toggleCollapse(index)}
                      className="w-full p-6 flex items-center gap-4"
                    >
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-display font-bold text-lg">{service.title}</h3>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-primary transition-transform duration-300 ${openCollapse === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openCollapse === index && (
                      <div className="px-6 pb-6 animate-slide-down">
                        <p className="text-muted-foreground leading-relaxed text-justify">
                          {service.description}
                        </p>
                      </div>
                    )}
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

export default CareerGuidance;
