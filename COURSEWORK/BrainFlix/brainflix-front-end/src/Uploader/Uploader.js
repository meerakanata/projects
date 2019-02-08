import React from 'react';
import {Link} from 'react-router-dom';

export default class Uploader extends React.Component {

    render() {

        return (

            <div className="uploaderContainer">
                <Link to="/uploadform">
                    <div className="uploaderContainer__img">
                        <img src="./Assets/Icons/Large Upload.svg" alt="upload a video"/>
                        <div className="uploaderContainer__heading">
                            Select files to upload
                        </div>
                        <div className="uploaderContainer__info">
                            Or drag and drop video files
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}