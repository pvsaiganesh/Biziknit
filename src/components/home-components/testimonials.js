import React from "react";
import "./testimonials.scss";
import TestimonialItem from "./testimonial-item";
import testiImg from "../../assets/testimonial-img-1.png";
import testiImg2 from "../../assets/testi-img2.png";
import testiImg3 from "../../assets/test-img-3.png";

const Testimonials = () => {
  return (
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark card-color p-5"
      data-bs-pause={false}
      data-bs-cycle={true}
      data-bs-ride={"carousel"}
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner p-5">
        <div class="carousel-item  active " data-bs-interval={2000}>
          <TestimonialItem
            review={`“We Loved Using Achievers to show case our business. It helped us
          connect with new clients and grow our customer base.”`}
            name={"--NAidu Noida"}
            testiImg={testiImg}
          />
        </div>
        <div class="carousel-item " data-bs-interval={2000}>
          <TestimonialItem
            review={`“Find Your Community: Once you join, you'll be categorized alongside other SMEs in your specific pin code.”`}
            name={"--Bbau"}
            testiImg={testiImg2}
          />
        </div>
        <div class="carousel-item" data-bs-interval={2000}>
          <TestimonialItem
            review={`“Streamlined Lead Generation: Leverage our state-of-the-art technology to receive quality leads without lifting a finger..”`}
            name={"--Njdjpss"}
            testiImg={testiImg3}
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Testimonials;
