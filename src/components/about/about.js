import React, { Component } from "react";
import resumeData from "../../resumeData";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={resumeData.imagebaseurl}
                alt=""
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{resumeData.aboutMe}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Akhil Siraswal</span>
                    <br />
                    <span>
                      Moh. No-1 Teachers Colony Bilsi
                      <br />
                      Budaun, India
                    </span>
                    <br />
                    <span>(+91) 8532057324</span>
                    <br />
                    <span>akhilsiraswal@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="#" className="button">
                      <i className="fa fa-download" />
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
