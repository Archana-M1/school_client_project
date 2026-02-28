import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/HeroSection';
import { AboutSchoolSection, DirectorSection } from '@/components/AboutSections';
import { EnquirySection, HelpSection } from '@/components/EnquirySections';
import { ActivitiesSection } from '@/components/ActivitiesSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSchoolSection />
      <DirectorSection />
      <EnquirySection />
      <ActivitiesSection />
      <HelpSection />
    </Layout>
  );
};

export default Index;
