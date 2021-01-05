import React from "react";
import ScoreBody from "./ScoreBody";
import ScoreHeader from "./ScoreHeader";
import "./ScoreTable.css";

interface Props {
  playerNames: string[];
}

class ScoreTable extends React.Component<Props> {
  render() {
    const playerNames = this.props.playerNames;
    const numPlayers = playerNames.length;

    return (
      <div>
        <table>
          <ScoreHeader playerNames={playerNames} />
          <ScoreBody numPlayers={numPlayers} />
        </table>
      </div>
    );
  }
}

export default ScoreTable;
