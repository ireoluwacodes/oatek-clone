import React from "react";
import "../App.css";
import Taj from "../images/home/tajbanklogo.png";
import Broadbase from "../images/home/broadbase.png";
import Bat from "../images/home/newbat.png";
import Shago from "../images/home/shago.png";
import DPR from "../images/home/dpr.jpeg";

const Lily = "LilyPay";
const Ringo = "Ringo";
const Allensar = "Allennsar Infinity";

const Client = () => {
  return (
    <div className="section-six-content">
      <div className="section-six-row">
        <div className="section-six-box">
          <img src={Taj} alt="Taj Bank" />
        </div>
        <div className="section-six-box">
          <p>{Lily}</p>
        </div>
        <div className="section-six-box">
          <img src={Broadbase} alt="Broadbase" />
        </div>
        <div className="section-six-box">
          <img src={Bat} alt="Bat" />
        </div>
      </div>
      <div className="section-six-row">
        <div className="section-six-box">
          <img src={Shago} alt="Shago" />
        </div>
        <div className="section-six-box">
          <p>{Ringo}</p>
        </div>
        <div className="section-six-box">
          <img src={DPR} alt="DPR" />
        </div>
        <div className="section-six-box">
          <p>{Allensar}</p>
        </div>
      </div>
    </div>
  );
};

export default Client;
