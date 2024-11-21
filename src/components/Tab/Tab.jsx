import React, { useState } from "react";

import "./Tab.css";

import arrowImg from "../../assets/right.png";
import humanImg from "../../assets/human-white.png";
import updateImg from "../../assets/update.png";
import webImg from "../../assets/desktop.png";
import contestImg from "../../assets/keyboard.png";
import mailImg from "../../assets/mail-white.png";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=mail"
/>;

const Tab = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tab">
      <button onClick={toggleMenu} className={isOpen ? 'open' : ''}>
        <img src={arrowImg} alt="Toggle Menu" />
      </button>
      <br />
      <br />
      <div className={`contents ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <table>
            <tr>
              <td><img src={humanImg} alt="Human" /></td>
              <td>Introduction</td>
            </tr>
            <tr>
              <td><img src={updateImg} alt="Update" /></td>
              <td>Update</td>
            </tr>
            <tr>
              <td><img src={webImg} alt="Web" /></td>
              <td>Web</td>
            </tr>
            <tr>
              <td><img src={contestImg} alt="Contest" /></td>
              <td>Contest</td>
            </tr>
            <tr>
              <td><img src={mailImg} alt="Contact" /></td>
              <td>Contact</td>
            </tr>
          </table>
        )}
      </div>
    </div>
  );
};

export default Tab;