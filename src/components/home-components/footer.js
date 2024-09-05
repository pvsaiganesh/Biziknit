import React from "react";
import Logo from "../../assets/bizikintlogo.svg";
import "./joinus.scss";
import Social from "./soical.js";
import logo from "../../assets/logo-white.png";

const Footer = () => {
  return (
    <div class="p-5 bg-5">
      <div class="text-center">
        <img src={Logo} alt="img" class="img-fluid" />
      </div>
      <Social />
      <hr class="bg-white" />
      <div class="d-flex flex-column flex-md-row justify-content-between text-white">
        <div class="reachus d-flex flex-column p-5">
          <p class="fs-6 fw-bold">Reach us</p>
          <p class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-telephone-fill me-4"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
            +91 7095355556
          </p>
          <p class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope-fill me-4"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            biziknitcommunity@gmail.com
          </p>
          <p class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill me-4"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            #39-14-8/5 Madhavadara-Murali nagar, Beside ICICI Bank Visakhapatnam
            -530007
          </p>
        </div>

        <div class="pages d-flex flex-column p-5">
          <p class="fs-6 fw-bold">Pages</p>
          <p class="fs-6">Home</p>
          <p class="fs-6">About Us</p>
          <p class="fs-6">Blogs</p>
          <p class="fs-6">Contact Us</p>
        </div>

        <div class="legal d-flex flex-column p-5">
          <p class="fs-6 fw-bold">Legal</p>
          <p class="fs-6">Privacy Policy</p>
          <p class="fs-6">Terms and Services</p>
          <p class="fs-6">Terms of Use</p>
        </div>

        <div class="subscribe p-1">
          <p class="fs-4 fw-bold">Subscribe to our newsletter</p>
          <p class="fs-6">Be the first to receive any new updated</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Enter your email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button class="btn bg-button" type="button" id="button-addon2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p class="text-center text-white">Biziknit © 2024. All Rights Reserved</p>
      <p class="text-end text-white">
        A Product From
        <img src={logo} alt="logo" />
      </p>
    </div>
  );
};

export default Footer;
