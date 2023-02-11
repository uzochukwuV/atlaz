import React from "react";
import "./nav.css";
import Logo from "../../assets/logo.svg"

function Navbar() {
  return (
    <div className="navbar-bg position-absolute vw-100 navbar navbar-dark nav-1">
      <div className="position-relative container-fluid justify-space-between max-width-1680 flex-2 align-items-center">
        <div>
          <span className="">
           <img src={Logo} alt="logo" />
          </span>
          <a href="#" className="nav-logo-link w-inline-block text-dark fs-3">
            TLAS
          </a>
        </div>
        <div className="d-flex gap-3 ">
          <div className="d-none d-md-block">
            <ul role="list" className="nav-links w-list-unstyled">
              <li className="nav-item-wrap">Products</li>
              <li className="nav-item-wrap">Services</li>
              <li className="nav-item-wrap">Ping Us</li>
              <li className="nav-item-wrap">Avaliable</li>
            </ul>
          </div>
          <div className="d-flex align-items-center gap-2">
          <a href="#" className="d-flex text-dark">
                Login
            </a>
            <a href="#" className="btn-3 btn-3-sm">
              Sign Up
            </a>
            <span><i class="bi bi-list"></i></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
