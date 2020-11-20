import React, { Component } from "react";
//import anime from "animejs";
import NavBar from "../NavBar/NavBar";
import "./ProfilePage.css";

class ProfilePage extends Component {
  render() {
    return (
      <div className="ProfilePage">
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <div className="header-wrapper">
          <NavBar />
        </div>
        <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0">
                <div className="card card-profile shadow">
                  <div className="row justify-content-center">
                    <div className="col-lg-3 order-lg-2">
                      <div className="card-profile-image">
                        <a href="/profile">
                          <img
                            src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg"
                            className="rounded-circle"
                            alt="your pic man!"
                          ></img>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></div>
                  <div className="card-body pt-0 pt-md-4">
                    <div className="row">
                      <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                          <div>
                            <span className="heading">abc@gmail.com</span>
                            <span className="description">Email</span>
                          </div>
                          <div>
                            <span className="heading">22</span>
                            <span className="description">Age</span>
                          </div>
                          <div>
                            <span className="heading">Student</span>
                            <span className="description">Occupation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="h3pp">Jessica Jones</h3>
                      <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2"></i>Address
                      </div>
                      <hr className="my-4" />
                      <p>Description about the person</p>
                      <h4>Your Skills</h4>
                      <ul>
                        <li>C++</li>
                        <li>JS</li>
                        <li>Machine Learning</li>
                      </ul>
                      <h5 className="h5pp">Number of questions solved</h5>
                      <p>60</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
