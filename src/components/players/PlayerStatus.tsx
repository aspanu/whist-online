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
            <div id="content">
                <div id="name">{this.props.name}</div>
                <div id="bid">{this.props.bid}</div>
                <div id="separator">|</div>
                <div id="trick">{this.props.tricks}</div>                
            </div>
        );
    }
}

export default PlayerStatus;