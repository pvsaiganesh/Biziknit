import React from "react";
import "./register.scss";
import InputComp from "./register-components/input-comp";

const Login = () => {
  const ele1 = { label: "Phone Number", type: "text" };
  const ele2 = { label: "Password", type: "password" };

  return (
    <div id="login" className="d-flex flex-row justify-content-start vh-100">
      <div className="d-none d-md-block  bg-3">
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <div className="register-text text-center">
            <span
              fill="transparent"
              className=" register-text-width"
              stroke="true"
            >
              Login
            </span>
          </div>
        </div>
      </div>
      <div className=" p-5 d-flex flex-row justify-content-center align-items-center flex-grow-1">
        <div className="p-5 m-5  text-center text-md-start border rounded w-30  shadow">
          <p className="fs-3 m-0 ">Login</p>
          <p className="fs-6 ">Enter your details</p>
          <div className="text-start d-flex flex-column flex-md-row justify-content-start">
            <div className="d-flex flex-column">
              <InputComp {...ele1} />
              <InputComp {...ele2} />
            </div>
          </div>
          <button
            type="submit"
            className="bg-button ps-3 pe-3 pt-2 pb-2 w-100 mt-3"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
