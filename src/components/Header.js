import React from "react";
import keyBoard from "../images/keyBoard.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={keyBoard} alt="KeyBoard"></img>
      <p className="fast-fingers">fast fingers</p>
      <div className="seperateLines">
        <p className="seperator">The Ultimate Typing Game</p>
      </div>
    </div>
  );
};

export default Header;
