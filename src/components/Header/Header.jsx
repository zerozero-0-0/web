import React from "react";

// css
import "./Header.css";

// img
import xImg from "../../assets/logo-white.png";
import githubImg from "../../assets/Github.png";
import AtCoderImg from "../../assets/atcoder-white.png";
import logoImg from "../../assets/ZrzrBanner.png"


const returnTop = () => {
  window.scrollTo({
    top: 0
  });
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="pagetop" src={logoImg} onClick={returnTop} style={{ cursor: 'pointer'}} />
      </div>
      <div className="access">
        {/* twitter , github , AtCoder への リンク */}
        <a href="https://x.com/AaWlEw3pl899167" target="_blank" rel="noopener noreferrer"><img src={xImg} /></a>
        <a href="https://github.com/zerozero-0-0" target="_blank" rel="noopener noreferrer"><img src={githubImg} /></a>
        <a href="https://atcoder.jp/users/zerozero_00" target="_blank" rel="noopener noreferrer"><img src={AtCoderImg} /></a>
      </div>
    </div>
  );
};

export default Header;

/*
    menuTab
    PageTop
*/