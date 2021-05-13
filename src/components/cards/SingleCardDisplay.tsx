import React from "react";
import "./SingleCardDisplay.css";
import Card from "../../model/Card";
import { getCardMetadata } from "../../model/CardMetadata";

interface Props {
    card: Card,
}

class SingleCardDisplay extends React.Component<Props> {
  render() {
    // TODO: Perhaps also add something which says what size to display this as?
    const cardMetadata = getCardMetadata(this.props.card)
    return (
      <div>
          <img className="cardDisplay" src={cardMetadata.image} alt={cardMetadata.altText}/>
      </div>
    );
  }
}

export default SingleCardDisplay;
