import './DropdownFilter.css';
import React, { useState, useContext, useEffect} from 'react';
import { ListPageContext } from "../helpers/storeContext";
import AutoSuggestPanel from './AutoSuggestPanel'
import Button from '../Button/Button';

function Dropdown({filters, select}){
    const availableFilterTypes = Object.keys(filters);
    const [defaultSelect, setDefaultSelect] = useState("");
    const typeRefs = {};
    availableFilterTypes.forEach((type,index)=>{
      typeRefs[type] = React.createRef(null)
    });
    return (
        <>
        {availableFilterTypes.map((type,index)=>(
            <div  className="custom-select" key={index}>
                <p>{type}</p>
                <div className="default-selected-item" onClick={()=>typeRefs[type].current.style.display!==""?typeRefs[type].current.style.display="":typeRefs[type].current.style.display="block"}>All {type}</div>
                <AutoSuggestPanel ref={typeRefs[type]} list={filters[type]} onClick={select} type={type}/>
            </div>)
        )}
        </>
    )
}
export default function Filter() {
    // const [filtersType] = useState(["Color", "Manufacturers"]);
    const [availableFilters, setAvailableFilters] = useState({});
    // const [availableManufacturersFilters, setAvailableManufacturersFilters] = useState([]);
    const [filterParams, setFilterParams] = useState({});
    const {setPagenumber, setSelectedFilter} = useContext(ListPageContext);
    const ROOT_URL = "https://auto1-mock-server.herokuapp.com/api";
    // const {data: colors} = useFetch(ROOT_URL+"/colors");
    // const {data: manufacturer} = useFetch(ROOT_URL+"/manufacturer");

    const handleSelect = (e)=>{
        // console.log(e.target)
        const type = e.target.getAttribute("data-filter-type").toLowerCase();
        const value = e.target.innerText.toLowerCase();
        setFilterParams({...filterParams, [type]:value})
    }

    const handleFilter = ()=>{
        console.log(filterParams, "filters")
        let params = ''
        for(let key in filterParams){
            params+=`${key}=${filterParams[key]}&`
        }
        setPagenumber(1);
        setSelectedFilter(params)
    }
    
    useEffect(()=>{
        async function fetchFilterData(){
            let [ colors, manufacturers ]  =  await Promise.all([
                fetch(`${ROOT_URL}/colors`).then(value => value.json()),
                fetch(`${ROOT_URL}/manufacturers`).then(value => value.json())
            ])
            // setAvailableColorFilters(colors.colors);
            const listOfManufacturers = manufacturers.manufacturers.map(key=>key.name)
            // setAvailableManufacturersFilters(listOfManufacturers);
            setAvailableFilters({Color:colors.colors, Manufacturer: listOfManufacturers})
        }
        fetchFilterData()
    },[])
    return ( 
        <div className="filter-wrapper">
            <Dropdown filters={availableFilters} select={handleSelect}/>
            <Button value="Filter" click={handleFilter}/>
        </div>
     );
}
