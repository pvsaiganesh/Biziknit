import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../register.scss";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const InputComp = ({ label, icon, button, type }) => {
  const [startDate, setStartDate] = useState(new Date());
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
        {(type === "text" || type === "file") && (
          <input
            type={type}
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4 button-addon2"
          />
        )}
        {icon}
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
      {type === "datepicker" && (
        <div class="input-group mb-5">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      )}
      {type === "textarea" && (
        <div class="input-group-sm mb-3">
          <textarea
            class="form-control"
            placeholder=""
            id="floatingTextarea"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default InputComp;
