import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

export default function Header({ language }) {
  return (
    <div className="header">
      <p className="logo">Ö</p>

      {language === "en" ? (
        <nav className="headerNav">
          <Link to="skills" smooth={true} duration={600}>
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={750}>
            Projects
          </Link>
          <Link to="footer" smooth={true} duration={1000}>
            Hire Me
          </Link>
        </nav>
      ) : (
        <nav className="headerNav">
          <Link to="skills" smooth={true} duration={600}>
            Yetenekler
          </Link>
          <Link to="projects" smooth={true} duration={750}>
            Projeler
          </Link>
          <Link to="footer" smooth={true} duration={1000}>
            İletişime geç
          </Link>
        </nav>
      )}
    </div>
  );
}
