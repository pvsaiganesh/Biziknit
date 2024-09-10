import React from "react";
import { Link } from "react-router-dom";
import "./blog.scss";

const BlogItem = ({ image, title, description, blogId }) => {
  return (
    <div className="border-styles d-flex flex-column m-3 text-start shadow">
      <div className=" h-30">
        <img src={image} alt="img" className="img-fluid w-100" />
      </div>
      <div className="d-flex flex-column ">
        <div className="p-3 h-90">
          <p className="fs-5 fw-bold">{title}</p>
          <p className="fs-6">{description}</p>
          <div className="text-end">
            <Link to={`/blogs/${blogId}`} className="text-underline text-dark">
              <span className="fs-6 ">View more</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
