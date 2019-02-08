import React from 'react';
import MainBody from './MainBody.js';
import MainSidebar from './MainSidebar.js';

export default class Main extends React.Component {

    state = {
        sideVids: [],
        expandedVids: {
            comments: [
                {
                    name: "",
                    comment: "",
                    id: "",
                    timestamp: "",
                }
            ]
        },
    }

    componentDidMount () {
        const targetId = this.props.vidId;
        this.fetchCall(targetId); 
    }

    componentDidUpdate (prevProps, prevState){

        let baseURL = 'http://localhost:8080';
        let vidsData = '/videos';
        let newID = this.props.vidId; //ID from the URL
        let existingID = prevState.expandedVids.id //ID from existing state
            
        if(existingID !== Number(newID)) {
            
            fetch (baseURL+vidsData+'/'+newID) 
            .then ((response) => {
                return response.json();
            }).then((data) => {
                this.setState({
                    expandedVids: data,
                })
            }).catch((err) => {
                console.error("You've encountered an error with the second fetch: ", err);
            });
        }
    }



    fetchCall = (id) => {

        let baseURL = 'http://localhost:8080';
        let vidsData = '/videos';

        fetch(baseURL+vidsData).then((response) => {
        return response.json();
        }).then((data) => {
            this.setState({
                sideVids: data,
            })
        }).catch((err) => {
                console.error("You've encountered an error with the fetch: ", err);
            });

        fetch (baseURL+vidsData+'/'+id) 
        .then ((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                expandedVids: data,
            })
        }).catch((err) => {
            console.error("You've encountered an error with the fetch: ", err);
        });
    }
    
    submitHandler = (obj) => {

        let baseURL = 'http://localhost:8080';
        let vidsData = '/videos';
        const id = this.props.vidId;

        const init = {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
            'content-type': 'application/json'
            }
        };
        
        fetch(baseURL+vidsData+'/'+id+'/comments', init)
        .then((response) => {
            return response.json();
        }).then((data) => {
        return fetch (baseURL+vidsData+'/'+id)}) 
        .then ((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                expandedVids: data,
            })
        }).catch((err) => {
            console.error("You've encountered an error with the comments fetch: ", err);
        });
    }

    render() {
        return (
            <div className="main">
            <MainBody mainVid={this.state.expandedVids} submitHandler={this.submitHandler}  />
            <MainSidebar side={this.state.sideVids} /> 
            </div>
        );
    }
}


