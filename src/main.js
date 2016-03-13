import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './main.scss';
import About from './components/About';
import App from './components/App';
import Home from './components/Home';
import Repos from './components/Repos';
import RepoDetails from './components/RepoDetails';
import ServerError from './components/ServerError';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="repos" component={Repos}>
        <Route path=":repositoryName" component={RepoDetails} />
      </Route>
      <Route path="error" component={ServerError} />
    </Route>
  </Router>,
  document.getElementById('app')
);
