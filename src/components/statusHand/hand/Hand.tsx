import React from "react";
import "./Hand.css";
import sampleCard from "../../../assets/images/sampleCard.png"

interface Props {}

class Hand extends React.Component<Props> {
  render() {
    const cardXTransforms = this.cardTransforms(6);
    return (
      <div className="hand">
        <div className="cardWrapper">
          <img className="card" src={sampleCard} />
        </div>
        <div className="cardWrapper">
          <img className="card" src={sampleCard} />
        </div>
        <div className="cardWrapper">
          <img className="card" src={sampleCard} />
        </div>
        <div className="cardWrapper">
          <img className="card" src={sampleCard} />
        </div>
        <div className="cardWrapper">
          <img className="card" src={sampleCard} />
        </div>
        <div className="cardWrapper">
          <img className="card" src={sampleCard} />
        </div>
        <div className="cardWrapper">
          <img className="card" src={sampleCard} />``
        </div>
      </div>
    );
  }

  cardTransforms(numCards: number): number[] {
    // TODO: Add the full card transform functionality based on
    // https://stackoverflow.com/questions/43919067/make-flex-items-overlap
    return [];
  }
}

export default Hand;
