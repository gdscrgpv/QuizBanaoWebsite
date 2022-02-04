import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="site-footer section bg-dark text-contrast edge top-left">
        <div className="container py-3">
          <div className="row gap-y text-center text-md-left">
            <div className="col-md-4 mr-auto">
              <img src="img/logo-light.png" alt="" className="logo" />
              <p>
                  Quiz Banao is a Live quizzing solution for your Events
              </p>
            </div>
            {/* <div className="col-md-2">
              <nav className="nav flex-column">
                <a className="nav-item py-2 text-contrast" href="#">
                  About
                </a>
                <a className="nav-item py-2 text-contrast" href="#">
                  Services
                </a>
                <a className="nav-item py-2 text-contrast" href="#">
                  Blog
                </a>
              </nav>
            </div>
            <div className="col-md-2">
              <nav className="nav flex-column">
                <a className="nav-item py-2 text-contrast" href="#">
                  Features
                </a>
                <a className="nav-item py-2 text-contrast" href="#">
                  API
                </a>
                <a className="nav-item py-2 text-contrast" href="#">
                  Customers
                </a>
              </nav>
            </div>
            <div className="col-md-2">
              <nav className="nav flex-column">
                <a className="nav-item py-2 text-contrast" href="#">
                  Careers
                </a>
                <a className="nav-item py-2 text-contrast" href="#">
                  Contact
                </a>
                <a className="nav-item py-2 text-contrast" href="#">
                  Search
                </a>
              </nav>
            </div> */}
            <div className="col-md-2">
              <h6 className="py-2 small">Follow us</h6>
              <nav className="nav justify-content-around">
                <a
                  href="https://gdsc.community.dev/university-institute-of-technology-rgpv-bhopal/"
                  target="_blank"
                  className="btn btn-circle btn-sm brand-facebook"
                >
                  <i className="fa fa-globe" />
                </a>
                <a href="https://www.linkedin.com/company/gdscuitrgpv/" className="btn btn-circle btn-sm brand-twitter">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="https://instagram.com/gdsc_uitrgpv" className="btn btn-circle btn-sm brand-instagram">
                  <i className="fab fa-instagram" />
                </a>
              </nav>
            </div>
          </div>
          <hr className="mt-5 op-5" />
          <div className="row small">
            <div className="col-md-4">
              <p className="mt-2 mb-0 text-center text-md-left">
                Designed with &hearts; by <a href="https://gdsc.community.dev/university-institute-of-technology-rgpv-bhopal/"> GDSC UIT RGPV</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
