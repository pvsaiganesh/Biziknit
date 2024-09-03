import React from "react";

import worker from "../assets/worker.png";
import SmallInfoCard from "./small-info-card";
import RegCard from "./reg-card.js";
import WhatIsBiziknit from "./whatIsbiziknit.js";
import OurValues from "./ourvalues.js";
import Testimonials from "./testimonials.js";

import "./home.scss";

const Home = () => {
  return (
    <>
      <div class="p-5 pb-0">
        <div class="text-light text-start d-flex flex-row justify-content-space-around align-items-center">
          <div>
            <p class="fs-2">
              Connect, Collaborate, and Conquer Market with Biziknit
            </p>
            <p class="fs-4">
              Join a thriving community of small business owners and elevate
              your success with exclusive referrals and leads tailored just for
              you!
            </p>
            <button type="button" class="btn btn-outline-light">
              Join Now
            </button>
          </div>
          <div>
            <img src={worker} alt="worker" />
          </div>
        </div>
        <div class="rounded-3 rounded-bottom-0 infos-container d-flex flex-row justify-content-around ml-5 mr-5 p-3 ">
          <SmallInfoCard number={"10+"} title={"Businesses"} />
          <SmallInfoCard number={"20+"} title={"Years of Experience"} />
          <SmallInfoCard number={"10+"} title={"Awards Received"} />
          <SmallInfoCard number={"500+"} title={"Satisfied Clients"} />
        </div>
      </div>
      <RegCard />
      <WhatIsBiziknit />
      <OurValues />
      <Testimonials />
    </>
  );
};

export default Home;
