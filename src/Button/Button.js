import './Button.css';
const Button = ({value, click}) => {
    return ( 
        <div>
             <button className="filter-btn" onClick={click}>{value}</button>
        </div>
     );
}
 
export default Button;