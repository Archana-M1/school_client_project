import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';
import SchoolLogo from '@/assets/Dehli-Public-School-Logo-hd-png.png';
const academicsLinks = [
  { href: '/academics/primary-school', label: 'Primary School' },
  { href: '/academics/middle-school', label: 'Middle School' },
  { href: '/academics/assessment-rules', label: 'Assessment & Promotion Rules' },
  { href: '/academics/curriculum-design', label: 'Curriculum Design' },
];

const admissionsLinks = [
  { href: '/admissions/procedures', label: 'Admission Procedures' },
  { href: '/admissions/enquiry', label: 'Admission Enquiry' },
  { href: '/admissions/documents', label: 'Documents Required' },
];

const beyondAcademicsLinks = [
  { href: '/beyond-academics/environmental', label: 'Environmental Awareness' },
  { href: '/beyond-academics/career-guidance', label: 'Career Guidance & Counselling' },
  { href: '/beyond-academics/iit-neet', label: 'IIT JEE & NEET' },
];

interface DropdownProps {
  label: string;
  links: { href: string; label: string }[];
  isActive: boolean;
}

function NavDropdown({ label, links, isActive }: DropdownProps) {
  return (
    <div className="relative group">
      <button
        className={`nav-link flex items-center gap-1 py-2 ${isActive ? 'text-primary' : ''}`}
      >
        {label}
        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
      </button>
      <div className="dropdown-content">
        {links.map((link) => (
          <Link key={link.href} to={link.href} className="dropdown-item">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo & School Name */}
            <Link to="/" className="flex items-center gap-3">
            <img
              src={SchoolLogo}
              alt="International Delhi Public School Logo"
              className="h-16 md:h-20 w-auto"
            />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`nav-link py-2 ${location.pathname === '/' ? 'text-primary' : ''}`}
            >
              Home
            </Link>
            <NavDropdown
              label="Academics"
              links={academicsLinks}
              isActive={isActive('/academics')}
            />
            <NavDropdown
              label="Admissions"
              links={admissionsLinks}
              isActive={isActive('/admissions')}
            />
            <NavDropdown
              label="Beyond Academics"
              links={beyondAcademicsLinks}
              isActive={isActive('/beyond-academics')}
            />
            <Link
              to="/about"
              className={`nav-link py-2 ${location.pathname === '/about' ? 'text-primary' : ''}`}
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className={`nav-link py-2 ${location.pathname === '/gallery' ? 'text-primary' : ''}`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`nav-link py-2 ${location.pathname === '/contact' ? 'text-primary' : ''}`}
            >
              Contact
            </Link>
          </div>

          {/* Theme Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* <ThemeSwitcher /> */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-down">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="px-4 py-2 rounded-lg hover:bg-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Academics */}
              <div className="px-4 py-2 font-semibold text-primary">Academics</div>
              {academicsLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-8 py-2 rounded-lg hover:bg-accent transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Admissions */}
              <div className="px-4 py-2 font-semibold text-primary">Admissions</div>
              {admissionsLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-8 py-2 rounded-lg hover:bg-accent transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Beyond Academics */}
              <div className="px-4 py-2 font-semibold text-primary">Beyond Academics</div>
              {beyondAcademicsLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-8 py-2 rounded-lg hover:bg-accent transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/about"
                className="px-4 py-2 rounded-lg hover:bg-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/gallery"
                className="px-4 py-2 rounded-lg hover:bg-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-lg hover:bg-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
