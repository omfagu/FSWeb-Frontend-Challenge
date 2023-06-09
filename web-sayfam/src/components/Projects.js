import React from "react";
import "./Projects.css";

export default function Projects({ language }) {
  return (
    <div className="projects">
      <span className="profileLine"></span>
      <h3> {language === "en" ? "Projects" : "Projeler"}</h3>
      <div className="carts">
        <div className="projects-list">
          <img src=".\task.png" alt="" />
          <h4>Task Manage </h4>

          {language === "en" ? (
            <p className="content-text">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
          ) : (
            <p className="content-text">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
          )}
          <div className="techStack">
            <p>react</p>
            <p>redux</p>
            <p>axios</p>
          </div>
          <div className="details">
            <a
              href="https://github.com/omfagu/FSWeb-S7G2-Team-Builder"
              target="_blank"
            >
              <p> GitHub</p>
            </a>
            <a href="http://team-builder.infinityfreeapp.com/" target="_blank">
              <p> Viev Site</p>
            </a>
          </div>
        </div>

        <div className="projects-list">
          <img src=".\pizza-order.png" />
          <h4>Pizza Order</h4>

          {language === "en" ? (
            <p className="content-text">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
          ) : (
            <p className="content-text">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
          )}

          <div className="techStack">
            <p>react</p>
            <p>redux</p>
            <p>axios</p>
          </div>
          <div className="details">
            <a
              href="https://github.com/omfagu/fsweb-s7-challenge-pizza"
              target="_blank"
            >
              <p> Githup</p>
            </a>
            <a href="http://pizza-order.infinityfreeapp.com/" target="_blank">
              <p>View Site</p>
            </a>
          </div>
        </div>

        <div className="projects-list">
          <img src=".\team-builder.png" />
          <h4>Team Builder</h4>

          {language === "en" ? (
            <p className="content-text">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
          ) : (
            <p className="content-text">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
          )}

          <div className="techStack">
            <p>react</p>
            <p>redux</p>
            <p>axios</p>
          </div>
          <div className="details">
            <a
              href="https://github.com/omfagu/FSWeb-S7G2-Team-Builder"
              target="_blank"
            >
              <p>GitHub</p>
            </a>
            <a href="http://team-builder.rf.gd/?i=1" target="_blank">
              <p>Viev Site</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
