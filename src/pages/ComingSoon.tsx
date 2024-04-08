import AboutImg from "../assets/images/img10.jpg";

const ComingSoon = () => {
  return (
    <>
      <div className="container h-fit" id="coming-soon">
        <div className="flex items-center justify-center gap-5 w-full h-[250px] lg:h-[500px] bgImg background-tint rounded-xl mt-10 mb-10 p-5">
          <h1 className="text-[50px] leading-[40px] lg:text-[100px] lg:leading-[90px] font-bold tracking-tight text-[#f4f5f6]">
            Coming Soon...
          </h1>
        </div>
      </div>
      <div className="h-fit" id="about-us">
        <div className="container items-center justify-center py-24 space-y-12 lg:flex lg:items-start">
          <figure className="sm:hidden w-full">
            <img
              src={AboutImg}
              alt="about us"
              className="shadow-md rounded-md object-cover h-[300px] w-full lg:w-[400px] lg:h-[500px]"
            />
          </figure>
          <div className="flex flex-col gap-[15px]">
            <h1 className="text-[40px] leading-[50px] font-bold">
              Big News Coming Soon!!!
            </h1>
            <p className="text-[16px] leading-[24px] font-light tracking-tight">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              fugit illo quisquam laudantium id ratione architecto consequuntur
              debitis velit laboriosam, molestias, eius quam, ex repellat.
            </p>
            <p className="text-[16px] leading-[24px] font-light tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              vel voluptates, eum voluptate excepturi officiis voluptatum. Ea
              nihil corrupti debitis, obcaecati provident facilis, aspernatur ex
              repellendus harum exercitationem excepturi facere.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
