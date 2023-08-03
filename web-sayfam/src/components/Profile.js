import React from "react";
import "./Profile.css";

export default function Profile({ language }) {
  return (
    <div className="profile">
      <span className="profile-container"></span>
      <h3> {language === "en" ? "Profile" : "Profil"}</h3>
      <div className="profile-container-2">
        <div className="profile-container-3">
          <h4>{language === "en" ? "Profile" : "Profil"}</h4>
          <div className="birth-date">
            <div className="content-left">
              <p>{language === "en" ? "Date of birth" : "Doğum tarihi"}</p>
              <p>{language === "en" ? "City of residence" : "İkamet şehrim"}</p>
              <p>
                {language === "en" ? "Educational status" : "Eğitim bilgilerim"}
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>
                {language === "en" ? "Preferred role" : "Tercih ettiğim rol"}
              </p>
            </div>
            <div className="content-right">
              <p>09.07.1997</p>
              <p>İstanbul</p>
              <p>
                Atatürk Üniversitesi
                <br />
                {language === "en"
                  ? " Management Information Systems (MIS)"
                  : "Yönetim Bilişim Sistemleri"}
                , 2017
                <br />
                <br />
              </p>
              <p>Frontend, UI</p>
            </div>
          </div>
        </div>
        {language === "en" ? (
          <div className="about">
            <h4>About Me</h4>
            <p>
              Atatürk University Management Information Systems Department in
              2021 I graduated, I graduated document on a project later piss,
              after working as a Software/Application Developer for 6 months
              Then I left and went to full time bootcamp training with
              Workintech. I started together.
              <br />
              <br /> JavaScript | HTML | CSS | Node React | Python | redux | I
              became a Full Stack Developer by learning SQL and more.
            </p>
          </div>
        ) : (
          <div className="about">
            <h4>Hakkımda</h4>
            <p>
              Atatürk Üniversitesi Yönetim Bilişim Sistemleri bölümünden 2021 de
              mezun oldum, mezun olduktan bir proje üzerinde çalışıp daha sonra
              işe girdim, 6 ay Yazılım/Uygulama Geliştirici olarak çalıştıktan
              sonra ayrıldım ve tam zamanlı bootcamp eğtimine Workintech ile
              birlikte başladım.
              <br />
              <br />
              JavaScript | HTML | CSS | Node React | Python | Redux | SQL ve
              daha fazlasını öğrenerek Full Stack Yazılımcı oldum.
            </p>
          </div>
        )}
      </div>
      <span className="profile-container"></span>
    </div>
  );
}
