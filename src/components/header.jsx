import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Header() {
  return (
    <>
      {/* The header */}
      {/**
       * md:px-10 - When the screen size hits medium break point, the padding on the x-axis is set to 10.
       */}
      <nav
        id="website_header"
        className="header mb-12 flex justify-between items-center text-xl md:px-10"
      >
        {/* The website logo */}
        <h1 id="logo">
          <a className="text-4xl text-teal-600 font-medium" href="/">
            AS
          </a>
        </h1>

        {/* The navigation menu */}
        <ul id="navigation" className="flex justify-between items-center">
          <li className="nav_item ml-10">
            <a href="#Projects">Projects</a>
          </li>
          <li className="nav_item ml-10">
            <a href="#">Resume</a>
          </li>
          <li className="nav_item">
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md text-white ml-8 hover:bg-teal-600"
              href="#"
            >
              Connect
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
