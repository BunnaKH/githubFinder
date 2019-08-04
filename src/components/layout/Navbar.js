import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({icon, title}) => {

    
        return (
            <div className="navbar bg-primary">
               <h1>
                <i className={icon}/> 
                </h1>
                <div className="title">
                {title}
                </div>
                <ul>
                    <li>
                        <Link to = '/'>HOME</Link>
                    </li>
                    <li>
                        <Link to = '/about'>ABOUT</Link>
                    </li>
                </ul> 
            </div>
        )
    
}
Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired

};
export default Navbar
