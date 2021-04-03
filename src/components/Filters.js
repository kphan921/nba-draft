import React from "react";
import TeamFilter from "./TeamFilters";
import PositionFilter from "./PositionFilter";
import DraftFilter from "./DraftFilter";
import CollegeFilter from "./CollegeFilter";
import CountryFilter from "./CountryFilter";

const Filters = (props) => {
    return (
        <div>
            <TeamFilter setTeam={props.setTeam} />
            <PositionFilter setPosition={props.setPosition} />
            <DraftFilter setDraftYear={props.setDraftYear} />
            <CollegeFilter setCollege={props.setCollege} colleges={props.colleges} />
            <CountryFilter setCountry={props.setCountry} countries={props.countries} />
        </div>
    )
}

export default Filters;