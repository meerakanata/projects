import React, { Component } from 'react';
import MapContainer from './MapContainer';
import NavSearch from './NavSearch';
import BottomNav from './BottomNav';

export default class Search extends Component {

  state = {
    combinedResults: [],
    inputString: ''
  }

  submitHandler = (string, lat, lng) => {
    let baseURL = 'http://localhost:8080';
    let search = '/search';
    let homeLat = lat;
    let homeLng = lng;

    this.setState ({
      inputString: string
    })

    fetch(baseURL+search+'/'+string+'/'+homeLat+'/'+homeLng)
    .then((response) => {
        return response.json();
    }).then((data) => {
        this.setState({
          combinedResults: data,
        })
    }).catch((err) => {
        console.error("Error with fetch to Google");
    });
  }

  render() {
    return (
      <div className="searchViewContainer">
        <nav className="navBarContainer">
          <NavSearch submitHandler={this.submitHandler} />
        </nav>
        <div className="map-view">
          <div className="map-view__panel">
            <MapContainer locationsData={this.state.combinedResults} submitHandler={this.submitHandler} input={this.state.inputString}/> 
          </div>
          <div className="bottomNav">
            <BottomNav />
          </div>
        </div>
      </div>
    );
  }
}
