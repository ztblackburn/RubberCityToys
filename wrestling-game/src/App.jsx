import React, { useState } from "react";
import gameData from "./gameData";
import Scene from "./components/Scene";
import "./styles.css";

function App() {
  const [currentKey, setCurrentKey] = useState("home");
  const scene = gameData[currentKey];

  const handleChoice = (nextKey) => {
    setCurrentKey(nextKey);
  };

  const getChapterTitle = () => {
    if (currentKey.startsWith("chapter2")) return "Chapter 2: Cage Match";
    if (currentKey.startsWith("chapter3")) return "Chapter 3";
    return "Chapter 1: The Cave";
  };

  return (
    <div className="app">
      <h1>Text Adventure</h1>
      <h2 className="chapter-title">{getChapterTitle()}</h2>
      <Scene scene={scene} onChoice={handleChoice} />
    </div>
  );
}

export default App;
