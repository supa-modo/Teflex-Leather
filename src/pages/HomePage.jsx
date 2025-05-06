import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import BrandsSection from '../components/BrandsSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <AboutSection />
      {/* <FeaturedProducts /> */}
      <BrandsSection />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;
