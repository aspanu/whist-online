import React from "react";
import Hand from "../statusHand/hand/Hand";
import "./Board.css";
import StatusHand from "../statusHand/StatusHand";
import PlayerStatus from "../players/PlayerStatus";
import PlayerPill from "../players/PlayerPill";

interface Props {}

class Board extends React.Component<Props> {
  render() {
    return (
      <div className="background">
        <div className="myHand">
          <StatusHand />
        </div>
        <PlayerPill />
      </div>
    );
  }
}

export default Board;
