import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import IssueList from './components/IssueList';
import Issue from './components/Issue';
// import IssuesPerPage from './components/IssuesPerPage';

class App extends Component {
  render() {
    return (
      <div>
      <Route exact path='/' component={IssueList} />
      <Route exact path='/issue/:issueNumber' component={Issue} />
      <Route exact path='/page/:pageNumber' component={IssueList} />
      </div>
    );
  }
}

export default App;
