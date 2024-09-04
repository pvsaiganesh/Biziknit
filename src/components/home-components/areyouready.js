import React from "react";
import "./reg-card.scss";
// import InputComp from "./input-comp";

const ReadyCard = () => {
  return (
    <div class=" bg-6 p-5 text-white d-flex flex-column justify-content-center align-items-center">
      <div class="d-flex flex-column justify-content-between text-center">
        <div class="text-center">
          <p class="fs-5 mb-0">
            Join us and be a part of the potential business group
          </p>
          <p class="fs-6">Helping you in finding potential prospects</p>
        </div>
        <div>
          <button type="submit" class="btn btn-outline-light">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadyCard;
