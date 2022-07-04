import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../download.jpg";
import "../DefaultTheme.css";
import DropDown from "./DropDown";

function DefaultTheme() {
  return (
    <div className="row">
      <div className="col">
        <div>{DropDown}</div>

        <div className="card">
          <div className="card-body">
            <img className="card-img" src={images} alt="" />
            <h5>Demo Theme</h5>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary" type="button">
              Go somewhere
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultTheme;
