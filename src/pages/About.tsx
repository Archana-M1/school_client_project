import { Layout } from '@/components/Layout';
import { CheckCircle, Target, Users, Award } from 'lucide-react';
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
              <p className="text-muted-foreground leading-relaxed mb-6">
                International Delhi Public School, Gangavathi, is a premier educational institution committed 
                to providing quality education. Established with the vision of creating future leaders, 
                our school combines academic excellence with character development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Located in the heart of Gangavathi, our school offers state-of-the-art facilities including 
                modern classrooms, well-equipped laboratories, a comprehensive library, sports facilities, 
                and dedicated spaces for extracurricular activities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our experienced faculty, innovative teaching methodologies, and student-centric approach 
                ensure that every child receives personalized attention and guidance to achieve their full potential.
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
    </Layout>
  );
};

export default About;
