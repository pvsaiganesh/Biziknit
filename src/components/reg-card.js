import React from "react";
import "./reg-card.scss";
import InputComp from "./input-comp";

const RegCard = () => {
  return (
    <div class=" bg-2 p-3 text-white d-flex flex-column justify-content-center align-items-center">
      <p class="fs-5 mb-0">
        Join us and be a part of the potential business group
      </p>
      <p class="fs-6">Helping you in finding potential prospects</p>
      <form>
        <div class="d-flex flex-column">
          <div class="d-flex flex-row justify-between">
            <InputComp placeholder={"Name"} />
            <InputComp placeholder={"Phone number"} />
            <InputComp placeholder={"Business name"} />
          </div>
          <div class="d-flex flex-row justify-between">
            <InputComp placeholder={"Business type"} />
            <InputComp placeholder={"Pin code"} />
            <InputComp placeholder={"Want to Join Us"} dropdown={true} />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-outline-light">
              Register Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegCard;
