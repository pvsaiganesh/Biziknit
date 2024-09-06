import React from "react";
import "./register.scss";
import InputComp from "./register-components/input-comp";

const Login = () => {
  const ele1 = { label: "Full Name", type: "text" };
  const ele2 = { label: "Name of Firm", type: "password" };

  return (
    <div id="register" className="d-flex flex-row justify-content-start">
      <div className="d-none d-md-block  bg-3">
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <div className="register-text text-center">
            <span
              fill="transparent"
              className=" register-text-width"
              stroke="true"
            >
              Register
            </span>
          </div>
        </div>
      </div>
      <div className=" p-5 d-flex flex-row justify-content-center align-items-center flex-grow-1">
        <div className="p-3 pt-2 pb-2 text-center text-md-start border rounded w-100  shadow">
          <p className="fs-3 m-0 ps-4">Register</p>
          <p className="fs-6 ps-4">
            Hey enter your details to create your account
          </p>
          <div className="text-start d-flex flex-column flex-md-row justify-content-around">
            <div className="d-flex flex-column">
              <InputComp {...ele1} />
              <InputComp {...ele2} />
            </div>
          </div>
          <div className="mt-3 text-center">
            <button type="submit" className="bg-button ps-3 pe-3 pt-2 pb-2">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
