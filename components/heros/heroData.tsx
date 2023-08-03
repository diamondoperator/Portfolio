import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const heroData = [
  {
    label: "github",
    href: "https://github.com/diamondoperator/", //"https://github.com/itsjagdeep",
    style:
      "bg-white rounded-full shadow-lg shadow-white-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300",
    icon: <FaGithub />,
  },
  {
  label: "linkedin",
  href: "https://www.linkedin.com/in/bryant-davis-a3028726", //"https://www.linkedin.com/in/thisisjagdeep/",
  style: "bg-white rounded-full shadow-lg shadow-white-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-400",
  icon: <FaLinkedinIn />,
  }
] as const;
//