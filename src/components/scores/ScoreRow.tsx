import React from "react";

interface Props {
  handSize: number;
  key: number;
  numPlayers: number;
  bids?: number[];
  scores?: number[];
}

class ScoreRow extends React.Component<Props> {
  render() {
    let columns = [];

    let actualBids: number[] = [];
    if (this.props.bids != null) {
      actualBids = this.props.bids;
    }

    let actualScores: number[] = [];
    if (this.props.scores != null) {
      actualScores = this.props.scores;
    }

    for (let i = 0; i < this.props.numPlayers; i++) {
      columns.push(<td className="bidColumn">{actualBids.pop()}</td>);
      columns.push(<td className="scoreColumn">{actualScores.pop()}</td>);
    }

    return (
      <tr className="scoreRow" key={this.props.key}>
        <th className="handSizeColumn">{this.props.handSize}</th>
        {columns}
      </tr>
    );
  }
}

export default ScoreRow;
