import './List.css';
import { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Pagination from '../Pagination/Pageination';
import { ListPageContext } from "../../helpers/storeContext";

function List({cars}){
    const [availableCarCount, setAvailableCarCount] = useState(null);
    const [carCountLimit, setCarCountLimit] = useState(null);
    const { pagenumber, totalCarsCount } = useContext(ListPageContext);
    
    useEffect(()=>{
        setCarCountLimit(totalCarsCount > 100 ? 100 : totalCarsCount);
        setAvailableCarCount(carCountLimit <= 10 ? carCountLimit : (pagenumber*10) < carCountLimit ? (pagenumber*10) : carCountLimit);
    },[carCountLimit,pagenumber,totalCarsCount])

    return ( 
        <div className="list-container list-wrapper">
            <div className="list-header">
                <h3>Available Cars</h3>
                <p>Showing {availableCarCount} out of {carCountLimit} results</p>
            </div>
            {cars.map((car,index)=>(
                <div className="list-item" key={index}>
                    <img alt="alt-text" className="product-icon" src={car.pictureUrl}/>
                    <div className="list-item-content">
                        <h3>{car.modelName}</h3>
                        <p className="item-key-details">
                            <span>{car.stockNumber} - </span>
                            <span>{car.mileage.number +" " + car.mileage.unit} - </span>
                            <span>{car.fuelType} - </span>
                            <span>{car.color}</span>
                        </p>
                        <Link className="deatils-link" to = {`/details/${car.stockNumber}`}>
                            <span>View details</span>
                        </Link>
                    </div>
                </div>
            ))}
             <Pagination/>
        </div>
     );
}
 
export default List;
