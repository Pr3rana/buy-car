import React from 'react';
import './NotFound.css';
import logo from '../../logo.png';

const NotFound = ({errorType="Error", errorDetails=null, brandLogo = logo})=>{
    return(
        <div data-testid = "not-found" className="error-main">
            <img alt="logo" className="logo" src={brandLogo}/>
            <p className="error-type">{errorType}</p>
            {errorDetails}
        </div>
    );
}
export default NotFound;
