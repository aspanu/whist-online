import "./App.css";
import Board from "./components/boards/Board";
import SingleCardDisplay from "./components/cards/SingleCardDisplay";
import WebSocketClient from "./components/connections/WebSocketConnection";
import GameStatus from "./components/gameStatus/GameStatus";
import PlayerPill from "./components/players/PlayerPill";
import Card from "./model/Card";

function App() {
  // const names = ["Adrian", "Belle", "Tavi", "Tracey", "Jon"];
  // <Board/>
  // <SingleCardDisplay card={Card.TWO_CLUBS} />
  return (
    <div className="App">      
      <GameStatus/>
    </div>
  );
}

export default App;
// make a scoreboard that has 30 rows