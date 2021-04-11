import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';
import logo from '../../logo.png';

const NotFound = ()=>{
    return(
        <div className="error-main">
            <img alt="logo" className="logo" src={logo}/>
            <p className="error-type">404 - Not Found</p>
            <p>
                Sorry, the page you are looking for doesn't exist. <br/>
                You can always go back to <Link to = '/'>homepage</Link>.
            </p>
        </div>
    );
}
export default NotFound;
