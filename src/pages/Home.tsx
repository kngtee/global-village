import { OurServices } from "../components/OurServices";
import { HeroSection } from "../components/HeroSection";
import { AboutUs } from "../components/AboutUs";
import OurContact from "../components/OurContact";
import { ComingSoon } from "../components/ComingSoon";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <ComingSoon />
      <OurContact />
    </>
  );
};

export default Home;
