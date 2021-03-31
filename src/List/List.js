import Pagination from '../Pagination/Pageination';
import {Link} from 'react-router-dom';
import './List.css';

function List({cars}){
    return ( 
        <div className="listContainer list-wrapper">
            <h3>Available Cars</h3>
            <p>Showing 10 out of 100 results</p>
            {cars.map((car,index)=>(
                <div className="list" key={index}>
                    <img alt="alt-text" className="product-icon" src={car.pictureUrl}/>
                    <div className="listContent">
                        <h3>{car.modelName}</h3>
                        <p className="product-key-details">
                            <span>{car.stockNumber}-</span>
                            <span>{car.mileage.number + car.mileage.unit}-</span>
                            <span>{car.fuelType}-</span>
                            <span>{car.color}</span>
                        </p>
                        <Link to = {`/details/${car.stockNumber}`}>
                            <p className="deatils-link">View details</p>
                        </Link>
                    </div>
                </div>
            ))}
             <Pagination/>
        </div>
     );
}
 
export default List;
