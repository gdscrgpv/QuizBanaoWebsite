import React from "react";

export default function Navbar() {
  return(
  <nav className="navbar navbar-expand-md main-nav navigation fixed-top sidebar-left">
    <div className="container">
      <button className="navbar-toggler" type="button">
        <span className="icon-bar" /> <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <a href="#main" className="navbar-brand">
        <img src="img/logo.png" alt="Quiz Banao" className="logo logo-sticky" />
      </a>
      <div className="collapse navbar-collapse" id="main-navbar">
        <div className="sidebar-brand">
          <a href="index.html">
            <img
              src="img/logo.png"
              alt="Quiz Banao Template"
              className="logo"
            />
          </a>
        </div>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link scrollto" href="https://web.quizbanao.com">
              Visit App
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>);
}
