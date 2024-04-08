import { Button } from "./ui/button";
import HeroImg01 from "../assets/images/hero-img01.jpg";
import HeroImg02 from "../assets/images/hero-img02.jpg";
import HeroImg03 from "../assets/images/hero-img03.jpg";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="container h-fit" id="home">
      <div className="hidden lg:flex items-center gap-5 w-full h-[500px] bg-[#31bdc2] rounded-xl mt-10 mb-20">
        {/* Left side */}
        <div className="flex flex-col items-start justify-between ml-14">
          <h1 className="text-[50px] leading-[60px] font-[700] tracking-tight text-[#f4f5f6]">
            Fostering healthier,
            <br /> happier families and communities
            <br /> throughtout Metro Atlanta
          </h1>
          <div className="flex gap-6 mt-6">
            <Button
              variant="ghost"
              onClick={() => navigate("/about-us")}
              className="border border-[#f4f5f6] text-[#f4f5f6]"
            >
              Learn More
            </Button>
            <Button>Join Our Team</Button>
          </div>
        </div>
        {/* Right side */}
        <div className="flex gap-4 items-center justify-center mr-14">
          <div className="flex flex-col">
            <figure className="shadow-md">
              <img
                src={HeroImg03}
                alt="Hero Image"
                loading="lazy"
                className="w-[300px] h-[200px] object-cover rounded-md"
              />
            </figure>
            <figure className="mt-4 shadow-md">
              <img
                src={HeroImg02}
                alt="Hero Image"
                loading="lazy"
                className="w-[300px] h-[200px] object-cover rounded-md"
              />
            </figure>
          </div>
          <figure className="shadow-md">
            <img
              src={HeroImg01}
              alt="Hero Image"
              loading="lazy"
              className="w-[300px] h-[300px] object-cover rounded-md"
            />
          </figure>
        </div>
      </div>
      {/* Mobile view */}
      <div className="lg:hidden md:flex pb-14 text-center items-center justify-center mt-14">
        <span className="text-[44px] leading-[54px] tracking-tight font-[700]">
          Fostering Healthier, Happier Families and Communities Throughtout
          Metro Atlanta
        </span>
        <div className="flex gap-4 items-center justify-center mt-5">
          <Button
            variant="ghost"
            className="border border-[#262c36] text-[#262c36]"
          >
            Learn More
          </Button>
          <Button>Join Our Team</Button>
        </div>
      </div>
    </section>
  );
};
