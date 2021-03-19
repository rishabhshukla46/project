import "./styles.css";
import React, { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import GamePage from "./components/GamePage";
import Header from "./components/Header";

export default function App() {
  const [user, setUser] = useState({ name: "", level: "" });
  const [game, setGame] = useState(false);

  if (game) {
    return (
      <div className="App">
        <GamePage user={user} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header />
        <WelcomePage
          user={user}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          onSubmit={() => setGame(true)}
        />
      </div>
    );
  }
}
