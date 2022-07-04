import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../DropDown.css";

function DropDown() {


  return (
    <div className="square-box">
      <div className="menu-item">
        <select className="dropdown" style={{ backgroundColor: "blue" }}>
          <option>Select theme</option>
          <option value="1" style={{ backgroundColor: "white"}}>
            Black and White
          </option>
          <option value="2" style={{ backgroundColor: "white" }}>
            Red and White
          </option>
          <option value="3" style={{ backgroundColor: "white" }}>
            Red and Black
          </option>
          <option value="4" style={{ backgroundColor: "white" }}>
            Blue And Black
          </option>
        </select>
      </div>
    </div>

    //  <div className="dropdown">
    //   <button
    //     type="button"
    //     className="btn btn-primary dropdown-toggle"
    //     id="dropdownMenu2"
    //     data-toggle="dropdown"
    //     aria-haspopup="true"
    //     aria-expanded="false"
    //   >
    //     Select them
    //   </button>
    //   <div class="dropdown-menu">
    //     <button class="dropdown-item" type="button">
    //       Action
    //     </button>
    //     <button class="dropdown-item" type="button">
    //       Another action
    //     </button>
    //     <button class="dropdown-item" type="button">
    //       Something else here
    //     </button>
    //   </div>
    // </div>
  );
}

export default DropDown;
