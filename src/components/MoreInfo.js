import React from "react";
import teamMap from "./TeamMap";

const positionMap = {
  PG: "Point Guard",
  SG: "Shooting Guard",
  SF: "Small Forward",
  PF: "Power Forward",
  C: "Center",
};

const monthMap = {
  "1": "January",
  "2": "February",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": "July",
  "8": "August",
  "9": "September",
  "10": "October",
  "11": "November",
  "12": "December"
}

const formatHeight = (height) => {
  height = height.split("-");
  return `${height[0]} ft ${height[1]} in`;
};

const formatPosition = (position) => {
  position = position.split("/");
  if (position.length === 1) {
    return `${positionMap[position[0]]}`;
  } else {
    return `${positionMap[position[0]]} / ${positionMap[position[1]]}`;
  }
};

const formatDraft = (draft) => {
  draft = draft.split(" ");
  if (draft.length === 3) {
    return `${draft[0]} / Round: ${draft[1][1]} / Pick: ${draft[2]}`;
  } else {
    return `${draft[0]} / ${draft[1]}`;
  }
};

const formatBday = (bday) => {
  bday = bday.split("-");
  return `${monthMap[bday[1]]} ${bday[2]}, ${bday[0]}`;
}

const MoreInfo = (props) => {
  return (
    <div className="main-page">
      <div
        className="player-more-info"
        style={{ backgroundColor: teamMap[props.player.team].color }}
      >
        <img
          className="player-team-img-info"
          src={teamMap[props.player.team].logo}
          alt={props.player.team}
        />
        <div>
          <h1 className="player-name-info">{props.player.name}</h1>
          {props.player.team !== "FA" ? <h2>#{props.player.number} | {teamMap[props.player.team].name}</h2> : <h2>{teamMap[props.player.team].name}</h2>}
          <h2>{formatPosition(props.player.position)}</h2>
        </div>
        <img
          className="player-img-info"
          src={props.player.img}
          alt={props.player.name}
        />
        <div className="player-details-info">
          <div>
            <b>Height</b>
            <p>{formatHeight(props.player.height)}</p>
          </div>
          <div>
            <b>Weight</b>
            <p>{props.player.weight} lb</p>
          </div>
          <div>
            <b>Draft</b>
            <p>{formatDraft(props.player.draft)}</p>
          </div>
          <div>
            <b>Birthday</b>
            <p>{formatBday(props.player.birthday)}</p>
          </div>
          <div>
            <b>From</b>
            <p>{props.player.from}</p>
          </div>
          <div>
            <b>Country</b>
            <p>{props.player.country}</p>
          </div>
        </div>
      </div>
      <button className="button" onClick={() => props.addPlayer(props.player)}>
        Add to Team
      </button>
    </div>
  );
};

export default MoreInfo;
