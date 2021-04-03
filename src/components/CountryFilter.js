import React from "react";

const CountryFilter = (props) => {
    return (
        <select className="filter" onChange={props.setCountry}>
            <option value="all">All Countries</option>
            {props.countries.map(country => <option key={country} value={country}>{country}</option>)}
        </select>
    )
}

export default CountryFilter;