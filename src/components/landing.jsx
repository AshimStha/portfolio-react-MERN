import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { useState } from "react";
import profile from "../../public/dp2.jpg";


export default function Landing() {
  return (
    <section className="text-xl text-center p-10 py-10">
      <h1 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
        Ashim Shrestha
      </h1>
      <h2 className="text-2xl py-2 md:text-3xl">Full Stack Developer.</h2>

      {/**
       * max-w-xl - Setting the max-width to the p tag
       * mx-auto - Alignment in the x-axis (centering it)
       */}
      <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">
        Passionate full-stack web developer skilled in crafting elegant and
        responsive web applications from concept to deployment. Specializing in
        both front-end and back-end technologies to deliver seamless digital
        experiences.
      </p>

      {/* The image */}
      {/* Here, the border radius is made 50% by using the same height and width */}
      <div className="mx-auto rounded-full w-90 h-90 overflow-hidden mt-10 mb-10 md:h-96 md:w-96">
        <img
          className="mx-auto object-cover h-full w-full"
          src={profile}
          alt="Profile Picture"
        />
      </div>

      {/* The social icons */}
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <a href="https://github.com/AshimStha">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/ashim-shrestha-72a16a260/">
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/ash.imstha/">
          <AiFillInstagram />
        </a>
      </div>
    </section>
  );
}
