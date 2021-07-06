import "./App.css";
import TablePlayers from "./components/boards/TablePlayers";
import GameStatus from "./components/gameStatus/GameStatus";

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