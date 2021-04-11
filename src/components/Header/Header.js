import './Header.css';
import logo from '../../logo.png';

const Header = () => {
    return ( 
        <header>
            <img alt="logo" className="logo" src={logo}/>
            <div className="fill-remaining-space"></div>
            <ul>
                <li><a href="/" onClick={(e)=>e.preventDefault()}>Purchase</a></li>
                <li><a href="/" onClick={(e)=>e.preventDefault()}>My Orders</a></li>
                <li><a href="/" onClick={(e)=>e.preventDefault()}>Sells</a></li>
            </ul>
        </header>
     );
}
 
export default Header;