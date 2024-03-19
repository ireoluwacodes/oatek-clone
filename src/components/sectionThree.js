import React from "react";
import "../App.css";
import SectionThreeMultiServiceBox from "./sectionThreeMultiServiceBox";

const SectionThree = () => {
  return (
    <>
      <div className="section-three">
        <main>
          <div className="section-three-text">
            <p className="section-three-text-header">OUR SERVICES</p>
            <p className="section-three-text-sub">
              We Are A Reliable Service Provider Of Top Notch Information
              Technology
            </p>
            <p className="section-three-text-body">
              OATEK offers operators and businesses a wide range of services
              ranging from FinTech, Mobile Money, USSD, SMS, Web and
              Voice-messaging services, CRBT and much more.
            </p>
          </div>
          <div className="section-three-body">
            <SectionThreeMultiServiceBox
              serviceOne="Payment Solution"
              serviceTwo="App development(Mobile,Web & Desktop)"
              serviceThree="eCommerce"
              serviceFour="Agency Banking Solution"
              serviceFive="Airtime Solution"
              serviceSix="Lottery/gaming Based Solution"
              myColor="multi-color-blue"
            />

            <SectionThreeMultiServiceBox
              serviceOne=" Short Message Service(SMS)"
              serviceTwo="USSD"
              serviceThree=" Voice messaging"
              serviceFour=" Caller Ring Back Tone"
              serviceFive=" Caller Feel"
              myColor="multi-color-black"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default SectionThree;
