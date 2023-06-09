import React from "react";
import { useState, useEffect } from "react";
import "./Toggle.css";

export default function Toggle({ handleLanguageChange, language }) {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "light" ? false : true
  );

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="mode-switch">
        <label className="toggle-switch">
          <input
            type="checkbox"
            className="toggle-switch-checkbox"
            onChange={handleToggle}
            checked={isDarkMode === false ? false : true}
          />
          <span className="slider round"></span>
        </label>
        <div className="text">{isDarkMode ? "LIGHT MODE" : "DARK MODE"}</div>
        <div className="text">|</div>
        <div className="text">
          {language === "en" ? (
            <span id="lang" onClick={handleLanguageChange}>
              TÜRKÇE'YE GEÇ
            </span>
          ) : (
            <span id="lang" onClick={handleLanguageChange}>
              ENGLISH
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
