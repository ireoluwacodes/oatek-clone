import React, { useState } from "react";
import "../App.css";
import Client from "./Client";
import Partner from "./Partner";

const SectionSix = () => {
  const [html, setHtml] = useState("client");
  const setToClient = () => {
    setHtml("client");
  };
  const setToPartner = () => {
    setHtml("partner");
  };
  return (
    <>
      <div className="section-six">
        <main>
          <p className="section-six-header">OUR CLIENTS AND PARTNERS</p>
          <div className="section-six-cp-nav">
            <p
              onClick={setToClient}
              className={html === "client" ? "cp-nav-active" : "cp-nav-inactive"}
            >
              CLIENTS
            </p>
            <p onClick={setToPartner} className={html === "partner" ? "cp-nav-active" : "cp-nav-inactive"}>PARTNERS</p>
          </div>
          <div className="section-six-content">
            {html === "client" ? <Client /> : <Partner />}
          </div>
        </main>
      </div>
    </>
  );
};

export default SectionSix;
