import AboutImg from "../assets/images/img14.svg";

const AboutUs = () => {
  return (
    <>
      <section className="container h-fit" id="coming-soon">
        <div className="flex items-center justify-center gap-5 w-full h-[250px] lg:h-[500px] bgAbt background-tint rounded-xl mt-10 mb-10 p-5">
          <h1 className="text-[50px] leading-[40px] lg:text-[100px] lg:leading-[90px] font-bold tracking-tight text-[#f4f5f6]">
            About Us
          </h1>
        </div>
        <div className="pb-24 pt-12">
          <h1 className="text-[40px] leading-[50px] font-bold">
            Welcome to the Global Village!
          </h1>
          <p className="text-[16px] leading-[24px] font-light tracking-tight my-2">
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
          <p className="text-[16px] leading-[24px] font-light tracking-tight">
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
      </section>
      <section className="h-fit bg-[#262c36]/5" id="about-us">
        <div className="container items-center justify-center py-24 space-y-12 lg:grid lg:grid-cols-2 lg:gap-[50px]">
          <figure className="w-full">
            <img
              src={AboutImg}
              alt="about us"
              className="shadow-md rounded-md object-cover h-[300px] w-full lg:h-[400px]"
            />
          </figure>
          <div className="flex flex-col gap-[15px]">
            <h1 className="text-[40px] leading-[50px] font-bold">
              Our Accreditation Ensures High-Quality Care
            </h1>
            <p className="text-[16px] leading-[24px] font-light tracking-tight">
              Global Village collaborates with mental health organizations that
              ensure individuals served receive exceptional, up-to-date services
              compliant with healthcare laws, regulations, and industry
              standards.
            </p>
            <p className="text-[16px] leading-[24px] font-light tracking-tight">
              We are accredited by the Commission on Accreditation of
              Rehabilitation Facilities (CARF) International and meet all state
              and federal requirements, including complying with HIPPA standards
              and protocols. We use evidenced-based curriculums and treatment
              strategies for all individuals served.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
