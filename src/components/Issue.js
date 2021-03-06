import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import ReactMarkDown from 'react-markdown';

class Issue extends Component {
    componentWillMount(){
        const issueNumber = this.props.match.params.issueNumber;
        this.props.fetchIssue(issueNumber);
    }
    render(){
         const { issue } = this.props;
         // when coming back from other links, issue can be undefined
         if(!issue) { return <div>Loading..</div>}
        return (
         <div className='issue-container'>
         <h2>{issue.title}</h2>
         <ReactMarkDown className='issue-body' source={issue.body} />
        </div>
        )
    }
}
const mapStateToProps = (state)=>{
   return {
    issue: state.issueReducers.issue
   }
}
export default connect(mapStateToProps, actions)(Issue);