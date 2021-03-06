import './DetailsPage.css';
import { useState, useContext, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import NotFound from '../NotFound/NotFound';
import useFetch from '../../helpers/useFetch';
import Button from '../Button/Button';
import { ListPageContext } from "../../helpers/appContext";
import logo from '../../logo.png';

const Details = () => {
    const {stockNumber} = useParams();
    const ROOT_URL = "https://auto1-mock-server.herokuapp.com/api/cars/";
    const {data: carDetails, error, isPending } = useFetch(ROOT_URL+stockNumber);
    const { savedCars, setSavedCars } = useContext(ListPageContext);
    const [btnValue, setBtnValue] = useState("Save")
    const errorDetails = <p>Sorry, the page you are looking for doesn't exist. <br/>You can always go back to <Link className="homepage-redirect" to = '/'> homepage</Link>.</p>

    const handleSave = (e)=>{
        if(savedCars.includes(stockNumber) && btnValue==="Saved"){
            setSavedCars(prev=>prev.filter(carStockNumber=>carStockNumber!==stockNumber));
            setBtnValue("Save");
        }
        else if(!savedCars.includes(stockNumber) && btnValue==="Save"){
            setSavedCars(prev=>[...prev, stockNumber]);
            setBtnValue("Saved");
        }
        window.localStorage.setItem("savedCars", JSON.stringify(savedCars))
    }
    useEffect(()=>{
        savedCars.includes(stockNumber)?setBtnValue("Saved"):setBtnValue("Save");
    },[savedCars, stockNumber])

    return ( 
        <div data-testid="details-page" className="details-container">
            {error? (<NotFound  errorType="404 - Not Found" errorDetails={errorDetails} brandLogo={logo} />):
            isPending ? (<div className="details-loader"><img alt="Loader" src="https://i.gifer.com/ZZ5H.gif" /></div>) :
                (
                    <article className="content-wrapper">
                        <div className="banner-img">
                            <img alt="banner" src={carDetails.car.pictureUrl}/>
                        </div>
                        <div className="detail-wrapper">
                            <summary className="details">
                                <p className="header">{carDetails.car.modelName}</p>
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
                                <Button value={btnValue} click={handleSave}/>
                            </div>
                        </div>
                    </article>
                )
            }
        </div>
     );
}
 
export default Details;
