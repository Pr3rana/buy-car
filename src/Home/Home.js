import { useEffect, useState } from 'react';
import Loader from "../Loader/Loader";
import DropdownFilter from '../DropdownFilter/DropdownFilter';
import List from '../List/List';
import './Home.css';

export default function Home(){
    const [data, setData] = useState([]);
    const [availableFilters, setAvailableFilters] = useState([{color:["red","blue"], manufacturer:["fiat", "honda"]}]);
    const [selectedFilter, setSelectedFilter] = useState([{color:["red"], manufacturer:[]}]);
    const [isFetched, setIsFetched] = useState(false);
    const [pagenumber, setPagenumber] = useState(1);
    const ROOT_URL = "https://auto1-mock-server.herokuapp.com/api/cars"

    const handleSelect = ()=>{

    }

    const handleFilter = ()=>{
        setIsFetched(true)
    }

    useEffect(()=>{
        fetch(`${ROOT_URL}?page=${pagenumber}`).then((res)=>{
        return res.json()
        })
        .then((data)=>setData(data.cars))
        .catch((err)=>console.error(err))
    })
    return(
        <div className="content">
            <div className="filter-wrapper">
                <DropdownFilter availableFilters={availableFilters} click={handleSelect}/>
                <DropdownFilter/>
                <button onClick={handleFilter}>Filter</button>
            </div>
            <div className="list-wrapper">
                <h3>Available Cars</h3>
                <p>Showing 10 out of 100 results</p>
                {isFetched?( <Loader/>):
                (<List cars={data}/>)}
            </div>
        </div>
    )
}
