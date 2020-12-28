import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreTable from "./scores/ScoreTable";

function App() {
  const names = ["Adrian", "Belle", "Tavi", "Tracey", "Jon"];
  return (
    <div className="App">
      <ScoreTable playerNames={names} />
    </div>
  );
}

export default App;
// make a scoreboard that has 30 rows