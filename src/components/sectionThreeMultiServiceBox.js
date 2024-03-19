import React from "react";
import MySquare from "./MySquare";
import "../App.css";

const SectionThreeMultiServiceBox = (props) => {
  const {
    serviceOne,
    serviceTwo,
    serviceThree,
    serviceFour,
    serviceFive,
    serviceSix,
    myColor
  } = props;

  const myServiceArray = [
    serviceOne,
    serviceTwo,
    serviceThree,
    serviceFour,
    serviceFive,
    serviceSix,
  ];
const combinedClassName = `section-three-body-multi ${myColor}`
  if (myServiceArray[5] === "" || (myServiceArray[5] == null) | undefined) {
    myServiceArray.pop();
  }
  return (
    <div className={combinedClassName}>
      {myServiceArray.map((service) => (
        <p>
          <MySquare />
          {service}
        </p>
      ))}
    </div>
  );
};

export default SectionThreeMultiServiceBox;
