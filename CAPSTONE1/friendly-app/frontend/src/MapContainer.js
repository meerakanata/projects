import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {my_key} from './Key';

export class MapContainer extends Component {
  state = {
    newCenter: {
      lat: 43.64556059999999,
      lng: -79.3954094
    },
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    selectBizObj: {
      friendlyResult: {
        friendlyDetails: {
          score: ' '
        }
      }
    },
  }


  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  centerMoved = (mapProps, map) => {
    const {google} = mapProps;
    let mylat = map.getCenter().lat();
    let mylng = map.getCenter().lng();
    let pos = {
      lat: mylat,
      lng: mylng
    }; 
    this.setState({ 
      newCenter: pos,
    })
  }
    
  componentDidUpdate (prevProps, prevState) {
    let newSearchString = this.props.input;
    let lat = this.state.newCenter.lat;
    let lng = this.state.newCenter.lng;

    if((prevState.newCenter.lat !== this.state.newCenter.lat) && (prevState.newCenter.lng !== this.state.newCenter.lng)){
      this.props.submitHandler(newSearchString, lat, lng);

    }
  }      

  onMarkerClick = (props, marker, e) => {
    let locationsArr = this.props.locationsData; 
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    let selectBizLat = this.state.selectedPlace.position.lat;
    let selectBizLng = this.state.selectedPlace.position.lng;

    let selectBiz = locationsArr.filter((business)=>{
      return (selectBizLat === business.geometry.location.lat && selectBizLng === business.geometry.location.lng)
    })

    let selectBizObject = {
      friendlyResult: {
        friendlyDetails: {
          score: 'N/A'
        }
      },
      vicinity: selectBiz[0].vicinity
    }

    this.setState({
      selectBizObj: selectBizObject
    })
  }

  onFriendlyMarkerClick = (props, marker, e) => {
    let locationsArr = this.props.locationsData; 
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    let selectBizLat = this.state.selectedPlace.position.lat;
    let selectBizLng = this.state.selectedPlace.position.lng;
    let selectBiz = locationsArr.filter((business)=>{
      return (selectBizLat === business.geometry.location.lat && selectBizLng === business.geometry.location.lng)
    })

    let selectBizObject = selectBiz[0]
    this.setState({
      selectBizObj: selectBizObject
    })
  }

  render() {
    const style = {
        width: '100%',
        height: '100%'
    }
    const {google} = this.props;
    let locations = this.props.locationsData; 

    return (
      <Map  google={this.props.google} 
            style={style} 
            initialCenter={{lat: 43.64556059999999,
              lng: -79.3954094}} 
            zoom={14}
            onClick={this.onMapClicked}
            onReady={this.fetchPlaces}
            visible={true}
            onDragend={this.centerMoved}>

        {locations.map((business, index)=>{

          if(business.friendlyResult.friendlyDetails) {
            return <Marker
            key={index}
            name={business.name}
            onClick={this.onFriendlyMarkerClick}
            google={this.props.google}
            position={{lat: business.geometry.location.lat, lng: business.geometry.location.lng}}
            icon={{
              url: "/Capstone_Assets/rainbow-marker2.png",
              anchor: new google.maps.Point(32,32),
              scaledSize: new google.maps.Size(28,45)
            }} />
          } else {
              return <Marker 
              key={index}
              onClick={this.onMarkerClick}
              name={business.name}
              position={{lat: business.geometry.location.lat, lng: business.geometry.location.lng}}
              icon={{
                url: "/Capstone_Assets/reg_marker.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(28,45)
              }} />
          }
        })}
  
        <InfoWindow
          marker={this.state.activeMarker}
          onOpen={this.windowHasOpened}
          onClose={this.windowHasClosed}
          visible={this.state.showingInfoWindow}>
          <div className="infowindow-style">
            <h3>{this.state.selectedPlace.name}</h3>
            <div>{this.state.selectBizObj.vicinity}</div>
            <div>{'Friendly Score: '}<span className="scoreColor">{this.state.selectBizObj.friendlyResult.friendlyDetails.score}</span></div>
            {/* <div className='bizPhoto'>{this.state.selectBizObj.photo}</div> */}
          </div>
        </InfoWindow>
        <img src="./Capstone_Assets/logoPNG.png" className="logo-bottom" alt="friendly logo"/>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: my_key
})(MapContainer)

