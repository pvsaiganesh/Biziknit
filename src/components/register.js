import React from "react";
import "./register.scss";
import InputComp from "./register-components/input-comp";

const Register = () => {
  const ele1 = { label: "Full Name", type: "text" };
  const ele2 = { label: "Name of Firm", type: "text" };
  const ele3 = { label: "Business Category", type: "select" };
  const ele4 = { label: "Phone Number", type: "text" };
  const ele5 = { label: "Address", type: "text" };
  const ele6 = { label: "Landmark", type: "text" };
  const ele7 = { label: "Pin code", type: "text" };
  const ele8 = {
    label: "Location Map",
    icon: <i class="bi bi-geo-alt" />,
    type: "text",
  };
  const ele10 = {
    label: "Joining Date",
    icon: <i class="bi bi-geo-alt" />,
    type: "datepicker",
  };
  const ele11 = {
    label: "Amount",
    defaultValue: 1000,
    type: "number",
    button: true,
  };
  const ele12 = {
    label: "Profile Pic",
    icon: <i class="bi bi-geo-alt" />,
    type: "file",
  };
  const ele13 = {
    label: "Description",
    icon: <i class="bi bi-geo-alt" />,
    type: "textarea",
  };

  return (
    <div id="register" class="d-flex flex-row justify-content-start">
      <div class="d-flex flex-row justify-content-center align-items-center bg-3 vw-30">
        <div class="register-text">
          <text fill="transparent" class="fs-1 register-text-width " stroke>
            Register
          </text>
        </div>
      </div>
      <div class=" pt-3 pb-3 ps-5 pe-5 d-flex flex-row justify-content-center align-items-center flex-grow-1">
        <div class="p-3 pt-2 pb-2 text-start border rounded w-100">
          <p class="fs-5 m-0">Register</p>
          <p class="fs-6">Hey enter your details to create your account</p>
          <div class="text-start d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <InputComp {...ele1} />
              <InputComp {...ele2} />
              <InputComp {...ele3} />
              <InputComp {...ele8} />
              <InputComp {...ele10} />
              <InputComp {...ele12} />
            </div>
            <div class="d-flex flex-column">
              <InputComp {...ele4} />
              <InputComp {...ele5} />
              <InputComp {...ele6} />
              <InputComp {...ele7} />
              <InputComp {...ele11} />
              <InputComp {...ele13} />
            </div>
          </div>
          <div class="mt-3 text-center">
            <button type="submit" class="bg-button ps-3 pe-3 pt-2 pb-2">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
