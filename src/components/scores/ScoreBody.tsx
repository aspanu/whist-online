import React from "react";
import ScoreRow from "./ScoreRow";

interface Props {
  numPlayers: number;
}

class ScoreBody extends React.Component<Props> {
  render() {
    const handSizes = this.createHandSizes(this.props.numPlayers);

    return (
      <tbody>
        {handSizes.map((handSize, i) => (
          <ScoreRow
            handSize={handSize}
            key={i}
            numPlayers={this.props.numPlayers}
            // TODO: Pass the bids and scores in for display later
          />
        ))}
      </tbody>
    );
  }

  private createHandSizes(numPlayers: number): number[] {
    let handSizes: number[] = [];
    for (let i = 0; i < numPlayers; i++) {
      handSizes.push(1);
    }

    for (let i = 2; i < 8; i++) {
      handSizes.push(i);
    }

    for (let i = 0; i < numPlayers; i++) {
      handSizes.push(8);
    }

    for (let i = 7; i > 1; i--) {
      handSizes.push(i);
    }

    for (let i = 0; i < numPlayers; i++) {
      handSizes.push(1);
    }
    return handSizes;
  }
}

export default ScoreBody;
