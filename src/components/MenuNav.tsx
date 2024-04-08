import { Globe } from "lucide-react";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";
import { Button } from "./ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuNav = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const toggleNav = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-gray-400">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex flex-shrink-0 items-center cursor-pointer gap-1"
          >
            <Globe className="text-[#31bdc2]" />

            <h1 className="text-[24px] text-[#262c36] leading-[34px] font-bold tracking-tight">
              Global Village
            </h1>
          </div>
          {/* Menu */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer">
                <a onClick={() => navigate(item.link)}>{item.label}</a>
              </li>
            ))}
          </ul>
          {/* Join us button */}
          <div className="hidden lg:flex justify-center items-center">
            {/* <a
              href="#"
              className="py-2 px-3 border border-[#262c36] rounded-md"
            >
              Contact Us
            </a> */}
            <Button className="bg-[#262c36]">Join Our Team</Button>
          </div>
          {/* Mobile toggle */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleNav}
              className="backdrop-blur-lg hover:bg-transparent"
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-[#f4f5f6] w-full p-12 flex flex-col justify-center items-center border-b border-gray-300 shadow-md lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex mt-4">
              <Button className="bg-[#262c36]">Join Our Team</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MenuNav;
