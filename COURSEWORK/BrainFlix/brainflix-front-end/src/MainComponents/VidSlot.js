import React from 'react';

export default class VidSlot extends React.Component {

    render() {
        
        return (
            <div className="vidSlot">
                <div className="duration">{ this.props.duration } </div>
                <img className="vidThumbs" src={ this.props.image } alt={'image of ' + this.props.image} />
                <p className="textBox">
                    <div className="title">{ this.props.title}</div>
                    <div className="sportsOrg">{ this.props.channel}</div>
                    <div className="viewsServed"> { this.props.views } </div>
                </p>
            </div>
        );
    }
}
