import React from "react";

import worker from "../assets/worker.png";
import SmallInfoCard from "./home-components/small-info-card.js";
import RegCard from "./home-components/reg-card.js";
import WhatIsBiziknit from "./home-components/whatIsbiziknit.js";
import OurValues from "./home-components/ourvalues.js";
import Testimonials from "./home-components/testimonials.js";
import WhyJoin from "./home-components/whyjoin.js";
import JoinUs from "./home-components/joinus.js";
import Blogs from "./home-components/blogs.js";
import ReadyCard from "./home-components/areyouready.js";
import Footer from "./home-components/footer.js";

import "./home.scss";

const Home = () => {
  return (
    <>
      <div id="home" className="bg-2 p-5 pb-0 container-fluid">
        <div className="text-light text-center text-md-start d-flex flex-row justify-content-space-around align-items-center ">
          <div>
            <p className="fs-3">
              Connect, Collaborate, and Conquer Market with Biziknit
            </p>
            <p className="fs-5">
              Join a thriving community of small business owners and elevate
              your success with exclusive referrals and leads tailored just for
              you!
            </p>
            <button type="button" className="btn btn-outline-light">
              Join Now
            </button>
          </div>
          <div className="d-none d-md-block">
            <img src={worker} alt="worker" />
          </div>
        </div>
        <div className="d-none d-md-block rounded-3 rounded-bottom-0 infos-container  ml-5 mr-5 p-3 ">
          <div className="d-flex flex-row justify-content-around align-items-center">
            <SmallInfoCard number={"10+"} title={"Businesses"} />
            <SmallInfoCard number={"20+"} title={"Years of Experience"} />
            <SmallInfoCard number={"10+"} title={"Awards Received"} />
            <SmallInfoCard number={"500+"} title={"Satisfied Clients"} />
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-evenly align-items-center flex-wrap d-md-none bg-white pt-3 pb-3">
        <SmallInfoCard
          number={"10+"}
          title={"Businesses"}
          alignment="flex-row align-items-center"
        />
        <SmallInfoCard
          number={"20+"}
          title={"Years of Experience"}
          alignment="flex-row align-items-center"
        />
        <SmallInfoCard
          number={"10+"}
          title={"Awards Received"}
          alignment="flex-row align-items-center"
        />
        <SmallInfoCard
          number={"500+"}
          title={"Satisfied Clients"}
          alignment="flex-row align-items-center"
        />
      </div>
      <RegCard />
      <WhatIsBiziknit />
      <OurValues />
      <Testimonials />
      <WhyJoin />
      <JoinUs />
      <Blogs />
      <ReadyCard />
      <Footer />
    </>
  );
};

export default Home;
