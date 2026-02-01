import { Layout } from '@/components/Layout';
import { CheckCircle, Target, Users, Award, MessageSquare, FlaskConical, Monitor, UserCheck } from 'lucide-react';
import schoolImage from '@/assets/school-about-1.jpg';
import libraryImage from '@/assets/school-about-2.jpg';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover the story, vision, and values that make International Delhi Public School a leader in education
          </p>
        </div>
      </section>

      {/* School Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our School</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
                At International Delhi Public School, Gangavathi (IDPS), we believe education is more than just academics. It is about shaping young minds for the future. Our goal is to provide a well-rounded education that helps students grow intellectually, emotionally, and socially. We combine modern teaching methods with strong moral values to create responsible, confident individuals. Our approach focuses on practical learning, creativity, and critical thinking, ensuring students are well-prepared for future challenges. We encourage students to be curious and love learning. This helps them develop important life skills, leadership qualities, and a sense of responsibility. At IDPS Gangavathi, we aim to help students become well-rounded individuals. We want them to succeed in any field they choose.
              </p>
            </div>
            <div>
              <img
                src={schoolImage}
                alt="School Campus"
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elevated p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a center of educational excellence that nurtures young minds to become responsible
                global citizens, equipped with knowledge, skills, and values to contribute positively to society.
              </p>
            </div>
            <div className="card-elevated p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide a stimulating learning environment that encourages intellectual curiosity,
                fosters creativity, and develops critical thinking skills while instilling strong moral values and respect for diversity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Management</h2>
            <p className="section-subtitle mx-auto">
              Led by experienced professionals dedicated to educational excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elevated p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-display font-bold text-lg mb-2">Board of Directors</h4>
              <p className="text-sm text-muted-foreground">
                Visionary leaders guiding the school's strategic direction
              </p>
            </div>
            <div className="card-elevated p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-display font-bold text-lg mb-2">Academic Council</h4>
              <p className="text-sm text-muted-foreground">
                Expert educators shaping curriculum and academic policies
              </p>
            </div>
            <div className="card-elevated p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-display font-bold text-lg mb-2">Administration</h4>
              <p className="text-sm text-muted-foreground">
                Dedicated team ensuring smooth school operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Excellence */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Academics Excellence</h2>
            <p className="text-lg text-muted-foreground text-justify leading-relaxed mb-8">
              Education at IDPS Gangavathi follows global standards, ensuring that students receive the best possible learning experience. Our curriculum is designed to be engaging, practical, and skill-based. We believe that learning should be more than just memorizing. Students should understand concepts well and use them in real life.
            </p>
            <p className="text-lg text-muted-foreground mb-8">Our teaching methods focus on:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-elevated p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-primary">01.</span>
                      <h3 className="font-display font-bold text-lg">Interactive Learning</h3>
                    </div>
                    <p className="text-muted-foreground text-sm text-justify">
                      We encourage students to participate actively in classroom discussions and activities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <FlaskConical className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-primary">02.</span>
                      <h3 className="font-display font-bold text-lg">Hands-On Experience</h3>
                    </div>
                    <p className="text-muted-foreground text-sm text-justify">
                      Practical learning through experiments, projects, and real-world applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <Monitor className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-primary">03.</span>
                      <h3 className="font-display font-bold text-lg">Technology Integration</h3>
                    </div>
                    <p className="text-muted-foreground text-sm text-justify">
                      Using smart classrooms, digital tools, and online resources to enhance the learning experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-primary">04.</span>
                      <h3 className="font-display font-bold text-lg">Individual Attention</h3>
                    </div>
                    <p className="text-muted-foreground text-sm text-justify">
                      Recognizing the unique strengths and learning styles of each student and providing personalized guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
