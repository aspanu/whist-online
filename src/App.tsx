import "./App.css";
import Board from "./components/board/Board";

function App() {
  // const names = ["Adrian", "Belle", "Tavi", "Tracey", "Jon"];
  return (
    <div className="App">
      <Board numPlayers={5} />
    </div>
  );
}

export default App;
// make a scoreboard that has 30 rows