import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Landing from "./components/landing";
import Stack from "./components/techStack";
import Services from "./components/Services";
import ProjectCard from "./components/project/projectCard";
import Footer from "./components/footer";

function App() {
  return (
    // min-h-screen means min-height:100vh;
    <main>
      <Header />
      <Landing />
      <Stack />
      <Services />
      {/* <ProjectCard /> */}
      <Footer />
    </main>
  );
}

export default App;
