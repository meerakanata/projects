import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect,} from 'react-router-dom';
import NavBar from './Navigation/NavBar';
import Main from './MainComponents/Main';
import Uploader from './Uploader/Uploader';
import UploadForm from './Uploader/UploadForm';


class App extends Component {

  render() {
    
    return (
      <div className="largeContainer">
        <Router>
          <div>
            <nav>
                <NavBar />
            </nav>
                <Switch>
                  <Route path="/videos/:videoID" exact render={ (props) => { return <Main vidId={props.match.params.videoID} />} }  />
                  <Route path="/uploader" exact component={Uploader} />
                  <Route path="/uploadform" exact component={UploadForm} />
                  <Route exact path="/" render={() =><Redirect to='/videos/3'/>} />
                </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
