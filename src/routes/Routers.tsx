import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import ComingSoon from "../pages/ComingSoon";
import JoinTeam from "../pages/JoinTeam";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/join-team" element={<JoinTeam />} />
      </Routes>
    </>
  );
};

export default Routers;
