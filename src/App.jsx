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
      <main className="bg-linen dark:bg-olive px-6 pb-10">
        <Button className="bg-irish text-linen hover:bg-sage dark:bg-mustard dark:text-olive dark:hover:bg-peach rounded-full absolute top-16 right-6 md:top-4" onClick={toggleDarkMode}>
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
