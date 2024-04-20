import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

export default function Stack() {
  return (
    <section className="text-center flex flex-col justify-center my-20">
      <h1 className="text-4xl font-medium mb-10 py-2 text-teal-600 md:text-5xl">Tech Stack</h1>
      <ul className="flex justify-center items-center gap-4 md:gap-20">
        <li className="text-6xl text-blue-600">
          <AiFillHtml5 />
        </li>
        <li className="text-6xl text-blue-400">
          <FaCss3Alt />
        </li>
        <li className="text-6xl text-yellow-500">
          <SiJavascript />
        </li>
        <li className="text-6xl text-blue-300">
          <FaReact />
        </li>
        <li className="text-6xl text-green-500">
          <DiNodejs />
        </li>
        <li className="text-6xl text-green-400">
          <SiMongodb />
        </li>
        <li className="text-6xl text-gray-700">
          <FaDatabase />
        </li>
      </ul>
    </section>
  );
}
