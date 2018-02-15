import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import { parseLink } from "../utilities/utilities";

const renderPageNums = (lastPage, props) => {
    let result = [];
    for (let i = 1; i <= lastPage; i++) {
        result.push(
            <button className="page-number"
                 onClick={()=>props.onClick(i)}
            >
                {i}
            </button>
        );
    }
    return result;
};
const Pagination = props => {
    const lastPage = parseLink(props.link);
    return <div>{renderPageNums(lastPage,props)}</div>;
};

export default connect(null, actions)(Pagination);