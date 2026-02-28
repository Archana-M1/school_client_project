import { Layout } from '@/components/Layout';
import { Send, Phone } from 'lucide-react';
import { useState } from 'react';

const AdmissionEnquiry = () => {
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');

  const grades = [
    'Grade - 1', 'Grade - 2', 'Grade - 3', 'Grade - 4',
    'Grade - 5', 'Grade - 6', 'Grade - 7', 'Grade - 8',
    'Grade - 9', 'Grade - 10', 'Grade - 11', 'Grade - 12'
  ];

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
              <form className="space-y-6">
                {/* Student Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">Student Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
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
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Parent/Guardian Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">Parent/Guardian Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
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
                        checked={selectedBoard === 'CBSE'}
                        onChange={(e) => setSelectedBoard(e.target.value)}
                        className="w-4 h-4 text-primary border-border focus:ring-primary"
                      />
                      <span className="text-muted-foreground">CBSE</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="board"
                        value="State Board"
                        checked={selectedBoard === 'State Board'}
                        onChange={(e) => setSelectedBoard(e.target.value)}
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
                          checked={selectedGrade === grade}
                          onChange={(e) => setSelectedGrade(e.target.value)}
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
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Enter previous school name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
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
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="+91 9876543210"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium mb-2">Address <span className="text-red-500">*</span></label>
                  <textarea
                    rows={3}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Enter complete address"
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Submit
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
