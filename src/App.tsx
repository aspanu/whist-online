import "./App.css";
import Table from "./components/boards/Table";
import TablePlayers from "./components/boards/TablePlayers";
import GameStatus from "./components/gameStatus/GameStatus";
import PlayerPill from "./components/players/PlayerPill";

function App() {
  // const names = ["Adrian", "Belle", "Tavi", "Tracey", "Jon"];
  // <Board/>
  // <SingleCardDisplay card={Card.TWO_CLUBS} />
  return (
    <div className="App">      
      <GameStatus/>
      <TablePlayers/>
    </div>
  );
}

export default App;