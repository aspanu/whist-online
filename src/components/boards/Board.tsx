import React from "react";
import "./Board.css";
import StatusHand from "../statusHand/StatusHand";
import PlayerPill from "../players/PlayerPill";

interface Props {}

class Board extends React.Component<Props> {
  render() {
    return (
      <div className="background">
        <div className="myHand">
          <StatusHand />
        </div>
        <PlayerPill right_direction={true}/>
      </div>
    );
  }
}

export default Board;
