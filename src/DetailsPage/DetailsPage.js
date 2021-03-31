import './DetailsPage.css';
import useFetch from '../helpers/useFetch';
import { useParams } from "react-router-dom";

const Details = () => {
    const {stockNumber} = useParams()
    const ROOT_URL = "https://auto1-mock-server.herokuapp.com/api/cars/";
    const {data: carDetails, error, isPending} = useFetch(ROOT_URL+stockNumber);
    console.log(carDetails, "carDetails")
    // const routingHistory = useHistory()

    return ( 
        <div className="details-container">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {carDetails &&
                <article>
                    <div className="banner-img">
                        <img alt="banner" src={carDetails.pictureUrl}/>
                    </div>
                    <div className="content-wrapper">
                        <summary>
                            <h2>{carDetails.modelName}</h2>
                            <p className="product-key-details">
                                <span>{carDetails.stockNumber}-</span>
                                {/* <span>{carDetails.mileage.number + carDetails.mileage.unit}-</span> */}
                                <span>{carDetails.fuelType}-</span>
                                <span>{carDetails.color}</span>
                            </p>
                            <p>
                                This car is currently available and can be delivered as soon as tomorrow morning.
                            </p>
                        </summary>

                        <div>Div2</div>
                    </div>
                </article>
            }
        </div>
     );
}
 
export default Details;
