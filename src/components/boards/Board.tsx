import React from "react";
import Hand from "../statusHand/hand/Hand";
import "./Board.css";
import StatusHand from "../statusHand/StatusHand";
import PlayerStatus from "../playerStatus/PlayerStatus";

interface Props {}

class Board extends React.Component<Props> {
  render() {
    return (
      <div className="background">
        <div className="myHand">
          <StatusHand  />
        </div>
        <PlayerStatus name="Belle" bid={3} tricks={4}/>
      </div>
    );
  }
}

export default Board;
