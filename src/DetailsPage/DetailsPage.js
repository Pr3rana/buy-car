import './DetailsPage.css';
import useFetch from '../helpers/useFetch';
import { useParams } from "react-router-dom";
import Button from '../Button/Button';
import { useEffect, useState } from 'react';

const Details = () => {
    const {stockNumber} = useParams();
    // const [savedCars, setSavedCars] = [];
    const ROOT_URL = "https://auto1-mock-server.herokuapp.com/api/cars/";
    const {data: carDetails, error, isPending} = useFetch(ROOT_URL+stockNumber);
    const [btnValue, setBtnValue] = useState("Save")
    
    const handleSave = (e)=>{
        e.target.innerText = "Saved"
        // setSavedCars([...savedCars, carDetails.car.modelName]);
    }
    // useEffect(()=>{
    //     savedCars.includes(carDetails.car.modelName)?setBtnValue("Saved"):setBtnValue("Save")
    // })

    return ( 
        <div className="details-container">
            {error && <div>{error}</div>}
            {isPending? <div>Loading....</div>:
                (
                    <article>
                        <div className="banner-img">
                            <img alt="banner" src={carDetails.car.pictureUrl}/>
                        </div>
                        <div className="content-wrapper">
                            <summary className="details">
                                <h1>{carDetails.car.modelName}</h1>
                                <p className="product-key-details">
                                    <span>Stock # {carDetails.car.stockNumber} - </span>
                                    <span>{carDetails.car.mileage.number + carDetails.car.mileage.unit} - </span>
                                    <span>{carDetails.car.fuelType} - </span>
                                    <span>{carDetails.car.color}</span>
                                </p>
                                <p>
                                    This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that the delivery times shown in this page are not definitive and may change due to a bad weather conditions.
                                </p>
                            </summary>

                            <div className="details-favourite">
                                <p>If you like the car, click the button and save it in your collection of favourite items.</p>
                                <Button value="Save" click={handleSave}/>
                            </div>
                        </div>
                    </article>
                )
            }
        </div>
     );
}
 
export default Details;
