import React from "react";
import "./Footer.css";
export default function Footer({ language }) {
  return (
    <footer className="footer">
      {language === "en" ? (
        <h3 className="footer-head">
          Let's work together on
          <br />
          your next product.
        </h3>
      ) : (
        <h3 className="footer-head">
          Ekip olalım ve bir sonraki ürününüzü
          <br />
          başarıya ulaştıralım.
        </h3>
      )}

      <div className="rectangle">
        <a className="email" href="mailto:omergurbuz25@hotmail.com">
          <img src="./hand.svg" alt="email icon" />
          <p className="emailcss">omergurbuz25@hotmail.com</p>
        </a>

        <nav className="content-1">
          <a className="content-2" href="">
            Personal Blog
          </a>
          <a className="content-3" href="https://github.com/omfagu">
            GitHub
          </a>
          <a
            className="content-4"
            href="https://www.linkedin.com/in/omerfgurbuz/"
          >
            Linkedin
          </a>
        </nav>
      </div>
    </footer>
  );
}
