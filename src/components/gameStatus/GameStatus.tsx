import React from 'react';
import "./GameStatus.css";
import GameStatusItem from './GameStatusItem';

interface Props {}

class GameStatus extends React.Component<Props> {
    render() {
        return <div id="container">
            <div id="hand" ><GameStatusItem name="Hand" amount={1} /></div>
            <div id="tricks"><GameStatusItem name="Tricks" amount={1} /></div>
            <div id="settings"/>
        </div>
    }
}
    

export default GameStatus;