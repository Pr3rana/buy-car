import React from 'react';
import './ErrorBoundaries.css';

class ErrorBoundaries extends React.Component{
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorInfo: null };
    }
    static getDerivedStateFromError(error) {
       return {hasError: true}
    }
    
    componentDidCatch(error, errorInfo) {
        this.setState({
            errorInfo: errorInfo
        })
    }
    render(){
        if(this.state.hasError){
            return ( 
                <div className="error-container">
                    <h3>Aww... snap!! Error Found.</h3>
                    <p>Error Found, re-check the stockNumber (if any) and/or applied filters.</p>
                    <span>{this.state.errorInfo}</span>
                </div>
             );
        }
        return this.props.children; 
    }
}
 
export default ErrorBoundaries;