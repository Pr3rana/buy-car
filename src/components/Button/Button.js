import './Button.css';
const Button = ({value ="", click = ()=>{}, customClass=""}) => {
    return ( 
     <button data-testid = "default-btn" className={`default-btn ${customClass}`} onClick={click}>{value}</button>
     );
}
 
export default Button;