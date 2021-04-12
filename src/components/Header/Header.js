import './Header.css';
import logo from '../../logo.png';

const Header = ({headerNavList=[], brandLogo=logo}) => {
    return ( 
        <header data-testid="header">
            <img data-testid ="brand-logo" alt="brand-logo" className="logo" src={brandLogo}/>
            <div className="fill-remaining-space"></div>
            {headerNavList.length>0 && <ul data-testid ="header-list-container">
               {
                   headerNavList.map((nav,index)=>(
                    <li data-testid ="header-list-item" key={index}><a href="/" onClick={(e)=>e.preventDefault()}>{nav}</a></li>
                   ))
               }
            </ul>}
        </header>
     );
}
 
export default Header;
