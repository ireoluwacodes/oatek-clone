import React from "react";
import "../App.css";
import OurTeam from "../images/home/ourteam.png";

const SectionFour = () => {
  return (
    <>
      <div className="section-four">
        <main>
          <div className="section-four-img">
            <img src={OurTeam} alt="Got this far without Mede" />
          </div>
          <div className="section-four-text">
            <p className="section-four-text-header">MORE ON OUR SERVICES</p>
            <p className="section-four-text-sub gloock-font">
              For Operator And Business Owners
            </p>
            <p className="section-four-text-body">
              We Offer Operators And Businesses A Wide Range Of Services Ranging
              From FinTech, Mobile Money, USSD, SMS, Web And Voice-Messaging
              Services, CRBT And Much More.
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default SectionFour;
