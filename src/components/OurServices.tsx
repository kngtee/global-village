import { useState } from "react";
import { serviceItems } from "../constants";
import { Button } from "./ui/button";

export const OurServices = () => {
  const [viewAll, setViewAll] = useState<boolean>(false);
  return (
    <section className="container h-fit">
      <div className="flex flex-col m-10 items-center justify-center py-12">
        <span className="text-[16px] text-black">Our Services</span>
        {/* Services */}
        <div className="grid grid-cols-2 gap-6 lg:grid lg:grid-cols-3 lg:gap-10 mt-6">
          {serviceItems
            .slice(0, viewAll ? serviceItems.length : 6)
            .map((item, index) => (
              <div key={index} className="flex flex-col cursor-pointer mb-4 lg:mb-8">
                <figure className="">
                  <img
                    src={item.img}
                    alt=""
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
        <Button
          variant={"ghost"}
          className="border border-[#262c36] text-[#262c36] mt-4 hover:bg-[#31bdc2] hover:border-none hover:text-[#f4f5f6]"
          onClick={() => setViewAll(!viewAll)}
        >
          {!viewAll ? "View More" : "View Less"}
        </Button>
      </div>
    </section>
  );
};
