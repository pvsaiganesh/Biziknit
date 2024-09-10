import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ image, title, description, blogId }) => {
  return (
    <div className="border-top-start-radius border-bottom-end-radius d-flex flex-column p-2">
      <div>
        <img src={image} alt="img" className="img-fluid w-100" />
      </div>
      <div className="p-3 border border-bottom-end-3">
        <p className="fs-5">{title}</p>
        <p className="fs-6">{description}</p>
        <div className="text-end">
          <Link to={`/blogs/${blogId}`}>
            <span className="fs-6 text-underline">View more</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
