import React from "react";

interface Props {
  playerName: string;
}

class ScoreHeaderPlayer extends React.Component<Props> {
  render() {
    return (
      <th className="playerNameColumn" colSpan={2}>
        {this.props.playerName}
      </th>
    );
  }
}

export default ScoreHeaderPlayer;
