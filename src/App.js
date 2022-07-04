import React, { useState } from "react";
import "./App.css";
import "./BlackAndWhite.css";
import "./BlueAndBlack.css";
import "./DefaultTheme.css";
import "./RedAndBlack.css";
import "./RedAndWhite.css";
import "./DropDown.css";
//import BlueAndGreen from './Components/BlueAndGreen';
//import BlackAndWhite from './Components/BlackAndWhite';
//import DefaultTheme from './Components/DefaultTheme';
//import DefaultTheme from "./Components/DefaultTheme";
//import BlackAndWhite from './Components/DefaultTheme';
//import DropDown from "./Components/DropDown";
//import RedAndBlack from './Components/RedAndBlack';
//import RedAndWhite from './Components/RedAndWhite';
import blackAndWhiteImage from "./robot.jpg";
import defaultImage from "./download.jpg";
import blueAndGreenImage from "./download (3).jpg";
import redAndBlackImage from "./download (2).jpg";
import redAndWhiteImage from "./xyz.jpg";

function App() {
  const [hasMounted, setHasMounted] = useState(false);
  const [defaultTheme, setDefaultTheme] = useState(false);
  const [blackAndWhite, setBlackAndWhite] = useState(false);
  const [redAndWhite, setRedAndWhite] = useState(false);
  const [redAndBlack, setRedAndBlack] = useState(false);
  const [blueAndGreen, setBlueAndGreen] = useState(false);

  React.useEffect(() => {
    if (hasMounted) {
       setDefaultTheme(true);
    }
  }, [hasMounted]);
  React.useEffect(() => {
    console.log("MOUNT")
    setHasMounted(true);
  }, []);

  const handleChange = (e) => {
    if (e === "1") {
      setDefaultTheme(false);
      setBlackAndWhite(true);
      setRedAndWhite(false);
      setRedAndBlack(false);
      setBlueAndGreen(false);
    }
    if (e === "2") {
      setDefaultTheme(false);
      setBlackAndWhite(false);
      setRedAndWhite(true);
      setRedAndBlack(false);
      setBlueAndGreen(false);
    }
    if (e === "3") {
      setDefaultTheme(false);
      setBlackAndWhite(false);
      setRedAndWhite(false);
      setRedAndBlack(true);
      setBlueAndGreen(false);
    }
    if (e === "4") {
      setDefaultTheme(false);
      setBlackAndWhite(false);
      setRedAndWhite(false);
      setRedAndBlack(false);
      setBlueAndGreen(true);
    }
  };
  return (
    <div className="App">
      <div className="square-box">
        <div className="menu-item">
          <select
            className="dropdown"
            onChange={(e) => handleChange(e.target.value)}
            style={{ backgroundColor: "blue" }}
          >
            <option>Select theme</option>
            <option value={"1"} style={{ backgroundColor: "white" }}>
              Black and White
            </option>
            <option value="2" style={{ backgroundColor: "white" }}>
              Yellow and White
            </option>
            <option value="3" style={{ backgroundColor: "white" }}>
              Red and White
            </option>
            <option value="4" style={{ backgroundColor: "white" }}>
              Blue And Black
            </option>
          </select>
        </div>
      </div>
{defaultTheme &&
      <div className="row">
        <div className="col">
          

          <div className="card">
            <div className="card-body">
              <img className="card-img" src={defaultImage} alt="" />
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
}

      {redAndBlack && (
        <div className="row">
          <div className="col">
           

            <div className="card">
              <div className="card-body">
                <img className="card-img" src={redAndBlackImage} alt="" />
                <h5>Demo Theme</h5>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-danger" type="button">
                  Go somewhere
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {blackAndWhite && (
        <div className="container">
          <div className="row">
            <div className="col">
            

              <div className="card">
                <div className="card-body">
                  <img className="card-img" src={blackAndWhiteImage} alt="" />
                  <h5>Demo Theme</h5>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-primary" type="button">
                    Go somewhere
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {blueAndGreen && (
        <div>
          <div className="container">
            <div className="row">
              <div className="col">
             

                <div className="card">
                  <div className="card-body">
                    <img className="card-img" src={blueAndGreenImage} alt="" />
                    <h5>Demo Theme</h5>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button className="btn btn-primary" type="button">
                      Go somewhere
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {redAndWhite && (
        <div className="row">
          <div className="col">
           

            <div className="card">
              <div className="card-body">
                <img className="card-img" src={redAndWhiteImage} alt="" />
                <h5>Demo Theme</h5>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-danger" type="button">
                  Go somewhere
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
