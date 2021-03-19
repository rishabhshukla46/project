import React, { useEffect, useState } from "react";

export default function MainGame({ word, changeWord, setGame }) {
  const [inputWord, setInputWord] = useState("");

  const handleTextChange = (e) => {
    const newTypedWord = e.target.value;
    if (word === newTypedWord.toUpperCase()) {
      changeWord();
      setInputWord("");
    } else {
      setInputWord(e.target.value);
    }
  };

  return (
    <div className="main-game">
      <div className="game-word">
        <h1>
          {word.split("").map((char, i) => {
            let color;

            if (i < inputWord.length) {
              if (char === inputWord.charAt(i).toUpperCase()) {
                color = "green";
              } else {
                color = "blue";
              }
            }
            return (
              <span key={i} style={{ color: color }}>
                {char}
              </span>
            );
          })}
        </h1>
      </div>
      <div className="input-word">
        <input
          type="text"
          name="inputWord"
          autoComplete="off"
          value={inputWord}
          onChange={handleTextChange}
          autoFocus={true}
        />
      </div>
      <button className="quit-game" onClick={() => location.reload()}>
        QUIT
      </button>
    </div>
  );
}
