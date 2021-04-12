import './Footer.css'
const Footer = ({footerBody=""}) => {
    return ( 
        <>
            <footer data-testid ="footer" className="cp-text">
               {footerBody}
            </footer>
        </>
     );
}
 
export default Footer;
