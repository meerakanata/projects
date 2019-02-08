import React from 'react';
import Comments from './Comments';

export default class MainBody extends React.Component {
    
    render() {
        
        let apiKey = '?api_key=4f2fd23e-350e-4fc3-928a-3d4f01fa72fd';
        let vidObj = this.props.mainVid;
 
        return (
            <div className="main__body">
                <div className="vidPlayer">
                    <video controls muted
                        src={vidObj.video+apiKey}>
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                    <div className="vidDescription">
                    {vidObj.title}
                    </div>
                    <div className="vidMetrics">
                        <div className="vidMetrics__views">
                            {parseFloat(vidObj.views).toLocaleString('en')} views
                        </div>
                        <div className="vidMetrics__actions">
                            <div className="likes">
                                <img src="../Assets/Icons/Thumbs Up.svg" alt="thumbs up icon" />
                                <div>{parseFloat(vidObj.thumbsUp).toLocaleString('en')}</div>
                            </div>
                            <div className="dislikes">
                                <img src="../Assets/Icons/Thumbs Down.svg" alt="thumbs down icon" />
                                <div>{parseFloat(vidObj.thumbsDown).toLocaleString('en')}</div>
                            </div>
                            <div className="shares">
                                <img src="../Assets/Icons/Share.svg" alt="share video icon" />
                                <div>SHARE</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="descriptionSection">
                <div>
                    <div className="row1">
                        <div className="row1__sourceInfo">
                            <div className="sourcePic"></div>
                            <div className="sourceName">
                                <div className="name">
                                {vidObj.channel}
                                </div>
                                <div className="publishedOn">
                                    Published on Oct 14, 2015
                                </div>
                            </div>
                        </div>
                        <div className="row1__subscribe">
                            <div className="button-container">
                                <div className="subLeft">
                                    SUBSCRIBE
                                </div>
                                <div className="subRight">
                                {vidObj.subscriberCount}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="comment">
                        {vidObj.description}
                        </div>
                    </div>
                    <div className="row3">
                        <div className="showMore"> 
                            SHOW MORE
                        </div>
                        <div className="bottomDivider"></div>
                    </div>
                </div>
            </div>
                <div>
                    <Comments submitHandler={this.props.submitHandler} mainVidComms={this.props.mainVid.comments}/>
                </div>
            </div>
        );
    }
}

