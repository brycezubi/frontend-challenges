import { FaReact, FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Tec = () => {
  return (
    <ul className="flex items-center justify-evenly my-10 ">
        <li className="flex flex-col md:flex-row gap-2 items-center md:gap-3">
          <FaHtml5 color="#ef4527" size={30} />
          <small>Html</small>
        </li>
        <li className="flex flex-col md:flex-row gap-2 items-center gmd:ap-3">
          <FaCss3Alt color="#2b69c9" size={30} />
          <small>Css</small>
        </li>
        <li className="flex flex-col md:flex-row gap-2 items-center md:gap-3">
          <DiJavascript1 color="#ffd55d" size={30} />
          <small>JavaScript</small>
        </li>
        <li className="flex flex-col md:flex-row gap-2 items-center md:gap-3">
          <FaReact color="#059feb" size={30} />
          <small>React</small>
        </li>
        <li className="flex flex-col md:flex-row gap-2 items-center md:gap-3">
          {" "}
          <SiTailwindcss color="#059feb" size={30} />
          <small>Tailwind Css</small>
        </li>
        <li className="flex flex-col md:flex-row gap-2 items-center md:gap-3">
          {" "}
          <FaSass color="#ef4527" size={30} />
          <small>Sass</small>
        </li>
      </ul>
  )
}

export default Tec