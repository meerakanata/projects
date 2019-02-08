import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,} from 'react-router-dom';
import './App.css';
import Launch from './Launch';
import Search from './Search';
import SourceInfo from './SourceInfo';
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
              <Switch>
                <Route path="/intro" exact component={Launch} />
                <Route path="/home" exact component={Home} />
                <Route path="/search" exact component={Search} />
                <Route path="/source" exact component={SourceInfo} />
                <Route exact path="/" render={() =><Redirect to='/intro'/>} />
              </Switch>
        </Router>
      </div>
    );
  }
}


