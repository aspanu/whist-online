import React from "react";
import ScoreHeaderPlayer from "./ScoreHeaderPlayer";

interface Props {
  playerNames: string[];
}

class ScoreHeader extends React.Component<Props> {
  render() {
    return (
      <thead>
        <tr>
          <th className="handSizeColumn"></th>
          {this.props.playerNames.map((playerName) => (
            <ScoreHeaderPlayer playerName={playerName} />
          ))}
        </tr>
      </thead>
    );
  }
}

export default ScoreHeader;
