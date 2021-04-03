import React from "react";

const CollegeFilter = (props) => {
    return (
        <select className="filter" onChange={props.setCollege}>
            <option value="all">All Colleges</option>
            {props.colleges.map(college => <option key={college} value={college}>{college}</option>)}
        </select>
    )
}

export default CollegeFilter;