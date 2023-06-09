import React from "react";
import "./Skills.css";

export default function Skills({ language }) {
  return (
    <div className="skills">
      {language === "en" ? <h3>Skills</h3> : <h3>Yetenekler</h3>}
      <div className="skillsList">
        {language === "en" ? (
          <div className="skillsListGroup">
            <h4>Java Script</h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        ) : (
          <div className="skillsListGroup">
            <h4>Java Script</h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        )}

        {language === "en" ? (
          <div className="skillsListGroup">
            <h4>React.Js</h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        ) : (
          <div className="skillsListGroup">
            <h4>React.Js</h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        )}

        {language === "en" ? (
          <div className="skillsListGroup">
            <h4>Node.Js</h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        ) : (
          <div className="skillsListGroup">
            <h4>Node.Js</h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
