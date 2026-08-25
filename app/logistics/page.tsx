import Hero from '../logistics/Hero'
import Body from '../logistics/Body'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logistics Services',
  description:
    'Send parcels, documents, and business shipments with WOW The World Logistics. Reliable local, nationwide, and international delivery support.',
  alternates: {
    canonical: '/logistics',
  },
};

const Logistics = () => {

    return(
        <main>
            <Hero/>
            <Body/>
        
        </main>

    );
}
export default Logistics;
