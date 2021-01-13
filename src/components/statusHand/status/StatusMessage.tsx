import React from "react";
import "./StatusMessage.css";

interface Props {
  bid: number;
  tricks: number;
}

class StatusMessage extends React.Component<Props> {
  render() {
    return (
      <div className="statusMessage">
        <p>Bid: {this.props.bid}</p>
        <p>Tricks: {this.props.tricks}</p>
      </div>
    );
  }
}

export default StatusMessage;
