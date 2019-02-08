import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Launch extends Component {
  render() {
    return (
      <div className='launch'>
        <div className="navButtonForward">
          <Link to={"/search"}><img src="./Capstone_Assets/sharp-arrow_forward_ios-24px_darkpurple.png" alt="next page arrow" /></Link>
        </div>
      </div>
    );
  }
}