import "./styles.css";
import { useState, useEffect } from "react";
import WelcomePage from "./components/WelcomePage";
import GamePage from "./components/GamePage";

export default function App() {
  const [user, setUser] = useState({ name: "", level: "" });
  const [game, setGame] = useState(false);

  const welcomePage = (
    <WelcomePage
      user={user}
      onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
      onSubmit={() => setGame(true)}
    />
  );

  const gamePage = <GamePage user={user} />;

  const content = game ? gamePage : welcomePage;

  return (
    <div className="App">
      <h1>FAST FINGERS</h1>
      {content}
    </div>
  );
}
