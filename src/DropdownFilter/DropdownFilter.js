import './DropdownFilter.css';
import { useState, useContext, useEffect} from 'react';
import { ListPageContext } from "../helpers/storeContext";
// import useFetch from '../helpers/useFetch';

export default function Dropdown() {
    const [filtersType] = useState(["Color"]);
    const [availableFilters, setAvailableFilters] = useState(null)
    const [filterParams, setFilterParams] = useState({});
    const {setPagenumber, setSelectedFilter} = useContext(ListPageContext);
    const ROOT_URL = "https://auto1-mock-server.herokuapp.com/api";
    // const {data: colors} = useFetch(ROOT_URL+"/colors");
    // const {data: manufacturer} = useFetch(ROOT_URL+"/manufacturer");

    const handleSelect = (e)=>{
        const type = e.target.getAttribute("data-filter-type").toLowerCase();
        const value = e.target.value.toLowerCase();
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
            let [colors ]  =  await Promise.all([
                fetch(`${ROOT_URL}/colors`).then(value => value.json()),
                // fetch(`${ROOT_URL}/manufacturers`).then(value => value.json())
            ])
            setAvailableFilters({Color: colors.colors});
        }
        fetchFilterData()
    },[])
    return ( 
        <div className="filter-wrapper">
        {filtersType.map((type)=>(
            <div className="filter" key={type}>
                <h3>{type}</h3>
                <select data-filter-type = {type} onChange={handleSelect}>
                    {availableFilters && availableFilters[type].map((value)=>(
                        <option value={value} key={value}>{value}</option>
                    )
                )}
                </select>
            </div>
        ))}
        <button onClick={handleFilter}>Filter</button>
        </div>
     );
}
