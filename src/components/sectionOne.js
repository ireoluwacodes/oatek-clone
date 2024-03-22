import React from "react";
import "../App.css";
import Oatek from "../images/home/oatek.png";

const SectionOne = () => {
  return (
    <>
      <div className="section-one">
       <main>
       <div className="section-one-text">
          <p className="section-one-main-text gloock-font">IT Automation At It's Peak</p>
          <p className="section-one-sub-text">
            Software technology provider with many years of experience in a wide
            range of software application development and Telecommunication
            related services such as value-added services.
          </p>
          <button>Read More</button>
        </div>
        <div className="section-one-img">
          <img src={Oatek} alt="Osamede din have sense" />
        </div>
       </main>
      </div>
    </>
  );
};

export default SectionOne;
