import React from "react";
import Hand from "../hand/Hand";
import "./Board.css";

interface Props {}

class Board extends React.Component<Props> {
  render() {
    return (
      <div className="background">
        <Hand />
      </div>
    );
  }
}

export default Board;
