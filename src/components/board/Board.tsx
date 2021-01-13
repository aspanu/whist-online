import React from "react";
import Hand from "../statusHand/hand/Hand";
import "./Board.css";
import StatusHand from "../statusHand/StatusHand";

interface Props {}

class Board extends React.Component<Props> {
  render() {
    return (
      <div className="background">
        <div className="myHand">
          <StatusHand  />
        </div>
        <div className="opponentHand">
          <Hand />
        </div>
        <div className="opponetHand">
          <Hand />
        </div>
        <div className="opponentHand">
          <Hand />
        </div>
        <div className="opponentHand">
          <Hand />
        </div>
      </div>
    );
  }
}

export default Board;
