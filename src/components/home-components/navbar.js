import React from "react";
import "./navbar.scss";
import Logo from "../../assets/bizikintlogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#Home">
          <img src={Logo} alt="img" class="img-fluid" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="ml-auto collapse navbar-collapse text-white"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase justify-content-right">
            <li class="nav-item ">
              <Link to={"/"} class="text-decoration-none">
                <a
                  class="nav-link active text-decoration-none"
                  aria-current="page"
                  href="#Home"
                >
                  Home
                </a>
              </Link>
            </li>

            <li class="nav-item">
              <a class="nav-link active" href="#Home">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#Home">
                BLOGS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#Home">
                CONTACT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#Home">
                LOGIN
              </a>
            </li>
            <li>
              <Link to={"/register"}>
                <button
                  class="btn btn-outline-light text-uppercase"
                  type="submit"
                >
                  Register
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
