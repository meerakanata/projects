import React from 'react';
import CommentSlot from './CommentSlot';

export default class Comments extends React.Component {

    constructor () {
        super();
        this.commentInput = React.createRef();
    }

    addNewComment = (e) => {

        e.preventDefault();
        let newComment = this.commentInput.current.value;

        let newCommentObj = {
            name: 'John Smith',
            comment: newComment,
            timestamp: '1530744338878',
        };

        this.props.submitHandler(newCommentObj);
        this.commentInput.current.value = '';
    }


    render() {
        let vidCommentsArr = this.props.mainVidComms;
        return (
            <div className="commentsSection">
                <div className="createCommentSection">
                    <div className="bioImage">
                        <img className="crop" src="../Assets/Images/john_gibbons.jpg" alt="User Account Profile" />
                    </div>
                    <div className="addComment">
                        <form onSubmit={this.addNewComment} className="form">
                            <div className='inputContainer'>
                                <input className='form__input' ref={this.commentInput} placeholder='Add a public comment...' autocomplete="off">
                                </input>
                            </div>
                            <div className='form__actions'>
                                <div className='cancelLink'>
                                CANCEL
                                </div>
                                <button type="submit" className='buttonStyle'>
                                    COMMENT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="postedCommentsSection">
                    { vidCommentsArr.map( comment => <CommentSlot name={comment.name}
                                                                comment={comment.comment}
                                                                timestamp={comment.timestamp}
                                                                />)}

                </div>
            </div>
        );
    }
}
