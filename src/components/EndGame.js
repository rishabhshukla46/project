import React from "react";

export default function EndGame({ setGame, score }) {
  return (
    <div>
      <h1>Game has ended</h1>
      <h1>Your Score: {score}</h1>
      <button onClick={setGame}>Continue</button>
      <button onClick={() => location.reload()}>EndGame</button>
    </div>
  );
}
