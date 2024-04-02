import { OurServices } from "../components/OurServices";
import { HeroSection } from "../components/HeroSection";
import { AboutUs } from "../components/AboutUs";
import { ContactUs } from "../components/ContactUs";
import { ComingSoon } from "../components/ComingSoon";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <ComingSoon />
      <ContactUs />
    </>
  );
};

export default Home;
