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
import Footer from "./footer.js";

import "./home.scss";
import Navbar from "./home-components/navbar.js";

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home" className="hero">
        <div className="bg-2 p-5 pt-0 pb-0 ps-5 pe-5  gap-0 container-fluid">
          <div className="row  d-flex flex-row jusity-content-center aling-items-center">
            <div className="text-light text-center text-md-start col-12 col-md-8 align-self-center">
              <div className=" pe-0 pe-md-5">
                <p className="fs-1 fw-bold">
                  Connect, Collaborate, and Conquer Market with Biziknit
                </p>
                <p className="fs-5">
                  Join a thriving community of small business owners and elevate
                  your success with exclusive referrals and leads tailored just
                  for you!
                </p>
                <p>
                  <button type="button" className="btn btn-outline-light">
                    Join Now
                  </button>
                </p>
              </div>
            </div>
            <div className=" d-none d-md-block  col-4 text-start">
              <img src={worker} alt="worker" className="img-fluid worker" />
            </div>
            <div className="align-self-center d-none d-md-block  rounded-3 rounded-bottom-0 infos-container  p-4 ps-5 pe-5 mb-0 w-100">
              <div className="d-flex flex-row justify-content-around align-items-center">
                <SmallInfoCard number={"10+"} title={"Businesses"} />
                <SmallInfoCard number={"20+"} title={"Years of Experience"} />
                <SmallInfoCard number={"10+"} title={"Awards Received"} />
                <SmallInfoCard number={"500+"} title={"Satisfied Clients"} />
              </div>
            </div>
          </div>
        </div>
        <div className="align-self-center d-md-none  bg-white   p-4 ps-5 pe-5 mb-0 w-100">
          <div className="d-flex flex-row justify-content-around align-items-center">
            <SmallInfoCard
              number={"10+"}
              title={"Businesses"}
              alignment={"flex-row"}
            />
            <SmallInfoCard
              number={"20+"}
              title={"Years of Experience"}
              alignment={"flex-row"}
            />
          </div>
          <div className="d-flex flex-row justify-content-around align-items-center">
            <SmallInfoCard
              number={"10+"}
              title={"Awards Received"}
              alignment={"flex-row"}
            />
            <SmallInfoCard
              number={"500+"}
              title={"Satisfied Clients"}
              alignment={"flex-row"}
            />
          </div>
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
      </div>
    </>
  );
};

export default Home;
