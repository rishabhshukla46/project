import React from "react";
import playerIcon from "../images/playerIcon.svg";
import gamepad from "../images/gamepad.svg";

const GameHeader = ({ user, score, showScoreCard }) => {
  const name = user.name;
  const level = user.level;
  let scoreCard = "";
  if (showScoreCard === true) {
    scoreCard = <p>SCORE: {score}</p>;
  }
  return (
    <div className="GameHeader">
      <div className="userInfo">
        <div className="card">
          <img src={playerIcon} alt="playerIcon"></img>
          <p>{name}</p>
        </div>
        <div className="card">
          <img src={gamepad} alt="gamepad"></img>
          <p>LEVEL: {level}</p>
        </div>
      </div>
      <div className="userInfo">
        <div className="card">
          <p>fast fingers</p>
        </div>
        <div className="card">{scoreCard}</div>
      </div>
    </div>
  );
};

export default GameHeader;
