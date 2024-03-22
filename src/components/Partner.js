import React from "react";
import "../App.css";
import MTN from "../images/home/mtn.jpeg";
import Airtel from "../images/home/newairtel.png";
import GLO from "../images/home/glo.png";
import nineMobile from "../images/home/9mobile1.png";

const Partner = () => {
  return (
    <div className="section-six-content">
      <div className="section-six-row">
        <div className="section-six-box">
        <img src={GLO} alt="GLO" />

        </div>
        <div className="section-six-box">
        <img src={MTN} alt="MTN" />
        </div>
        <div className="section-six-box">
        <img src={nineMobile} alt="9Mobile" />
        </div>
        <div className="section-six-box">
        <img src={Airtel} alt="Airtel" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
