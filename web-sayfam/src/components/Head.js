import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Head.css";

export default function Head({ language }) {
  return (
    <div className="heroBox">
      <div className="heroLeft">
        <div className="header-p">
          <div className="line"></div>
          <p>Ömer Gürbüz</p>
        </div>
        {language === "en" ? (
          <div className="content">
            <h2>
              Creative thinker
              <br />
              Minimalism lover
            </h2>{" "}
            <p>
              Hi, I’m Ömer. I’m a full-stack developer. If you are looking for a{" "}
              <br />
              Developer who to craft solid and scalable frontend products with{" "}
              <br />
              great user experiences. Let’s shake hands with me.
            </p>
          </div>
        ) : (
          <div className="content">
            <h2>
              Yaratıcı Düşünür <br />
              Minimalizm Aşığı
            </h2>
            <p>
              Merhaba, ben Ömer. Ben bir full-stack geliştiricisiyim. Eğer bir
              Sağlam ve ölçeklenebilir ön uç ürünleri oluşturacak geliştirici
              harika kullanıcı deneyimleri için, benimle iletişime geçin.
            </p>
          </div>
        )}

        {language === "en" ? (
          <div className="buttons">
            <div className="button-1">
              <Link to="footer" smooth={true} duration={2000}>
                <p>Hire me</p>
              </Link>
            </div>
            <div className="button-2">
              <div>
                {" "}
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <a href="https://github.com/omfagu">
                <p>GitHub</p>
              </a>
            </div>
            <div className="button-2">
              <div>
                {" "}
                <FontAwesomeIcon icon={faLinkedin} />
              </div>

              <a href="https://www.linkedin.com/in/omerfgurbuz/">
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        ) : (
          <div className="buttons">
            <div className="button-1">
              <Link to="footer" smooth={true} duration={2000}>
                <p>İletişime Geç</p>
              </Link>
            </div>
            <div className="button-2">
              <div>
                {" "}
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <a href="https://github.com/omfagu">
                <p>GitHub</p>
              </a>
            </div>
            <div className="button-2">
              <div>
                {" "}
                <FontAwesomeIcon icon={faLinkedin} />
              </div>

              <a href="https://www.linkedin.com/in/omerfgurbuz/">
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="image-container">
        <img src="./image1.png" alt="icon" />
      </div>
    </div>
  );
}
