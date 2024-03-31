import AboutImg from "../assets/images/img04.jpg";

export const AboutUs = () => {
  return (
    <section className="container h-fit bg-[#262c36]/5">
      <div className="items-center justify-center pt-12 pb-24 space-y-12 lg:grid lg:grid-cols-2 lg:gap-[50px]">
        <div className="flex flex-col gap-[15px]">
          <h4 className="text-[16px] leading-[26px]">About Us</h4>
          <h1 className="text-[40px] leading-[50px] font-bold">
            Welcome to the Global Village!
          </h1>
          <p className="text-[16px] leading-[24px] font-light tracking-tight">
            Global Village is a private, community-based facility. Established
            in 2008, we provide an array of mental/behavioral health services to
            help a diverse population of children, adolescents, adults, and
            their families navigate common and complex issues. We believe all
            individuals deserve a stable environment conducive to their needs.
            It is our mission to provide assistance to enhance health and
            wellness because mental health is a priority, happiness is
            essential, and self care is a necessity. Are you familiar with your
            mental/behavioral health status and willing to accept treatment?
          </p>
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
