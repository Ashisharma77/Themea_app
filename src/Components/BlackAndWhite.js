import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../robot.jpg"
import DropDown from "./DropDown";
import "../BlackAndWhite.css";


function BlackAndWhite() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <div>{DropDown}</div>

          <div className="cards">
            <div className="card-1">
              <img className="card-img" src={image} alt="" />
              <h5 className="heading-1">Demo Theme</h5>
              <p className="para-1">
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

export default BlackAndWhite