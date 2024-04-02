import ServiceImg01 from "../assets/images/img12.jpg";
import ServiceImg02 from "../assets/images/img02.jpg";
import ServiceImg03 from "../assets/images/img03.jpg";
import ServiceImg04 from "../assets/images/img06.jpg";
import ServiceImg05 from "../assets/images/img08.jpg";
import ServiceImg06 from "../assets/images/img13.jpg";
import ServiceImg07 from "../assets/images/img14.jpg";
import ServiceImg08 from "../assets/images/img11.jpg";
import ServiceImg09 from "../assets/images/img16.jpg";

export const navItems = [
  { label: "About Us", href: "#" },
  { label: "Services", href: "#" },
  // { label: "Our Team", href: "#" },
  { label: "Coming Soon", href: "#" },
  { label: "Contact Us", href: "#" },
];

type serviceType = {
  img: string;
  desc01: string;
  desc02: string;
  desc03: string;
};

export const serviceItems: serviceType[] = [
  {
    img: ServiceImg01,
    desc01: "Behavioral Health Assessments",
    desc02: "Community Resources",
    desc03: "Community Support",
  },
  {
    img: ServiceImg02,
    desc01: "Nursing Assessments & Health Services",
    desc02: "Diagnostic Assessments",
    desc03: "Psychiatric Treatment",
  },
  {
    img: ServiceImg03,
    desc01: "Psycho-Social Rehabilitation",
    desc02: "Service Plan Development",
    desc03: "Psychological Testing",
  },
  {
    img: ServiceImg04,
    desc01: "Family, Group & Individual Counseling",
    desc02: "Case Management",
    desc03: "",
  },
  {
    img: ServiceImg05,
    desc01: "Addictive Disease Support Services",
    desc02: "",
    desc03: "",
  },
  {
    img: ServiceImg06,
    desc01: "Drug Treatment & Education Program",
    desc02: "Community Transition Planning",
    desc03: "",
  },
  {
    img: ServiceImg07,
    desc01: "Medical Insurance",
    desc02: "",
    desc03: "",
  },
  {
    img: ServiceImg08,
    desc01: "Additional Medical Services",
    desc02: "",
    desc03: "",
  },
  {
    img: ServiceImg09,
    desc01: "Crisis Services",
    desc02: "",
    desc03: "",
  },
];
