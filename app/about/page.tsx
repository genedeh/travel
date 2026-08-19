import Navbar from '../about/Navbar';
import Hero from '../about/Hero';
import Body from '../about/Body';
import Body2 from'../about/Body2';
import Body3 from '../about/Body3'
import Footer from '../about/Footer'
import WhyChooseUs from '../about/WhyChooseUs'
const About = () => {
  return (
    
    <main className="min-h-screen w-full bg-white">
        <Navbar/>
        <Hero />
    
        <Body/>
        <Body2/>
        <Body3/>
        <WhyChooseUs/>
        <Footer/>
        

      
    </main>
  );
};

export default About;