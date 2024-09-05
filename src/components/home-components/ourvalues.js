import React from "react";
import img from "../../assets/img-2.png";
import "./ourvalues.scss";

const OurValues = () => {
  return (
    <>
      <div class="p-5 d-block d-md-none">
        <img src={img} alt="img" class="img-fluid" />
      </div>
      <div class="d-flex flex-row justify-content-between align-items-center p-5 bg-white">
        <div>
          <div class="text-start">
            <p class="fs-4 headings fw-bolder">Our Values</p>
            <ul>
              <li>
                <span class="fw-bolder">Holistic well-being-</span> Biziknit
                gives equal importance to your physical, mental, social and
                financial well being
              </li>
              <li>
                <span class="fw-bolder">Relationships, Not Contacts-</span>
                Biziknit Believes in the power of healthy and fulfilling
                relationships and provides a wholesome community to its members
              </li>
              <li>
                <span class="fw-bolder">Gratitude and reciprocity- </span>{" "}
                Growth comes with a spirit of gratitude and a willingness to
                extend a helping hand.
              </li>
              <li>
                <span class="fw-bolder">Family involvement-</span> We believe
                that family pays an important role in one’s life and seek to
                increase family involvement at every step
              </li>
              <li>
                <span class="fw-bolder">Contribution to Society-</span>{" "}
                achievers regularly contributes to social causes and we strongly
                believe in the social obligation of individuals.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurValues;
