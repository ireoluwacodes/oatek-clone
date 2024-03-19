import React from "react";
import "../App.css";

const SectionTwoTextBox = (props) => {
  const { text, separate } = props;
  const combinedClassName = `section-two-square-text ${separate}`;
  return (
    <div className="section-two-body-text-content">
      <div className="section-two-square">
        <div className="section-two-dot"></div>
      </div>
      <p className={combinedClassName}>{text}</p>
    </div>
  );
};

export default SectionTwoTextBox;
