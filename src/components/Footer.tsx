import { Globe } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function getDate() {
  const date = new Date();
  return date.getFullYear();
}

const Footer = () => {
  const navigate = useNavigate();
  const [getYear] = useState(getDate());
  return (
    <footer className="bg-[#31bdc2] py-[50px]">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-[#f4f5f6] p-2 text-[262c36] shadow transition hover:bg-[#f4f5f6]/80 sm:p-3 lg:p-4"
            href="#MainContent"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div
              onClick={() => navigate("/")}
              className="flex flex-shrink-0 items-center justify-center lg:justify-start cursor-pointer gap-1"
            >
              <Globe className="text-[#f4f5f6]" />

              <h1 className="text-[24px] text-[#262c36] leading-[34px] font-bold tracking-tight">
                Global Village
              </h1>
            </div>

            <p className="mx-auto mt-1 max-w-md text-center leading-relaxed text-[#262c36] lg:text-left">
              Comprehensive Healthcare Agency
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-[#262c36] transition hover:text-gray-700/75"
                href="#"
              >
                {" "}
                About{" "}
              </a>
            </li>

            <li>
              <a
                className="text-[#262c36] transition hover:text-gray-700/75"
                href="#"
              >
                {" "}
                Services{" "}
              </a>
            </li>

            <li>
              <a
                className="text-[#262c36] transition hover:text-gray-700/75"
                href="#"
              >
                {" "}
                Coming Soon{" "}
              </a>
            </li>

            <li>
              <a
                className="text-[#262c36] transition hover:text-gray-700/75"
                href="#"
              >
                {" "}
                Contact Us{" "}
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-[#262c36] lg:text-right">
          Copyright &copy; {getYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
