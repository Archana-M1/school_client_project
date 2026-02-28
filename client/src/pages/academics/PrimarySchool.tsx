import { Layout } from '@/components/Layout';
import { Building2, Brain, Users, Heart, Palette, GraduationCap } from 'lucide-react';

const PrimarySchool = () => {
  return (
    <Layout>
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Primary School</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Building strong foundations for lifelong learning (Classes I - V)
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 text-justify">
              At International Delhi Public School, we create a happy and safe place where children enjoy learning. Our primary school helps students develop strong skills in reading, writing, math, and science. Our teachers use simple and fun methods to make lessons easy to understand. We believe learning is more than just books – it’s about building confidence, working together, and solving problems.
              We also offer fun activities like art, music, dance, and sports, giving children a chance to discover their talents. Along with studies, we teach important values like kindness, honesty, and respect to help students become responsible individuals. We keep parents involved by sharing regular updates and holding meetings so they can support their child’s progress.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="card-elevated p-6">
                <Building2 className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Builds a Strong Foundation</h3>
                <p className="text-muted-foreground text-sm">
                  By building a strong foundation, children develop important skills in reading, writing, math, and science.
                </p>
              </div>
              <div className="card-elevated p-6">
                <Brain className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Develops Thinking Skills</h3>
                <p className="text-muted-foreground text-sm">
                  Helping children think better by developing problem-solving skills, creativity, and curiosity, making learning easy and fun.
                </p>
              </div>
              <div className="card-elevated p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Teacher's Social Skills</h3>
                <p className="text-muted-foreground text-sm">
                  Teachers help children develop social skills by encouraging friendships, communication, and teamwork, leading to better learning and more fun.
                </p>
              </div>
              <div className="card-elevated p-6">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Instills Good Values</h3>
                <p className="text-muted-foreground text-sm">
                  Teachers teach good values like honesty, kindness, respect, and discipline, helping them grow into responsible and caring individuals.
                </p>
              </div>
              <div className="card-elevated p-6">
                <Palette className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Encourages a Love for Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Makes learning fun with activities like art, music, and sports, helping kids enjoy education and stay interested.
                </p>
              </div>
              <div className="card-elevated p-6">
                <GraduationCap className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Prepares for Higher Education</h3>
                <p className="text-muted-foreground text-sm">
                  We help children prepare for higher education. We build their confidence and good study habits for future success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrimarySchool;
