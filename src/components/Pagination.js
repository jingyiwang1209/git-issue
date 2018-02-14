import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import { parseLink } from "../utilities/utilities";

const renderPageNums = lastPage => {
    let result = [];
    for (let i = 1; i <= lastPage; i++) {
        result.push(
            <Link className="page-number"
                  to={`/page/${i}`}
                  key={i}>
                {i}
            </Link>
        );
    }
    return result;
};
const Pagination = props => {
    const lastPage = parseLink(props.link);
    return <div>{renderPageNums(lastPage)}</div>;
};

export default connect(null, actions)(Pagination);