import React from "react";
import "../register.scss";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const InputComp = ({ label, icon, button, type, func }) => {
  return (
    <div class=" p-1 pb-1 ps-1 pe-1 w-100">
      <div class="input-group-sm">
        <label for="basic-url" class="form-label">
          {label}
        </label>

        {type === "select" && (
          <select class="form-select" id="inputGroupSelect01">
            <option selected></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        )}
        {(type === "text" || type === "file" || type === "date") && (
          <input
            type={type}
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4 button-addon2"
          />
        )}
        {type === "number" && (
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              placeholder="1000"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn  bg-button text-white"
              type="button "
              id="button-addon2"
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
      {type === "textarea" && (
        <div class="input-group-sm mb-3">
          <textarea
            class="form-control"
            placeholder=""
            id="floatingTextarea"
          ></textarea>
        </div>
      )}
      {type === "location" && (
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn  bg-button text-white"
            onclick={func}
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
