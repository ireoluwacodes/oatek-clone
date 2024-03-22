import React from "react";
import "../App.css";
import OatekLogo from "../images/home/oateklogo.png";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { LiaCopyright } from "react-icons/lia";
import { FaHouse } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IconContext } from "react-icons";

// function WhiteTwitterIcon() {
//   return (
//     <IconContext.Provider
//       value={{ color: '#fff', size: '30px' }}
//     >
//       <div>
//         <BsTwitterX />
//       </div>
//     </IconContext.Provider>
//   );
// }

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-section-top">
          <p>Connect with us on social networks:</p>
          <div className="footer-section-top-icons">
            <BsTwitterX /> <FaLinkedinIn />
          </div>
        </div>
        <div className="footer-section-main">
          <nav className="footer-nav">
            <ul>
              <li>
                <img src={OatekLogo} alt="OatekLogo" className="oatekLogo" />
                <p> OATEK CONCEPTS AND TECHNOLOGIES LTD</p>
              </li>
              <li>
                Software technology provider with many years of experience in a
                wide range of software application development.
              </li>
            </ul>
          </nav>
          <nav className="footer-nav">
            <p>LINKS</p>
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICE</li>
              <li>CONTACT</li>
            </ul>
          </nav>
          <nav className="footer-nav">
            <p>OUR PRODUCTS</p>
            <ul>
              <li>HORDECALL</li>
              <li>PINSPAY</li>
            </ul>
          </nav>
          <nav className="footer-nav">
            <ul>
              <li>
                <p>OUR VISION</p>
                <p>
                  To be the first choice for optimizing and achieving
                  operational excellence through IT enabled services.
                </p>
              </li>
              <li>
                <p>OUR MISSION</p>
                <p>
                  Our mission is to deliver optimal solutions with top quality
                  and best services.
                </p>
              </li>
            </ul>
          </nav>
          <nav className="footer-nav">
            <p>CONTACT</p>
            <ul>
              <li>
                <FaHouse /> No 2, Sanni Tola Sonoiki Close,Ikeja GRA,Lagos
                State.
              </li>
              <li>
                {" "}
                <FaPhone style={{ height: 15 }} /> +2347014509606
              </li>
              <li>
                {" "}
                <MdMail style={{ height: 15 }} /> info@oatek.net
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-section-sub">
          <p>
            <LiaCopyright /> 2024 - Oatek.net. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
