import React, { Component } from 'react';
import BottomNav from './BottomNav';

export default class SourceInfo extends Component {
  render() {
    return (
      <div className="source-view">
        <div className='source-view__main'>
          <div className='heading'>
            Corporate Equality Index
          </div>
          <div className='overview'>
            Friendly uses data from the US Human Rights Campaign Foundation’s 2018 Buyer’s Guide. The guide identifies businesses/brands that score between 80-100 as having the highest workplace equality scores.
          </div>
          <div className='title'>
            Rating Workplaces on LGBTQ Equality
          </div>
          <div className='details'>
            <p>Human Rights Campaign Foundation’s 2018 Corporate Equality Index is the national benchmarking tool on corporate policies and practices pertinent to lesbian, gay, bisexual, transgender and queer employees.</p>
            <p>In the 2018 CEI report, 609 major businesses — spanning nearly every industry and geography — earned a top score of 100 percent and the distinction of “Best Places to Work for LGBTQ Equality.”</p>
            <p>Visit www.hrc.org to learn more.</p>
          </div>
          <div className='fineprint'>
            Source: US, Human Rights Campaign Foundation, Corporate Equality Index 2018
            Available at https://www.hrc.org/
          </div>
        </div> 
        <div className="bottomNav">
          <BottomNav />
        </div>     
      </div>
    );  
  }
}
