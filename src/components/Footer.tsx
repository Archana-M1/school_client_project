import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">
                  International Delhi Public School
                </h3>
                <p className="text-sm opacity-80">Gangavathi</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              International Delhi Public School, Gangavathi, offers quality education with modern teaching, 
              a well-rounded curriculum, and a supportive environment, helping students grow academically, 
              socially, and personally for a successful future.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Academics</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/academics/primary-school" className="opacity-80 hover:opacity-100 transition-opacity">
                  Primary School
                </Link>
              </li>
              <li>
                <Link to="/academics/middle-school" className="opacity-80 hover:opacity-100 transition-opacity">
                  Middle School
                </Link>
              </li>
              <li>
                <Link to="/academics/curriculum-design" className="opacity-80 hover:opacity-100 transition-opacity">
                  Curriculum Design
                </Link>
              </li>
              <li>
                <Link to="/beyond-academics/iit-neet" className="opacity-80 hover:opacity-100 transition-opacity">
                  IIT JEE & NEET
                </Link>
              </li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Admissions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/admissions/documents" className="opacity-80 hover:opacity-100 transition-opacity">
                  Documents Required
                </Link>
              </li>
              <li>
                <Link to="/admissions/procedures" className="opacity-80 hover:opacity-100 transition-opacity">
                  Admission Procedures
                </Link>
              </li>
              <li>
                <Link to="/admissions/enquiry" className="opacity-80 hover:opacity-100 transition-opacity">
                  Admission Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="opacity-80 hover:opacity-100 transition-opacity">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="opacity-80 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="opacity-80 hover:opacity-100 transition-opacity">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Main Campus */}
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Main Campus (Nursery to X)</p>
                <p className="opacity-80">
                  SY.No-37, Anegundi Road, Sangapur,<br />
                  Gangavathi, Koppal, Karnataka – 583227
                </p>
              </div>
            </div>

            {/* Kids Campus */}
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Kids Campus (Play Group to UKG)</p>
                <p className="opacity-80">
                  Kuvempu Badawane, 2nd Cross,<br />
                  Sidikeri Raste, Jayanagar,<br />
                  Gangavathi – 583227
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@internationaldelhipublicschool.com" className="opacity-80 hover:opacity-100">
                  info@internationaldelhipublicschool.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <div className="opacity-80">
                  +91 8884461238, +91 8197385199
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-80">
          © {new Date().getFullYear()} International Delhi Public School, Gangavathi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
