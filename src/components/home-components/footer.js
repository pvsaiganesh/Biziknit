import React from "react";
import Logo from "../../assets/bizikintlogo.svg";
import "./joinus.scss";

const Footer = () => {
  return (
    <div class="p-5 bg-5">
      <div class="text-center">
        <img src={Logo} alt="img" />
      </div>
    </div>
  );
};

export default Footer;
