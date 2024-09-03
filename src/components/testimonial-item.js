import React from "react";

import "./testimonials.scss";

const TestimonialItem = ({ review, name, testiImg, slideOption }) => {
  return (
    <div
      class="d-flex flex-row justify-content-center p-5 text-start "
      data-bs-slide={slideOption}
    >
      <div class="pr-5">
        <p class="fs-5 title">Business Testimonial</p>
        <p class="fs-6">{review}</p>
        <p class="fs-6">{name}</p>
      </div>
      <div class="pl-5">
        <img src={testiImg} alt="img" />
      </div>
    </div>
  );
};

export default TestimonialItem;
