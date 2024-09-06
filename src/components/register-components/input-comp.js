import React from "react";
import "../register.scss";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const InputComp = ({ label, type, func }) => {
  return (
    <div className=" p-1 pb-1 ps-1 pe-1 w-100">
      <div className="input-group-sm">
        <label htmlFor="basic-url" className="form-label">
          {label}
        </label>

        {type === "select" && (
          <select className="form-select" id="inputGroupSelect01">
            <option defaultValue></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        )}
        {(type === "text" ||
          type === "file" ||
          type === "date" ||
          type === "password") && (
          <input
            type={type}
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4 button-addon2"
          />
        )}
        {type === "number" && (
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="1000"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn  bg-button text-white"
              type="button "
              id="button-addon2"
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
      {type === "textarea" && (
        <div className="input-group-sm mb-3">
          <textarea
            className="form-control"
            placeholder=""
            id="floatingTextarea"
          ></textarea>
        </div>
      )}
      {type === "location" && (
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn  bg-button text-white"
            onClick={func}
            type="button "
            id="button-addon2"
          >
            Get Location
          </button>
        </div>
      )}
    </div>
  );
};

export default InputComp;
