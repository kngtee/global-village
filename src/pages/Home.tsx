import { OurServices } from "../components/OurServices";
import { HeroSection } from "../components/HeroSection";
import { AboutUs } from "../components/AboutUs";
import { ContactUs } from "../components/ContactUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <ContactUs />
    </>
  );
};

export default Home;
