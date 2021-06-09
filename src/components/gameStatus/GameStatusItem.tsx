import React from 'react';
import "./GameStatusItem.css";

interface Props {
    name: string,
    amount: number,
}

class GameStatusItem extends React.Component<Props> {
    render() {
        return <div id="container">
            <div id="name">{this.props.name}</div>
            <div id="amount">{this.props.amount}</div>
        </div>
    }
}
    

export default GameStatusItem;