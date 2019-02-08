import React from 'react';
import VidSlot from './VidSlot';
import {Link} from 'react-router-dom';


export default class MainSidebar extends React.Component {

    render() {

        let videos = this.props.side;
        
        return (
            <div className="main__sideBar">
                 <div className="vidQueue">
                    <div className="sidebar-heading">Up next</div>
                    {videos.map( video => <Link to={"/videos/"+video.id}><VidSlot image={video.image}
                                            title={video.title}
                                            channel={video.channel}
                                            views={parseFloat(video.views).toLocaleString('en')}
                                            duration={video.duration}
                                            /></Link>)
                    }
                </div>
            </div>
        );
    }
}


