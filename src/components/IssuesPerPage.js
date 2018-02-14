import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
import SelectPanel from "./SelectPanel";
import SearchBar from "./SearchBar";
import IssueItem from "./IssueItem";
import Pagination from './Pagination';

class IssuesPerPage extends Component {
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
    renderPagination(link){
        // when link is not received, need to return something!
        if(!link) { return <div>loading pagination...</div>}
        // when link is received, return the Pagination component
        return <Pagination link={link}/>
    }
    render() {
        const inputValue = this.state.value;
        const issues = this.props.issues;
        const link = this.props.link;
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
                    {this.renderIssues(issues, inputValue)}
                </ul>
            <div>{this.renderPagination(link)}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('pagination', state.issueReducers.pagination)
    return {
        issues: state.issueReducers.issues,
        link:state.issueReducers.pagination
    };
};
export default connect(mapStateToProps, actions)(IssuesPerPage);