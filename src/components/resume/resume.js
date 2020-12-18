import React from "react";
import resumeData from "../../resumeData";

function resume() {
  return (
    <section id="resume">
      {/* Education
----------------------------------------------- */}
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>{resumeData.school}</h3>
              <p className="info">
                {resumeData.schoolMarks} <span>•</span>{" "}
                <em className="date">{resumeData.schoolDate}</em>
              </p>
              <p></p>
            </div>
          </div>{" "}
          {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>{resumeData.college}</h3>
              <p className="info">
                {resumeData.collegeDegree} <span>•</span>{" "}
                <em className="date">March 2003</em>
              </p>
              <p>{resumeData.collegeDetails}</p>
            </div>
          </div>{" "}
          {/* item end */}
        </div>{" "}
        {/* main-col end */}
      </div>{" "}
      {/* End Education */}
      {/* Work
----------------------------------------------- */}
      {/* Skills
----------------------------------------------- */}
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <p>{resumeData.skillsDetails}</p>
          <div className="bars">
            <ul className="skills">
              <li>
                <span className="bar-expand photoshop" />
                <em> Express</em>
              </li>
              <li>
                <span className="bar-expand illustrator" />
                <em>Css </em>
              </li>
              <li>
                <span className="bar-expand wordpress" />
                <em>Javascript</em>
              </li>
              <li>
                <span className="bar-expand css" />
                <em>Nodejs</em>
              </li>
              <li>
                <span className="bar-expand html5" />
                <em>HTML5</em>
              </li>
              <li>
                <span className="bar-expand jquery" />
                <em>MongoDB</em>
              </li>
            </ul>
          </div>
          {/* end skill-bars */}
        </div>{" "}
        {/* main-col end */}
      </div>{" "}
      {/* End skills */}
    </section>
  );
}

export default resume;
