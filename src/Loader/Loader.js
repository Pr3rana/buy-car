import { useContext } from 'react';
// import {Link} from 'react-router-dom';
import Pagination from '../Pagination/Pageination';
import { ListPageContext } from "../helpers/storeContext";
import './Loader.css';

const Loader = ({ cars }) => {
    const { pagenumber } = useContext(ListPageContext);
    return ( 
        <div>
            <div className="listContainer list-wrapper">
                <div>
                    <h3>Available Cars</h3>
                    <p>Showing {pagenumber*10} out of 100 results</p>
                </div>
                {cars.map((car,index)=>(
                    <div className="list" key={index}>
                        <img alt="alt-text" className="product-icon" />
                        <div className="listContent">
                            <h3></h3>
                            <p className="product-key-details">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </p>
                            <p className="deatils-link">View details</p>
                        </div>
                    </div>
                ))}
                <Pagination />
            </div>
        </div>
    );
}
 
export default Loader;
