import React from "react";

const TeamFilter = (props) => {
    return (
        <select className="filter" name="team" id="team-select" onChange={props.setTeam}>
            <option value="all">All Teams</option>
            <option value="PHI">76ers</option>
            <option value="MIL">Bucks</option>
            <option value="CHI">Bulls</option>
            <option value="CLE">Cavaliers</option>
            <option value="BOS">Celtics</option>
            <option value="LAC">Clippers</option>
            <option value="MEM">Grizzlies</option>
            <option value="ATL">Hawks</option>
            <option value="MIA">Heat</option>
            <option value="CHA">Hornets</option>
            <option value="UTA">Jazz</option>
            <option value="SAC">Kings</option>
            <option value="NYK">Knicks</option>
            <option value="LAL">Lakers</option>
            <option value="ORL">Magic</option>
            <option value="DAL">Mavericks</option>
            <option value="BKN">Nets</option>
            <option value="DEN">Nuggets</option>
            <option value="IND">Pacers</option>
            <option value="NOP">Pelicans</option>
            <option value="DET">Pistons</option>
            <option value="TOR">Raptors</option>
            <option value="HOU">Rockets</option>
            <option value="SAS">Spurs</option>
            <option value="PHX">Suns</option>
            <option value="OKC">Thunder</option>
            <option value="MIN">Timberwolves</option>
            <option value="POR">Trail Blazers</option>
            <option value="GSW">Warriors</option>
            <option value="WAS">Wizards</option>
            <option value="FA">Free Agents</option>
        </select>
    )
}

export default TeamFilter;