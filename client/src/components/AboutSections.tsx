import schoolImage1 from '@/assets/officeImage/mainEntrance.jpeg';
import schoolImage3 from '@/assets/LandingPageImages/hero-1.jpeg';
import schoolImage2 from '@/assets/officeImage/function2.jpeg';
import directorImage from '@/assets/director.jpg';

export function AboutSchoolSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">International Delhi Public School – Gangavathi</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
              International Delhi Public School, Gangavathi, is committed to providing quality education
              that nurtures the intellectual, emotional, and social development of every student. Our
              school combines traditional values with modern teaching methodologies to create a learning
              environment that is both challenging and supportive.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
              With state-of-the-art facilities, experienced faculty, and a comprehensive curriculum,
              we prepare our students not just for academic success, but for life. Our focus on
              character building, critical thinking, and creativity ensures that every graduate
              is equipped to face the challenges of the future.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              We believe that education is the foundation of a strong society, and we are dedicated
              to shaping responsible citizens who will contribute positively to the world.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={schoolImage3}
                alt="School Campus"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img
                src={schoolImage1}
                alt="School Library"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="pt-8">
              <img
                src={schoolImage2}
                alt="School Facilities"
                className="w-full h-72 object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DirectorSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Director's Message
          </h2>

          <blockquote className="text-muted-foreground leading-relaxed space-y-6 text-justify">
            <p>
              "Welcome to International Delhi Public School, Gangavathi. As the Director of this
              esteemed institution, I am honored to lead a team of dedicated educators who share
              a common vision – to nurture young minds and help them realize their full potential.
            </p>

            <p>
              Our school is more than just a place of learning; it is a community where students
              are encouraged to explore, question, and grow. We believe in providing a holistic
              education that balances academic rigor with extracurricular activities, ensuring
              that every student develops into a well-rounded individual.
            </p>

            <p>
              I invite you to be a part of our journey as we continue to strive for excellence
              in education. Together, let us build a brighter future for our children."
            </p>

            <p className="pt-4 font-semibold text-foreground">
              Warm Regards,<br />
              Director
            </p>
          </blockquote>

        </div>
      </div>
    </section>
  );
}
