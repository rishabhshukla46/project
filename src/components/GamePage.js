import React, { useEffect, useState } from "react";
import GameWord from "../data/GameWord";
import EndGame from "./EndGame";
import MainGame from "./MainGame";
import Timer from "./Timer";

const CONFIG_LEVEL = {
  Easy: 1,
  Medium: 1.5,
  Hard: 2
};
const CONFIG_FACTOR = 0.01;

const makeTime = (time) => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};

export default function GamePage({ user }) {
  const [game, setGame] = useState(true);
  const [gameWord, setGameWord] = useState("");
  const [gameLevel, setGameLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreArray, setScoreArray] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const newGameLevel = CONFIG_LEVEL[user.level];
    setGameLevel(newGameLevel);
    setGameWord(GameWord(newGameLevel).toUpperCase());

    return () => {
      setGameLevel(0);
      setGameWord("");
    };
  }, []);

  const changeWord = () => {
    const newGameLevel = gameLevel + CONFIG_FACTOR;
    setGameLevel(newGameLevel);
    const newWord = GameWord(newGameLevel);
    setGameWord(newWord.toUpperCase());
  };

  const mainGame = <MainGame word={gameWord} changeWord={changeWord} />;
  const btn = <button onClick={() => setGame(!game)}>END Game</button>;
  const endGame = (
    <EndGame
      score={makeTime(score)}
      setGame={() => {
        setScoreArray([...scoreArray, score]);
        setScore(0);
        setGame(true);
      }}
    />
  );
  let isCovered = false;
  const pastScores = scoreArray.map((game, i) => {
    let color;
    let tag;
    if (game === bestScore && !isCovered) {
      color = "red";
      isCovered = true;
      tag = "High Score";
    }
    return (
      <p style={{ color: color }}>
        Game{i + 1}: {makeTime(game)} {tag}
      </p>
    );
  });

  if (game) {
    return (
      <div>
        <Timer
          gameWord={gameWord}
          time={Math.max(Math.ceil(gameWord.length / gameLevel), 2)}
          updateScore={(e) => {
            const newScore = score + e;
            if (newScore > bestScore) {
              setBestScore(newScore);
            }
            setScore(newScore);
          }}
          setGame={() => setGame(!game)}
        />
        {mainGame} <br />
        {makeTime(score)} <br />
        {btn}
        {pastScores}
      </div>
    );
  } else {
    return (
      <div>
        {endGame} <br />
      </div>
    );
  }
}
