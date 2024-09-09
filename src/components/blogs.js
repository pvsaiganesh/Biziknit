import React from "react";
import Blogs from "./home-components/blogs";
import { Splash } from "../assets/splash";
import "./blogs.scss";
import Footer from "./footer";

const BlogsPage = () => {
  return (
    <div>
      <div className="bg-8 d-flex flex-column justify-content-center align-items-center">
        <div style={{ position: "relative" }} className="svg-props">
          <Splash />
        </div>
        <div style={{ position: "absolute" }} className="heading-text">
          Blogs
        </div>
      </div>
      <div>
        <Blogs />
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;
