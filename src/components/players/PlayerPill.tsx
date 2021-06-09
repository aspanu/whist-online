import React from "react";
import PlayerStatus from "./PlayerStatus";
import "./PlayerPill.css";

interface Props {}

class PlayerPill extends React.Component<Props> {
    render() {
        return <div id="player_pill_container">
            <div id="profile_pic"></div>
            <div id="player_info">
                <PlayerStatus name="Adrian" bid={5} tricks={3} />
            </div>
        </div>
    }
}

export default PlayerPill;