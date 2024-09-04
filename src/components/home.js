import React from "react";

import worker from "../assets/worker.png";
import SmallInfoCard from "./home-components/small-info-card.js";
import RegCard from "./home-components/reg-card.js";
import WhatIsBiziknit from "./home-components/whatIsbiziknit.js";
import OurValues from "./home-components/ourvalues.js";
import Testimonials from "./home-components/testimonials.js";
import WhyJoin from "./home-components/whyjoin.js";
import JoinUs from "./home-components/joinus.js";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div id="home" class="bg-2 p-5 pb-0">
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
      <WhyJoin />
      <JoinUs />
    </>
  );
};

export default Home;
