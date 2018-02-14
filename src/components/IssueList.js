import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import { calculateHourDiff } from '../utilities/utilities';
import SelectPanel from "./SelectPanel";
import SearchBar from "./SearchBar";

class IssueList extends Component {
    state={
        value:""
    }
    renderIssues(issues, value) {
        // when coming back from other links, issue can be undefined
        if (!issues) {
            return <div>Loading..</div>;
        }
        return issues.map(issue => {
            let state = issue.state === "open" ? "opend" : "closed";
            if(issue.title.toLowerCase().indexOf(value.toLowerCase()) === -1){return  }
            return (
                <li className="issue" key={issue.id}>
                    <div className="issue-header">
                        <Link
                            className="issue-title"
                            to={`/issue/${issue.number}`}
                        >
                            {issue.title}{" "}
                        </Link>
                        <span className="issue-comment">
                            <Link to={issue.comments_url}>
                                {issue.comments > 1 ? (
                                    issue.comments + " comments"
                                ) : (
                                    ""
                                )}{" "}
                            </Link>
                        </span>
                    </div>
                    <div>
                        #{issue.number} {state}{" "}
                        {calculateHourDiff(issue.created_at)} ago by{" "}
                        {issue.user.login}{" "}
                    </div>
                </li>
            );
        });
    }
    componentWillMount() {
        this.props.listIssues();
    }

    handleFilterChange(value) {
        this.props.changeFilter(value);
    }

    handleInputChange(value){
        this.setState({
            value,
        })
    }
    render() {
        const inputValue = this.state.value
        return (
            <div className="container">
                <div>
                    <SelectPanel
                        onChange={value => this.handleFilterChange(value)}
                    />
                    <SearchBar
                       value={this.state.value}
                       onChange={(value)=>this.handleInputChange(value)}
                    />
                </div>
                <ul className="issue-list">
                    {this.renderIssues(this.props.issues, inputValue)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        issues: state.issueReducers
    };
};
export default connect(mapStateToProps, actions)(IssueList);