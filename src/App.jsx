import { useState } from "react";
import "./App.css";
import Navbar from "./components/Nav";
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import { Button } from "flowbite-react";
import { FiSun, FiMoon } from "react-icons/fi";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="bg-linen dark:bg-olive px-6 pb-10 pt-3.5">
        <Button 
          className="bg-irish hover:bg-sage text-linen dark:bg-mustard dark:text-olive dark:hover:bg-peach rounded-full absolute top-6 right-24 md:right-12" 
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
          >
          {darkMode ? <FiSun /> : <FiMoon />}
        </Button>
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
};

export default App;
