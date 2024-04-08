import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const ComingSoon = () => {
  const navigate = useNavigate();
  return (
    <section className="container h-fit" id="coming-soon">
      <div className="flex flex-col items-center justify-center gap-16 w-full h-[250px] lg:h-[500px] bgImg background-tint rounded-xl mt-10 mb-10 p-5">
        <h1 className="text-[50px] leading-[40px] lg:text-[100px] lg:leading-[90px] font-bold tracking-tight text-[#f4f5f6]">
          Coming Soon...
        </h1>
        <Button
          variant="ghost"
          onClick={() => navigate("/coming-soon")}
          className="border border-[#f4f5f6] text-[#f4f5f6]"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};
