import React, { Component } from 'react';
import BottomNav from './BottomNav';

export default class Home extends Component {
  render() {
    return (
      <div className="home-view">
        <div className='home-view__main'>
          <div className='heading'>
            The Friendly Story
          </div>
          <div className='overview'>
            <p>Friendly was created to arm consumers with information, making it easier 
            to spend with the businesses that best align with their own personal values.</p>
            
            <p>With Friendly, you can easily see which businesses nearby have 
            scored highest for being LGBTQ-friendly based on comprehensive 3rd party 
            research.</p>

            <p>In the future, Friendly could eventually provide consumers with information 
            on which businesses are the most Access-friendly, 
            Senior-friendly or even extending beyond human rights, the most Eco-friendly.</p>
            <p>So, who's up for making the world a little more <span>friendly</span>?</p>
          </div>
        </div> 
        <div className="bottomNav">
          <BottomNav />
        </div>     
      </div>
    );  
  }
}
