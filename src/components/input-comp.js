import React from "react";
import "./home.scss";
const InputComp = ({ placeholder, dropdown }) => {
  return (
    <>
      {dropdown ? (
        <div class="dropdown p-3">
          <button
            class="btn btn-light btn-sm  max-wd-input text-start dropdown-toggle form-control "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Want to Join Us
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#Home">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#Home">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#Home">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div class="input-group-sm p-3">
          <input type="input" class="form-control" placeholder={placeholder} />
        </div>
      )}
    </>
  );
};

export default InputComp;
