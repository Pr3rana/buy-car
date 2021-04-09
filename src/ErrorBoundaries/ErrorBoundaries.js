import React from 'react';
import {Link} from 'react-router-dom';
import './ErrorBoundaries.css';
import logo from '../logo.png';

class ErrorBoundary extends React.Component{
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return(
              <div className="error-main">
                  <img alt="logo" className="logo" src={logo}/>
                  <h1>404 - Not Found</h1>
                  <p>
                      Sorry, the page you are looking for doesn't exist. <br/>
                      You can always go back to <Link to = '/'>
                            <span>homepage</span>
                        </Link>.
                  </p>
              </div>
          );
        }
    
        return this.props.children; 
      }
}
export default ErrorBoundary;
