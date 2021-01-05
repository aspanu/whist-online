import React from "react";
import "./Board.css";

interface Props {
  numPlayers: number;
}

class Board extends React.Component<Props> {
  render() {
    return <div className="background" />;
  }
}

export default Board;
