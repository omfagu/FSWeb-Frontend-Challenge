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
              Hello, I'm Ömer. I'm a full-stack developer with experience in
              both <br /> front-end and back-end development. If you're looking
              for a developer <br />
              to create robust and scalable front-end and back-end products,
              tailored <br />
              for excellent user experiences, feel free to get in touch with me.
              I'm looking <br /> forward to collaborating!
            </p>
          </div>
        ) : (
          <div className="content">
            <h2>
              Yaratıcı Düşünür <br />
            </h2>
            <p>
              Merhaba, ben Ömer. Hem ön uç hem de arka uç geliştirme konusunda{" "}
              <br />
              deneyime sahip bir full-stack geliştiriciyim. Eğer sağlam ve
              ölçeklenebilir <br /> ön uç ve arka uç ürünleri oluşturacak bir
              geliştirici arıyorsanız, harika <br /> kullanıcı deneyimleri için
              benimle iletişime geçebilirsiniz. Birlikte çalışmayı <br /> dört
              gözle bekliyorum!
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
          </div> //aaaaaaaaaaaaa
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

      <div class="image-container">
        <img src="./5555.jpeg" alt="icon" class="border-animation" />
      </div>
    </div>
  );
}
