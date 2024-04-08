import { useNavigate } from "react-router-dom";
import AboutImg from "../assets/images/img15.jpg";
import { Button } from "./ui/button";

export const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <section className="h-fit bg-[#262c36]/5" id="about-us">
      <div className="container items-center justify-center pt-12 pb-24 space-y-12 lg:grid lg:grid-cols-2 lg:gap-[50px]">
        <div className="flex flex-col gap-[15px]">
          <h4 className="text-[16px] leading-[26px]">About Us</h4>
          <h1 className="text-[40px] leading-[50px] font-bold">
            Welcome to the Global Village!
          </h1>
          <p className="text-[16px] leading-[24px] font-light tracking-tight mb-5">
            At Global Village our comprehensive healthcare agency caters to
            diverse needs, offering specialized behavior health services in
            supporting various populations, including the elderly, individuals
            with traumatic brain injuries, those with intellectual and
            developmental disabilities, mental health, drug addiction, refugees,
            and children. For the elderly, our services prioritize promoting
            independence, addressing age-related challenges, and ensuring a high
            quality of life. Individuals with traumatic brain injuries benefit
            from personalized rehabilitation programs aimed at restoring
            functional abilities and fostering independence.
          </p>
          <Button className="lg:w-[50%]" onClick={() => navigate("/about-us")}>
            Learn More
          </Button>
        </div>
        <figure className="w-full">
          <img
            src={AboutImg}
            alt="about us"
            className="shadow-md rounded-md object-cover h-[300px] w-full lg:h-[400px]"
          />
        </figure>
      </div>
    </section>
  );
};
