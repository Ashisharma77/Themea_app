import React from 'react'
import DropDown from "./DropDown";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../xyz.jpg"
import "../RedAndWhite.css"

function RedAndWhite() {
  return (
    <div className="row">
      <div className="col">
        <div>{DropDown}</div>

        <div className="card">
          <div className="card-body">
            <img className="card-img" src={image} alt="" />
            <h5>Demo Theme</h5>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-danger" type="button">
              Go somewhere
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedAndWhite