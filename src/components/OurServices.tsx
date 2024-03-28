import { useState } from "react";
import { serviceItems } from "../constants";
import { Button } from "./ui/button";

export const OurServices = () => {
  const [viewAll, setViewAll] = useState<boolean>(false);
  return (
    <section className="container h-fit">
      <div className="flex flex-col m-10 items-center justify-center">
        <span className="text-[16px] text-gray-500">Our Services</span>
        {/* Services */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-10 mt-6">
          {serviceItems
            .slice(0, viewAll ? serviceItems.length : 6)
            .map((item, index) => (
              <div key={index} className="flex flex-col mb-8">
                <figure className="">
                  <img
                    src={item.img}
                    alt=""
                    className="w-[300px] h-[354px] object-cover shadow-md rounded-md"
                  />
                </figure>
                <div className="flex flex-col items-center">
                  <span className="mt-5">{item.desc01}</span>
                  <span className="">{item.desc02}</span>
                  <span className="">{item.desc03}</span>
                </div>
              </div>
            ))}
        </div>
        <Button
          variant={"ghost"}
          className="border border-[#262c36] text-[#262c36] mt-4 hover:bg-[#31bdc2] hover:border-none hover:text-[#f4f5f6]"
          onClick={() => setViewAll(!viewAll)}
        >
          {!viewAll ? "View All" : "View Less"}
        </Button>
      </div>
    </section>
  );
};
