import React from "react";
import Hand from "./hand/Hand";
import StatusMessage from "./status/StatusMessage";
import "./StatusHand.css";

interface Props {}

class StatusHand extends React.Component<Props> {
  render() {
    return (
      <div className="statusHand">
        <Hand />
        <StatusMessage bid={3} tricks={1} />
      </div>
    );
  }
}

export default StatusHand;
