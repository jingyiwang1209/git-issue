import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import IssueList from './components/IssueList';
import Issue from './components/Issue';


class App extends Component {
  render() {
    return (
      <div>
      <Route exact path='/' component={IssueList} />
      <Route exact path='/issue/:issueNumber' component={Issue} />
      </div>
    );
  }
}

export default App;
