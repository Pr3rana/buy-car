import './Button.css';
const Button = ({value, click, customClass=""}) => {
    return ( 
     <button className={`default-btn ${customClass}`} onClick={click}>{value}</button>
     );
}
 
export default Button;