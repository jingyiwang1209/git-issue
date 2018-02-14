import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as actions from "../actions";

class IssueList extends Component {
    renderTimeDiff(pastTime) {

        let past = new Date(pastTime);
        past = past.getTime();
        let now = Date.now('UTC');
        let elapsed = now - past;
        let diff = new Date(elapsed);
        let hours = diff.getHours();
        let days = 0
        if(hours >= 24){ days += 1}
        return days >= 1 ?  days + ' days' : hours + ' hours';
    }
    renderIssues(issues) {
        // when coming back from other links, issue can be undefined
        if(!issues) { return <div>Loading..</div>}
        return issues.map(issue => {
            let state = issue.state === "open" ? "opend" : "closed";

            return (
                <li className="issue" key={issue.id}>

                    <Link style={{float:'left'}} to={`/issue/${issue.number}`}>{issue.title} </Link>
                    <span style={{float:'right'}}><Link to={issue.comments_url}>{issue.comments > 1 ? issue.comments+' comments':""} </Link></span>
                    <div style={{clear:'both'}}></div>
                    <div>
                        #{issue.number} {state}{" "}
                        {this.renderTimeDiff(issue.created_at)} ago by{" "}
                        {issue.user.login}{" "}
                    </div>
                </li>
            );
        });
    }
    componentWillMount() {
        this.props.listIssues();
    }

    handleFilterChange(value){
        console.log(value)
        this.props.changeFilter(value)
    }
    render() {
        return (
            <div className="container">
                <div>
                    <select className='filter' onChange={(e)=>{this.handleFilterChange(e.target.value)}}>
                       <option default>Filter</option>
                       <option value='all'>All</option>
                       <option value='open'>Open</option>
                       <option value='closed'>Closed</option>

                    </select>
                </div>
                <ul className="issue-list">
                    {this.renderIssues(this.props.issues)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('liststate',state.issueReducers)
    return {
        issues: state.issueReducers
    };
};
export default connect(mapStateToProps, actions)(IssueList);