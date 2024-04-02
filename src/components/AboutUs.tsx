import AboutImg from "../assets/images/img15.jpg";

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
          <p>
            We are committed to creating inclusive and supportive environments
            for individuals with intellectual and developmental disabilities,
            focusing on skill development and community integration. Recognizing
            the importance of early intervention, our services for children aim
            to provide a nurturing and stimulating environment to support their
            holistic growth. With a client-centered approach, our goal is to
            meet the unique needs of each demographic, ensuring that individuals
            of all ages and abilities receive the specialized care and attention
            required for their well-being.
          </p>
        </div>
        <figure className="w-full">
          <img
            src={AboutImg}
            alt="about us"
            className="shadow-md rounded-md object-cover h-[300px] w-full lg:h-[500px]"
          />
        </figure>
      </div>
    </section>
  );
};
