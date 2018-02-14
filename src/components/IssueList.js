import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
import SelectPanel from "./SelectPanel";
import SearchBar from "./SearchBar";
import IssueItem from "./IssueItem";

class IssueList extends Component {
    state = {
        value: ""
    };
    renderIssues(issues, value) {
        // when coming back from other links, issue can be undefined
        if (!issues) {
            return <div>Loading..</div>;
        }
        return issues.map(issue => {
            if (issue.title.toLowerCase().indexOf(value.toLowerCase()) === -1) {
                return;
            }
            return <IssueItem issue={issue} />;
        });
    }
    componentWillMount() {
        this.props.listIssues();
    }

    handleFilterChange(value) {
        this.props.changeFilter(value);
    }

    handleInputChange(value) {
        this.setState({
            value
        });
    }
    render() {
        const inputValue = this.state.value;
        return (
            <div className="container">
                <div>
                    <SelectPanel
                        onChange={value => this.handleFilterChange(value)}
                    />
                    <SearchBar
                        value={this.state.value}
                        onChange={value => this.handleInputChange(value)}
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