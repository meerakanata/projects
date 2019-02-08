import React from 'react';


export default class CommentSlot extends React.Component {

    render() {

        return (
            <div className="commentSlot">
                <div className="commentSlot__img">
                    <img className="crop" src="../Assets/Images/john_gibbons.jpg" alt="User Account Profile" />
                </div>
                <div className="commentSlot__text">
                    <div className="topRow">
                        <div className="username">{this.props.name}</div>    
                        <div className="postRecency">{this.props.timestamp}</div>   
                    </div>
                    <div className="bottomRow">{this.props.comment}</div>
                </div>
            </div> 
        );
    }
}
