import './Header.css';
import logo from '../logo.png';

const Header = () => {
    return ( 
        <header>
            <img alt="logo" className="logo" src={logo}/>
            <div className="fill-remaining-space"></div>
            <ul>
                <li><a href="#about">Purchase</a></li>
                <li><a href="#contact">My Orders</a></li>
                <li><a href="#news">Sells</a></li>
            </ul>
        </header>
     );
}
 
export default Header;
