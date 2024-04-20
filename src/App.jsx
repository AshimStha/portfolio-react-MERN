import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Landing from "./components/landing";
import Stack from "./components/techStack";
import Services from "./components/Services";
import Projects from "./components/project/projects";
import Footer from "./components/footer";

function App() {
  return (
    // min-h-screen means min-height:100vh;
    <main>
      <Header />
      <Landing />
      <Stack />
      <Services />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
