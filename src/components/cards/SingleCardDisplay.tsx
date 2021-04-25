import React from "react";
import "./SingleCardDisplay.css";
import Card from "../../model/Card";

interface Props {
    card: Card,
}

class SingleCardDisplay extends React.Component<Props> {
  render() {
    // TODO: Perhaps also add something which says what size to display this as?
    return (
      <div>
          <img className="cardDisplay" src={this.props.card.image} alt={this.props.card.altText}/>
      </div>
    );
  }
}

export default SingleCardDisplay;
