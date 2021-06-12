import React from "react";
import PlayerStatus from "./PlayerStatus";
import "./PlayerPill.css";

interface Props {
    right_direction: boolean,
}

class PlayerPill extends React.Component<Props> {
    render() {
        const direction_class = this.props.right_direction ? "right" : "left"
        const container_id = "player_pill_container_" + direction_class
        const profile_id = "profile_pic_" + direction_class
        const info_id = "player_info_" + direction_class
        if (this.props.right_direction) {
            return <div id={container_id}>
                <div id={profile_id}/>
                <div id={info_id}>
                    <PlayerStatus name="Adrian" bid={5} tricks={3} direction="right"/>
                </div>
            </div>;
        } else {
            return <div id={container_id}>
                <div id={info_id}>
                    <PlayerStatus name="Belle" bid={3} tricks={2} direction="left"/>
                </div>
                <div id={profile_id}/>
            </div>
        }
    }
}

export default PlayerPill;