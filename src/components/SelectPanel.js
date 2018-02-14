import React from "react";

const SelectPanel = (props) => {
    return (
        <select
            className="filter"
            onChange={e => {
                props.onChange(e.target.value);
            }}
        >
            <option default>Filter</option>
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
        </select>
    );
};

export default SelectPanel;