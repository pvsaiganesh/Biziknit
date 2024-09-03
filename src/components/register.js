import React from "react";
import "./register.scss";
import InputComp from "./register-components/input-comp";

const Register = () => {
  const ele1 = { label: "Full Name" };
  const ele2 = { label: "Name of Firm" };
  const ele3 = { label: "Business Category", dropdown: true };
  const ele4 = { label: "Phone Number" };
  const ele5 = { label: "Address" };
  const ele6 = { label: "Landmark" };
  const ele7 = { label: "Pin code" };
  const ele8 = { label: "Location Map", icon: <i class="bi bi-geo-alt" /> };

  return (
    <div id="register" class="d-flex flex-row">
      <div class="d-flex flex-row justify-content-center align-items-center bg-3">
        <div class="register-text-width ">
          <div class="register-text">
            <text fill="transparent" stroke>
              Register
            </text>
          </div>
        </div>
      </div>
      <div class="p-5 d-flex flex-row justify-content-center align-items-center">
        <div class="p-3 pt-2 pb-2 text-start border rounded ">
          <p class="fs-5 m-0">Register</p>
          <p class="fs-6">Hey enter your details to create your account</p>
          <div class="text-start d-flex flex-row justify-content-between align-items-center">
            <div class="d-flex flex-column">
              <InputComp {...ele1} />
              <InputComp {...ele2} />
              <InputComp {...ele3} />
              <InputComp {...ele8} />
            </div>
            <div class="d-flex flex-column">
              <InputComp {...ele4} />
              <InputComp {...ele5} />
              <InputComp {...ele6} />
              <InputComp {...ele7} />
            </div>
          </div>
          <div class="mt-3">
            <button type="submit" class="bg-button p-3 pt-1 pb-1">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
