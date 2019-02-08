import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class BottomNav extends Component {

    render() {
        return (
        <div className="bottomNav">
            <Link to={"/home"}>
                <div className='bottomNav__icon'>
                    <img src='./Capstone_Assets/round-home-24px.png' alt='home view'/>
                    <p>HOME</p>
                </div>
            </Link>
            <Link to={"/search"}>
                <div className='bottomNav__icon'>
                    <img src='./Capstone_Assets/sharp-search-24px.png' alt='search view'/>
                    <p>SEARCH</p>
                </div>
            </Link>
                <div className='bottomNav__icon'>
                    <img src='./Capstone_Assets/round-feedback-24px.png' alt='suggest a business'/>
                    <p>SUGGEST</p>
                </div>
            <Link to={"/source"}>
                <div className='bottomNav__icon'>
                    <img src='./Capstone_Assets/round-info-24px.png' alt='scoring info'/>
                    <p>SCORING</p>
                </div>
            </Link>
        </div>
        );
    }
}
