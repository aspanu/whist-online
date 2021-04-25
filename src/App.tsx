import "./App.css";
import Board from "./components/boards/Board";
import SingleCardDisplay from "./components/cards/SingleCardDisplay";
import Card from "./model/Card";

function App() {
  // const names = ["Adrian", "Belle", "Tavi", "Tracey", "Jon"];
  return (
    <div className="App">
      <Board/>
      <SingleCardDisplay card={Card.TWO_CLUBS} />
    </div>
  );
}

export default App;
// make a scoreboard that has 30 rows