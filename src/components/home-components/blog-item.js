import React from "react";

const BlogItem = ({ image, title, description }) => {
  return (
    <div class="border-top-start-radius border-bottom-end-radius d-flex flex-column p-2">
      <div>
        <img src={image} alt="img" class="img-fluid w-100" />
      </div>
      <div class="p-3 border border-bottom-end-3">
        <p class="fs-5">{title}</p>
        <p class="fs-6">{description}</p>
        <div class="text-end">
          <span class="fs-6 text-underline">View more</span>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
