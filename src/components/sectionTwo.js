import React from "react";
import "../App.css";
import SectionTwoTextBox from "./sectionTwoTextBox";

const SectionTwo = () => {
  return (
    <>
      <div className="section-two">
        <main>
          <p className="section-two-main-text">
            We Provide Innovative, Fast, Reliable, Secure And Profitable
            Information Technology Solutions.
          </p>
          <div className="section-two-body-text">
            <SectionTwoTextBox
              text="We generate a flood of business and enterprise solutions with
                the power of IT automation."
            />
            <SectionTwoTextBox
              text="  Our client are VAS Companies, telecommunication and all
                industries that require IT automation."
              separate="mid-text"
            />
            <SectionTwoTextBox
              text="   24/7 customer support mechanism. Our support team are always at
                your disposal."
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default SectionTwo;
