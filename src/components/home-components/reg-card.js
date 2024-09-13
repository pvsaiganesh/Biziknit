import React from "react";
import "./reg-card.scss";
import { Link } from "react-router-dom";
import modalImg from "../../assets/modal-img.svg";

const RegCard = () => {
  return (
    <div className="bg-4 ">
      <div className="p-5 text-white d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column flex-md-row justify-content-between w-100 text-center text-md-start">
          <div>
            <p className="fs-5 mb-0">
              Join us and be a part of the potential business group
            </p>
            <p className="fs-6">Helping you in finding potential prospects</p>
          </div>
          <div>
            <Link to={"/register"}>
              <button type="submit" className="btn btn-outline-light">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <p
        data-bs-toggle="modal"
        data-bs-target="#registerModal"
        className="fs-6 text-white text-decoration-underline text-end pe-5 pb-2 register-link"
      >
        Why you should register?
      </p>

      <div
        className="modal fade"
        id="registerModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-3  bg">
            <div className="modal-body">
              <img src={modalImg} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegCard;
