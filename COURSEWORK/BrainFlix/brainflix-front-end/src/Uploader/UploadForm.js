import React from 'react';


export default class UploadForm extends React.Component {

    render() {

        return (
            <div className="uploadForm">
                <form id="uploadPageForm">
                    <div className="firstRow">
                        <div>Title:</div>
                        <input type="text" name="titleInput" maxlength="40" id="title" autocomplete="off"/>
                    </div>
                    <div className="secondRow">
                        <div>Description:</div>
                        <textarea type="text" name="descriptionInput" maxlength="200" id="description" autocomplete="off"/>
                    </div>
                    <div className="publishBox">
                        <button>
                            PUBLISH
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}