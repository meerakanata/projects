import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component {

    render() {
        
        return (
            <div className="navBar">
                <div className="navBar__logo">
                    <Link to="/"><img src="../Assets/Icons/BrainFlix Logo.svg" alt="BrainFlix logo"/></Link>
                </div>
                <div className="navBar__search">
                    <form>
                        <div>
                            <input type="text" name="nameInput" id="searchField" placeholder='Search' autocomplete="off" />
                        </div>
                        <button type="submit" value="searchString">
                            <img src="../Assets/Icons/Search.svg" alt="search icon"/>
                        </button>
                    </form>
                </div>
                <div className="navBar__sharing">
                    <Link to="/uploader"><img src="../Assets/Icons/Content Upload.svg" alt="Upload Video" /></Link>
                </div>
                <div className="navBar__acctSettings">
                    <img className="crop" src="../Assets/Images/john_gibbons.jpg" alt="User Account Profile" />
                </div>
                <div className="navBar__searchMobile">
                    <form>
                        <div>
                            <input type="text" name="nameInput" id="searchField" placeholder='Search' autocomplete="off" />
                        </div>
                        <button type="submit" value="searchString">
                            <img src="../Assets/Icons/Search.svg" alt="search icon"/>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
