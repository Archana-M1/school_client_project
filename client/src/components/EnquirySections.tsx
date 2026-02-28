import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

export function EnquirySection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="card-elevated p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="section-title mb-4">Enquiry Now!</h2>
          <p className="text-muted-foreground mb-8">
            Take the first step towards your child's bright future. Connect with us to learn more about 
            our admissions process, curriculum, and facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/admissions/enquiry" className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              Submit Enquiry
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="tel:+918884461238" className="btn-outline inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HelpSection() {
  return (
    <section className="py-20 hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          We Are Here to Help You!
        </h2>
        <p className="text-xl opacity-90 mb-8">
          Admissions Started for 2025–2026
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/admissions/enquiry"
            className="btn-primary bg-primary-foreground text-primary hover:bg-primary-foreground/90 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Enquire Now
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/admissions/procedures"
            className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary inline-flex items-center justify-center w-full sm:w-auto"
          >
            View Admission Process
          </Link>
        </div>
      </div>
    </section>
  );
}
