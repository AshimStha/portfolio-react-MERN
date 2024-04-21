import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import profile from "/src/assets/dp2.jpg";

export default function Landing() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:8000/user");
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>User data not found</div>;
  }

  return (
    <section className="text-xl text-center p-10 py-10">
      <h1 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
        {`${userData.firstname} ${userData.lastname}`}
      </h1>
      <h2 className="text-2xl py-2 md:text-3xl">{userData.role}</h2>

      <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">
        {userData.bio}
      </p>

      <div className="mx-auto rounded-full w-90 h-90 overflow-hidden mt-10 mb-10 md:h-96 md:w-96">
        <img
          className="mx-auto object-cover h-full w-full"
          src={profile}
          alt="Profile Picture"
        />
      </div>

      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <a href={userData.github}>
          <AiFillGithub />
        </a>
        <a href={userData.linkedIn}>
          <AiFillLinkedin />
        </a>
        <a href={userData.social_ig}>
          <AiFillInstagram />
        </a>
      </div>
    </section>
  );
}
