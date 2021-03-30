import './List.css';
import Pagination from '../Pagination/Pageination';
const List = ({cars}) => {
    return ( 
        <div className="listContainer">
        {cars.map((car,index)=>(
            <div className="list" key={index}>
            <img src={car.pictureUrl}/>
            <div className="listContent">
                <h3>{car.modelName}</h3>
                <p>
                    <span>{car.stockNumber}-</span>
                    <span>{car.mileage.number + car.mileage.unit}-</span>
                    <span>{car.fuelType}-</span>
                    <span>{car.color}</span>
                </p>
                <a href="#">View details</a>
            </div>
         </div>
        ))}
        <Pagination/>
        </div>
     );
}
 
export default List;
