import HomeHero from '../components/HomeHero';
import HomeServices from '../components/HomeServices';
import Why from '../components/Why';
import HomeHowItWorks from '../components/HomeHowItWorks'
import HomeTopDestinations from '../components/HomeTopDestinations'
import HomeFeaturedToursLogistics from '../components/HomeFeaturedToursLogistics'
import HomeLogisticsServices from '../components/HomeLogisticsServices'
import HomeTestimonials from '../components/HomeTestimonials'
import HomeFAQ from '../components/HomeFAQ'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flights, Tours, Visa Assistance & Logistics',
  description:
    'Plan your next trip with WOW The World Logistics. Book flights, hotels, tours, visa assistance, passport processing, and logistics services in one place.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main  >
      <HomeHero />
      <HomeServices />
      <Why />
      <HomeHowItWorks />
      <HomeTopDestinations />
      <HomeFeaturedToursLogistics />
      <HomeLogisticsServices />
      <HomeTestimonials />
      <HomeFAQ/>
    
    
    </main>
  );
}

