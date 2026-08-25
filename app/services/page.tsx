import Hero from '../services/Hero'
import Body from '../services/Body'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel & Logistics Services',
  description:
    'Explore WOW The World Logistics services including flight reservations, hotel bookings, visa assistance, tour packages, passport processing, and logistics delivery.',
  alternates: {
    canonical: '/services',
  },
};

const Services = () => {
  return (
    
    <main className="min-h-screen w-full bg-white">
        <Hero/>
        <Body/>
        
      
    </main>
  );
};

export default Services;
