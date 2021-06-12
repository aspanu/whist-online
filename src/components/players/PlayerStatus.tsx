import React from "react";
import "./PlayerStatus.css";

interface Props {
    name: string,
    bid: number,
    tricks: number,
    direction: string,
}

class PlayerStatus extends React.Component<Props> {
    render() {
        const content_id = "content_" + this.props.direction
        return (
            <div id={content_id}>
                <div id="name">{this.props.name}</div>
                <div id="bid">{this.props.bid}</div>
                <div id="separator">|</div>
                <div id="trick">{this.props.tricks}</div>                
            </div>
        );
    }
}

export default PlayerStatus;