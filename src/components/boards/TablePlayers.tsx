import React from "react";
import PlayerPill from "../players/PlayerPill";
import Table from "./Table";
import "./TablePlayers.css";

interface Props {}

class TablePlayers extends React.Component<Props> {
    render() {
        return <div >
                <Table />
                <div id="player_one"><PlayerPill right_direction={false} /> </div>
                <div id="player_two"><PlayerPill right_direction={false} /> </div>
                <div id="player_three"><PlayerPill right_direction={true} /> </div>
                <div id="player_four"><PlayerPill right_direction={true} /> </div>
            </div>

    }
}

export default TablePlayers;