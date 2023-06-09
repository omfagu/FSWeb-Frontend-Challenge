import "./App.css";
import Toggle from "./components/Toggle";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState(localStorage.getItem("key") || "en");

  const handleLanguageChange = () => {
    if (language === "en") {
      setLanguage("tr");
      localStorage.setItem("key", "tr");
    } else {
      setLanguage("en");
      localStorage.setItem("key", "en");
    }
  };

  return (
    <div className="App">
      <Toggle language={language} handleLanguageChange={handleLanguageChange} />
      <Navbar language={language} />
      <Head language={language} />
      <div id="skills"></div>
      <Skills language={language} />
      <Profile language={language} />
      <div id="projects"></div>
      <Projects language={language} />
      <div id="footer"></div>
      <Footer language={language} />
    </div>
  );
}

export default App;
