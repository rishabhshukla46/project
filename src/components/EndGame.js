import React from "react";
import redo from "../images/redo.svg";

export default function EndGame({ setGame, score, scoreArray }) {
  return (
    <div className="end-game">
      <h1>SCORE : GAME{scoreArray.length}</h1>
      <h1>{score}</h1>
      <button className="play-again" onClick={() => setGame(true)}>
        <img src={redo} alt="Redo"></img>
        PLAY AGAIN
      </button>
      <button className="quit-game" onClick={() => location.reload()}>
        QUIT
      </button>
    </div>
  );
}
