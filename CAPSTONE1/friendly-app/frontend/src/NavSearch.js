import React, { Component } from 'react';

export default class NavSearch extends Component {
    constructor () {
        super();
        this.state = {
            inputString: '',
            homeCoordinates: {
                lat: 43.64556059999999,
                lng: -79.3954094
                }
        }
    }

    changeHandler = (event) => {
        let unvalidatedString = event.target.value;

        this.setState({
            inputString: unvalidatedString
        });
    }

    grabInput = (e) => {
        e.preventDefault();
        let newSearchString = this.state.inputString;
        let lat = this.state.homeCoordinates.lat;
        let lng = this.state.homeCoordinates.lng;

        this.props.submitHandler(newSearchString, lat, lng);
    }
    deleteInput = () => {
        //this.state.value = '';
    }

    openMenu = (e) => {
        e.preventDefault();
    }

    render() {
        return (
        <div className="navSearch">
            <div className="navSearch__panel">
                <form className="searchBar">
                    <div className="searchInputContainer">
                        <input type="text" value={this.state.value} onChange={this.changeHandler} id="searchField" placeholder='Search' autoComplete="off" />
                    </div>
                    <button onClick={this.grabInput} className="searchIcon">
                        <img src="../Capstone_Assets/sharp-search-24px.svg" alt="search button" />
                    </button>
                    <button onClick={this.deleteInput} className="closeIcon">
                        <img src="../Capstone_Assets/sharp-close-24px.svg" alt="delete search text" />
                    </button>
                </form>
            </div>
        </div>
        );
    }
}
