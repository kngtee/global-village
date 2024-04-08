import { serviceItems } from "../constants";

const Services = () => {
  return (
    <>
      <section className="container h-fit" id="coming-soon">
        <div className="flex items-center justify-center gap-5 w-full h-[250px] lg:h-[500px] bgAbt background-tint rounded-xl mt-10 mb-10 p-5">
          <h1 className="text-[50px] leading-[40px] lg:text-[100px] lg:leading-[90px] font-bold tracking-tight text-[#f4f5f6]">
            Our Services
          </h1>
        </div>
        <div className="pb-24 pt-12">
          <h1 className="text-[40px] leading-[50px] font-bold">
            Global Village Health Services
          </h1>
          <p className="text-[16px] leading-[24px] font-light tracking-tight my-2">
            Treats a diverse population of children, teens, and adults who need
            treatment for behavioral and mental health issues. Our team will
            meet you in the community or at home, school, or the office.
            Together, we'll develop a treatment plan that will address your
            mental health needs, and we are confident that you will achieve
            short- and long-term mental and behavioral health goals. <br />
            <br />
            Our services include:
          </p>
          {/* Services */}
          <div className="flex items-center justify-center mt-5">
            <div className="grid grid-cols-2 gap-6 lg:grid lg:grid-cols-3 lg:gap-10 mt-6">
              {serviceItems.slice(0, serviceItems.length).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col cursor-pointer mb-4 lg:mb-8"
                >
                  <figure className="">
                    <img
                      src={item.img}
                      alt=""
                      loading="lazy"
                      className="w-[200px] h-[150px] lg:w-[300px] lg:h-[300px] object-cover shadow-md rounded-md"
                    />
                  </figure>
                  <div className="flex flex-col items-start">
                    <ul>
                      <li className="mt-5 text-[14px] lg:text-[16px] leading-[18px] font-semibold">
                        {item.desc01}
                      </li>
                      <li className="mt-2 text-[14px] lg:text-[16px] leading-[18px] font-semibold">
                        {item.desc02}
                      </li>
                      <li className="mt-2 text-[14px] lg:text-[16px] leading-[18px] font-semibold">
                        {item.desc03}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
