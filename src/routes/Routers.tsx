import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import {Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default Routers;
