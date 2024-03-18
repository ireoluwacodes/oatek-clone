import React from "react";
import OatekLogo from "../src/images/home/oateklogo.png";
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <nav className="leftNav">
          <div>
            <img
              src={OatekLogo}
              alt="Osamede does not have sense"
              className="oatekLogo"
            />
          </div>
          <div className="nav-list">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Product</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
        <nav className="rightNav">
          <p>
            <span style={{ margin: 10 }}>
              <FaPhone style={{ height: 15 }} /> +2347014509606
            </span>
            |
            <span style={{ margin: 10 }}>
              <MdMail style={{ height: 15 }} /> info@oatek.net
            </span>
          </p>
        </nav>
      </header>
    </>
  );
};

export default App;
