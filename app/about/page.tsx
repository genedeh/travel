import AboutHero from '../about/AboutHero';
import AboutMainSection from '../about/AboutMainSection';
import AboutVisionMission from '../about/AboutVisionMission';
import AboutHowItWorks from '../about/AboutHowItWorks'
import AboutWhyChooseWow from '../about/AboutWhyChooseWow'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about WOW The World Logistics, a trusted travel and logistics company helping people plan trips, process documents, and deliver with confidence.',
  alternates: {
    canonical: '/about',
  },
};

const About = () => {
  return (
    
    <main className="min-h-screen w-full bg-white">
        <AboutHero />
    
        <AboutMainSection/>
        <AboutVisionMission/>
        <AboutHowItWorks/>
        <AboutWhyChooseWow/>
        

      
    </main>
  );
};

export default About;
