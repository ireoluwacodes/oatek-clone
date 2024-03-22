import React from "react";
import "../App.css";
import OatekSite from "../images/home/oatek_site3.png";

const SectionFive = () => {
  return (
    <>
      <div className="section-five">
        <main>
          <div className="section-five-text">
            <div className="section-five-text-header">MORE ON OUR SERVICES</div>
            <div className="section-five-text-sub gloock-font">
              We Provide Telecommunication Related As Value-Added
              Services(V.A.S)
            </div>
            <div className="section-five-text-body">
              We Provide A Smooth-Running, Safe And Secure Process For
              Information And Communication Through Technology Thereby
              Maximizing Profit.
            </div>
          </div>
          <div className="section-five-img">
            <img src={OatekSite} alt="Osamede might have sense" />
          </div>
        </main>
      </div>
    </>
  );
};

export default SectionFive;
