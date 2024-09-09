import "./aboutus.scss";
import React from "react";
import img from "../assets/vision.jpg";
const AboutUs = () => {
  return (
    <div>
      <div className="bg-9 d-flex flex-column justify-content-center align-items-center">
        <span className="heading-text">About Us</span>
      </div>
      <div className="container p-5">
        <div className="row">
          <div className="col-6 text-start">
            <p className="fs-4 text-orange-color">About Us</p>
            <p className="fs-6">
              At Biziknit, we understand the challenges faced by small business
              owners in today's competitive landscape. That's why we've created
              a unique platform that unites entrepreneurs in a specific pin
              code, enabling you to thrive together. By becoming a member, you
              aren't just joining a community; you are stepping into a world of
              possibilities where you’ll access valuable referrals, automated
              lead generation, and collaborative growth opportunities.
            </p>
            <p className="fs-6">
              <span className="fs-5 text-orange-color">Our vision</span> is to
              empower small and medium enterprises (SMEs) to become leaders in
              their local markets. Together, we can create a supportive
              ecosystem that fosters innovation and mutual success.
            </p>
          </div>
          <div className="col-6">
            <img src={img} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
