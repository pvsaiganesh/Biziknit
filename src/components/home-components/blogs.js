import React from "react";
import blog1 from "../../assets/blogs-1.png";
import blog2 from "../../assets/blogs-2.png";
import blog3 from "../../assets/blogs-3.png";
import BlogItem from "./blog-item";
import "./blog.scss";

const Blogs = () => {
  return (
    <>
      <p class="text-center fw-bolder fs-3 org-color pt-3">Blogs</p>
      <div class="p-5 d-flex flex-column flex-md-row justify-content-around flex-wrap flex-sm-nowrap">
        <BlogItem
          image={blog1}
          title={"Business meeting"}
          description={
            "Apex offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding "
          }
        />
        <BlogItem
          image={blog2}
          title={"Business meeting"}
          description={
            "Apex offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding "
          }
        />
        <BlogItem
          image={blog3}
          title={"Business meeting"}
          description={
            "Apex offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding "
          }
        />
      </div>
    </>
  );
};

export default Blogs;
