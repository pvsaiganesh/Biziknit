import React from "react";
import "../home.scss";
const InputComp = ({ placeholder, dropdown }) => {
  return (
    <>
      {dropdown ? (
        <div class="dropdown p-3">
          <div class="btn-group ">
            <button class="btn btn-light btn-sm" type="button">
              Small split button
            </button>
            <button
              type="button"
              class="btn btn-sm btn-light dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="visually-hidden">Toggle Dropdown</span>
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
