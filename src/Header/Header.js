import './Header.css';
import logo from '../logo.png';

const Header = () => {
    return ( 
        <header>
            <img alt="logo" className="logo" src={logo}/>
            <div className="fill-remaining-space"></div>
            <ul>
                <li><a href="javascript:void(0)">Purchase</a></li>
                <li><a href="javascript:void(0)">My Orders</a></li>
                <li><a href="javascript:void(0)">Sells</a></li>
            </ul>
        </header>
     );
}
 
export default Header;
