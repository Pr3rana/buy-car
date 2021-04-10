import { useContext } from 'react';
// import {Link} from 'react-router-dom';
import Pagination from '../Pagination/Pageination';
import { ListPageContext } from "../helpers/storeContext";
import './Loader.css';

const Loader = ({ cars }) => {
    const { pagenumber } = useContext(ListPageContext);
    return ( 
        <div className="loader-list-container list-wrapper">
            <div className="list-header">
                <h3>Available Cars</h3>
                <p></p>
            </div>
            {cars.map((car,index)=>(
                <div className="loader-list" key={index}>
                    <div className="product-icon"></div>
                    <div className="list-content">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            ))}
            <div className="loader-pagination-container">
                <span></span>
            </div>
        </div>
    );
}
 
export default Loader;
