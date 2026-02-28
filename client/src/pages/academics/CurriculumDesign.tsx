import { Layout } from '@/components/Layout';
import { BookOpen, Brain, Globe, Heart, Baby, GraduationCap, Users2, Trophy } from 'lucide-react';

const CurriculumDesign = () => {
  return (
    <Layout>
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Curriculum Design</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            A balanced curriculum designed for holistic development
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 text-justify">
              At International Delhi Public School (IDPS) Gangavathi, we believe education is more than just studying books. It is about helping students think on their own, make good decisions, and keep learning throughout life. Our curriculum builds a strong academic foundation while also focusing on creativity, personal growth, and social skills. We follow CBSE guidelines and use modern teaching methods to make learning fun, interactive, and meaningful.
              <br /> <br /> We create a friendly and supportive environment where students feel confident and motivated to learn. We encourage them to ask questions, explore new ideas, and develop important life skills. Our goal is to help people grow. We want them to do well in school and be kind, responsible, and capable.
              <br /> <br /> At IDPS Gangavathi, we prepare students for more than just exams. We give them the skills and values they need to succeed in life. This helps them grow into smart, confident, and caring people who are ready for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Framework Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Curriculum Framework</h2>
            <p className="text-lg text-muted-foreground text-justify leading-relaxed">
              Our curriculum is designed to support students at different learning stages. It helps them enjoy learning and grow in every way. The structure focuses on improving their thinking, emotions, and social skills at each step. By making learning engaging and meaningful, we encourage students to explore, ask questions, and build confidence. Our approach helps them grow both academically and personally. This prepares them for future challenges with the right knowledge, skills, and values.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Curve Stepper */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* Step 1 - Early Years */}
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary">
                    <Baby className="h-8 w-8 text-primary" />
                  </div>
                  <div className="w-1 h-full min-h-[100px] bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-background border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl font-bold text-primary">1</span>
                      <h3 className="text-xl font-display font-bold">Early Years (Pre-Primary)</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      At IDPS Gangavathi, we make learning fun with play, stories, problem-solving, and teamwork. Children explore letters, numbers, colors, and shapes while building social and motor skills. Our simple approach helps them grow with confidence and curiosity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 - Primary School */}
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <div className="w-1 h-full min-h-[100px] bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-background border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl font-bold text-primary">2</span>
                      <h3 className="text-xl font-display font-bold">Primary School (Grades 1-5)</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      In the primary years at IDPS Gangavathi, students build on early learning with fun, interactive lessons in core subjects. They explore fun activities, digital skills, communication, arts, and values like kindness and honesty. This makes learning enjoyable and meaningful.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 - Middle School */}
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary">
                    <Users2 className="h-8 w-8 text-primary" />
                  </div>
                  <div className="w-1 h-full min-h-[100px] bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-background border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl font-bold text-primary">3</span>
                      <h3 className="text-xl font-display font-bold">Middle School (Grades 6-8)</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      In middle school at IDPS Gangavathi, students study advanced subjects. They also work on research projects and develop leadership and teamwork skills. They also learn life skills like time management and finance. They do this while helping in community service. This teaches them the value of giving back.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 - Secondary School */}
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-background border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl font-bold text-primary">4</span>
                      <h3 className="text-xl font-display font-bold">Secondary School (Grades 9-12)</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      At IDPS Gangavathi, secondary students get strong support for academics and future careers. They choose subjects, prepare for exams, get career guidance, and explore internships. With projects and competitive exam training, we help them succeed in higher education and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Curricular & Extracurricular Activities */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Co-Curricular & Extracurricular Activities
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-justify leading-relaxed">
              At IDPS Gangavathi, we believe that education is not just about academics. Our students take part in many activities. These help them build confidence, discipline, and a sense of responsibility. These include:
            </p>
            <div className="bg-background border-2 border-border rounded-xl p-8 text-justify">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">01.</span>
                  <div>
                    <span className="font-semibold">Sports and physical fitness:</span>
                    <span className="text-muted-foreground text-justify"> Cricket, football, basketball, yoga, and athletics to promote a healthy lifestyle.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">02.</span>
                  <div>
                    <span className="font-semibold">Performing arts:</span>
                    <span className="text-muted-foreground text-justify"> Dance, music, and drama to encourage creativity and self-expression.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">03.</span>
                  <div>
                    <span className="font-semibold">Literary clubs:</span>
                    <span className="text-muted-foreground text-justify"> Debates, essay writing, storytelling, and poetry recitation to enhance language skills.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">04.</span>
                  <div>
                    <span className="font-semibold">Science and tech clubs:</span>
                    <span className="text-muted-foreground text-justify"> Robotics, coding, and innovation projects for students interested in technology.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">05.</span>
                  <div>
                    <span className="font-semibold">Social awareness programs:</span>
                    <span className="text-muted-foreground text-justify"> Environmental initiatives, charity drives, and community service to instill a sense of social responsibility.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary flex-shrink-0">06.</span>
                  <div>
                    <span className="font-semibold">Cultural activities:</span>
                    <span className="text-muted-foreground text-justify"> Festivals, celebrations, and art exhibitions to promote cultural awareness and appreciation.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CurriculumDesign;
