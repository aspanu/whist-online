import React from "react";
import Card from "../../model/Card";

interface Props {
    card: Card,
}

class SingleCardDisplay extends React.Component<Props> {
  render() {
    // TODO: Add something which maps from the enum to the picture
    return (
      <div className="cardDisplay">
          <p>{this.props.card}</p>
      </div>
    );
  }
}

export default SingleCardDisplay;
