import React, { useState } from 'react'
import DropDown from "./DropDown";
import image from "../download (2).jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "../RedAndBlack.css"

function RedAndBlack() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <div>{DropDown}</div>

          <div className="card">
            <div className="card-body">
              <img className="card-img" src={image} alt="" />
              <h5>Demo Theme</h5>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="btn btn-primary" type="button">
                Go somewhere
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedAndBlack