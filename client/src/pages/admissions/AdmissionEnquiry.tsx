import { Layout } from '@/components/Layout';
import { Send, Phone, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface EnquiryFormData {
  studentName: string;
  dateOfBirth: string;
  parentName: string;
  board: string;
  grade: string;
  previousSchool: string;
  email: string;
  phone: string;
  address: string;
}

const AdmissionEnquiry = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<EnquiryFormData>({
    studentName: '',
    dateOfBirth: '',
    parentName: '',
    board: '',
    grade: '',
    previousSchool: '',
    email: '',
    phone: '',
    address: '',
  });

  const grades = [
    'Grade - 1', 'Grade - 2', 'Grade - 3', 'Grade - 4',
    'Grade - 5', 'Grade - 6', 'Grade - 7', 'Grade - 8',
    'Grade - 9', 'Grade - 10', 'Grade - 11', 'Grade - 12'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.board) {
      toast({
        title: 'Please select a board',
        description: 'Choose either CBSE or State Board.',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.grade) {
      toast({
        title: 'Please select a grade',
        description: 'Choose the grade for admission.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/admission-enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: 'Enquiry Submitted!',
          description: 'Thank you for your interest. Our admissions team will contact you soon.',
        });

        setFormData({
          studentName: '',
          dateOfBirth: '',
          parentName: '',
          board: '',
          grade: '',
          previousSchool: '',
          email: '',
          phone: '',
          address: '',
        });
      } else {
        throw new Error(data.message || 'Failed to submit enquiry');
      }
    } catch (error) {
      console.error('Admission enquiry error:', error);
      toast({
        title: 'Failed to submit enquiry',
        description: 'Please try again later or contact us directly via phone.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Admission Enquiry</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Take the first step towards your child's bright future
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Welcome Text */}
            <div className="mb-10">
              <p className="text-lg text-muted-foreground text-justify leading-relaxed">
                Welcome to International Delhi Public School, Gangavathi! We are happy that you are interested in our school. At IDPS, we provide a safe and supportive environment where students can learn, grow, and develop their skills. Fill out the admission enquiry form below, and our admissions team will get in touch with you soon.
              </p>
            </div>

            {/* Enquiry Form */}
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-display font-bold mb-8 text-center">Enquiry Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Student Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">Student Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Enter student's full name"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium mb-2">Date of Birth <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Parent/Guardian Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">Parent/Guardian Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Enter parent/guardian name"
                  />
                </div>

                {/* Choose the Board - Radio Buttons */}
                <div>
                  <label className="block text-sm font-medium mb-3">Choose the Board <span className="text-red-500">*</span></label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="board"
                        value="CBSE"
                        checked={formData.board === 'CBSE'}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary border-border focus:ring-primary"
                      />
                      <span className="text-muted-foreground">CBSE</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="board"
                        value="State Board"
                        checked={formData.board === 'State Board'}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary border-border focus:ring-primary"
                      />
                      <span className="text-muted-foreground">State Board</span>
                    </label>
                  </div>
                </div>

                {/* Choose the Grade - Radio Buttons */}
                <div>
                  <label className="block text-sm font-medium mb-3">Choose the Grade <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {grades.map((grade) => (
                      <label key={grade} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="grade"
                          value={grade}
                          checked={formData.grade === grade}
                          onChange={handleChange}
                          className="w-4 h-4 text-primary border-border focus:ring-primary"
                        />
                        <span className="text-muted-foreground text-sm">{grade}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Previous School */}
                <div>
                  <label className="block text-sm font-medium mb-2">Previous School (if any)</label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Enter previous school name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number (Father/Mother) <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="+91 9876543210"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium mb-2">Address <span className="text-red-500">*</span></label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Enter complete address"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Submit
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* After Submission Info */}
            <div className="mt-10 text-center">
              <p className="text-muted-foreground text-justify leading-relaxed mb-6">
                Once you submit the enquiry form, our admissions team will contact you to provide detailed information about the admission process, curriculum, and school facilities. We look forward to welcoming your child to IDPS and providing them with the best learning experience.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <p className="font-semibold mb-2">For urgent queries, contact us at:</p>
                <div className="flex items-center justify-center gap-2 text-primary">
                  <Phone className="h-5 w-5" />
                  <span className="font-bold">8884461238, 8197385199</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdmissionEnquiry;
