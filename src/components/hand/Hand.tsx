import React from "react";
import "./Hand.css";
import jack from "../../assets/images/jack-hearts.png";

interface Props {}

class Hand extends React.Component<Props> {
  render() {
    return (
      <div className="hand">
        <div className="cardWrapper">
          <img className="card" src={jack} />
        </div>
        <div className="cardWrapper">
          <img className="card" src={jack} />
        </div>
        <div className="cardWrapper">
          <img className="card" src={jack} />
        </div>
        <div className="cardWrapper">
          <img className="card" src={jack} />
        </div>
        <div className="cardWrapper">
          <img className="card" src={jack} />
        </div>
        <div className="cardWrapper">
          <img className="card" src={jack} />
        </div>
        <div className="cardWrapper">
          <img className="card" src={jack} />
        </div>
      </div>
    );
  }
}

export default Hand;
