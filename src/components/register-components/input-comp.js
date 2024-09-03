import React from "react";

const InputComp = ({ label, icon, button, dropdown, file }) => {
  return (
    <div class=" p-1">
      <div class="input-group-sm">
        <label for="basic-url" class="form-label">
          {label}
        </label>
        {dropdown ? (
          <div class="input-group">
            <input
              type={file ? file : "text"}
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4 button-addon2"
            />
            <button
              type="button"
              class="btn btn-white border dropdown-toggle dropdown-toggle-split"
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
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#Home">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <input
            type={file ? file : "text"}
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4 button-addon2"
          />
        )}
        {icon}
        {button && (
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            button
          </button>
        )}
      </div>
    </div>
  );
};

export default InputComp;
