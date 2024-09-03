import React from "react";
import "./register.scss";
import InputComp from "./register-components/input-comp";

const Register = () => {
  const ele1 = { label: "Full Name" };
  const ele2 = { label: "Name of Firm" };
  const ele3 = { label: "Business Category", dropdown: true };
  const ele4 = { label: "Full Name" };
  const ele5 = { label: "Full Name" };
  const ele6 = { label: "Full Name" };
  const ele7 = { label: "Full Name" };

  return (
    <div class="d-flex flex-row vh-100">
      <div class="d-flex flex-row justify-center align-items-center bg-3">
        <div class="register-text-width ">
          <div class="register-text">
            <text fill="transparent" stroke>
              Register
            </text>
          </div>
        </div>
      </div>
      <div class="p-5">
        <div class="p-3 pt-2 pb-2 text-start">
          <p class="fs-5 m-0">Register</p>
          <p class="fs-6">Hey enter your details to create your account</p>
          <form>
            <div class="d-flex flex-row jusitfy-center align-items-center">
              <div>
                <InputComp {...ele1} />
                <InputComp {...ele2} />
                <InputComp {...ele3} />
              </div>
              <div>
                <InputComp {...ele1} />
                <InputComp {...ele2} />
                <InputComp {...ele3} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
