import React from "react";
import img from "../../assets/img-2.png";
import "./ourvalues.scss";

const OurValues = () => {
  return (
    <>
      <div className="p-5 d-block d-md-none text-center">
        <img src={img} alt="img" className="img-fluid" />
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center p-5 bg-white">
        <div className="p-5 d-none d-md-block ">
          <img src={img} alt="img" />
        </div>
        <div>
          <div className="text-start">
            <p className="fs-3 headings fw-bolder">Our Values</p>

            <ul>
              <li className="p-2">
                <span className="fw-bolder fs-5">Balanced Success: </span>{" "}
                Prioritize all aspects of your well-being—physical, mental,
                social, and financial.
              </li>
              <li className="p-2">
                <span className="fw-bolder  fs-5">Meaningful Bonds: </span>
                Build deeper, fulfilling relationships within a supportive
                community.
              </li>
              <li className="p-2">
                <span className="fw-bolder fs-5"> Give and Grow: </span> Foster
                success through gratitude and a spirit of mutual support.
              </li>
              <li className="p-2">
                <span className="fw-bolder fs-5"> Family at the Heart: </span>
                Celebrate family involvement, recognizing its impact on personal
                and professional growth.
              </li>
              <li className="p-2">
                <span className="fw-bolder fs-5">
                  Purpose - Driven Impact:{" "}
                </span>
                Commit to societal contributions and embrace your role in making
                a difference.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurValues;
