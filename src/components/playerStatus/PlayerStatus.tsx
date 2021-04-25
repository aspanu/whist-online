import React from "react";
import "./PlayerStatus.css";

interface Props {
    name: string,
    bid: number,
    tricks: number,
}

class PlayerStatus extends React.Component<Props> {
    render() {
        return (
        <div className="playerStatus">
            <div className="playerStatusContent">
                <p className="playerStatusName">{this.props.name}</p>
                <p className="playerStatusBidTrick">Bid: {this.props.bid}<br/>
                Tricks: {this.props.tricks}</p>
            </div>
        </div>
        );
    }
}

export default PlayerStatus;