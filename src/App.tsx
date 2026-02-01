import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PrimarySchool from "./pages/academics/PrimarySchool";
import MiddleSchool from "./pages/academics/MiddleSchool";
import AssessmentRules from "./pages/academics/AssessmentRules";
import CurriculumDesign from "./pages/academics/CurriculumDesign";
import AdmissionProcedures from "./pages/admissions/AdmissionProcedures";
import AdmissionEnquiry from "./pages/admissions/AdmissionEnquiry";
import DocumentsRequired from "./pages/admissions/DocumentsRequired";
import Environmental from "./pages/beyond-academics/Environmental";
import CareerGuidance from "./pages/beyond-academics/CareerGuidance";
import IitNeet from "./pages/beyond-academics/IitNeet";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Academics */}
            <Route path="/academics/primary-school" element={<PrimarySchool />} />
            <Route path="/academics/middle-school" element={<MiddleSchool />} />
            <Route path="/academics/assessment-rules" element={<AssessmentRules />} />
            <Route path="/academics/curriculum-design" element={<CurriculumDesign />} />
            
            {/* Admissions */}
            <Route path="/admissions/procedures" element={<AdmissionProcedures />} />
            <Route path="/admissions/enquiry" element={<AdmissionEnquiry />} />
            <Route path="/admissions/documents" element={<DocumentsRequired />} />
            
            {/* Beyond Academics */}
            <Route path="/beyond-academics/environmental" element={<Environmental />} />
            <Route path="/beyond-academics/career-guidance" element={<CareerGuidance />} />
            <Route path="/beyond-academics/iit-neet" element={<IitNeet />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
