import './Loader.css';
const Loader = ({ cars=[] }) => {
    return ( 
        <div data-testid="loader-list-container" className="loader-list-container list-wrapper">
            <div className="list-header">
                <h3>Available Cars</h3>
                <p className="medium"></p>
            </div>
            {cars.map((car,index)=>(
                <div className="loader-list-item" key={index}>
                    <div className="product-icon"></div>
                    <div className="list-item-content">
                        <p className="medium"></p>
                        <p className="medium"></p>
                        <p className="small"></p>
                    </div>
                </div>
            ))}
            <div className="loader-pagination-container">
                <span className="medium"></span>
            </div>
        </div>
    );
}
 
export default Loader;
