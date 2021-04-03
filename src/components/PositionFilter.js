import React from "react";

const PositionFilter = (props) => {
    return (
        <select className="filter" name="position" id="position-select" onChange={props.setPosition}>
            <option value="all">All Positions</option>
            <option value="PG">Point Guard</option>
            <option value="SG">Shooting Guard</option>
            <option value="SF">Small Forward</option>
            <option value="PF">Power Forward</option>
            <option value="C">Center</option>
        </select>
    )
}

export default PositionFilter;