import React from "react";

const BlogItem = ({ image, title, description }) => {
  return (
    <div className="border-top-start-radius border-bottom-end-radius d-flex flex-column p-2">
      <div>
        <img src={image} alt="img" className="img-fluid w-100" />
      </div>
      <div className="p-3 border border-bottom-end-3">
        <p className="fs-5">{title}</p>
        <p className="fs-6">{description}</p>
        <div className="text-end">
          <span className="fs-6 text-underline">View more</span>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
