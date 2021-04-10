import './DropdownFilter.css';
import React, { useState, useContext, useEffect } from 'react';
import { ListPageContext } from "../helpers/storeContext";
import AutoSuggestPanel from './AutoSuggestPanel'
import Button from '../Button/Button';

export default function Filter() {
    const [availableFilters, setAvailableFilters] = useState({});
    const [filterParams, setFilterParams] = useState({});
    const {setPagenumber, setSelectedFilter} = useContext(ListPageContext);
    const ROOT_URL = "https://auto1-mock-server.herokuapp.com/api";
    const typeRefs = {};
    Object.keys(availableFilters).forEach((type,index)=>{
        typeRefs[type] = React.createRef(null);
        typeRefs[type+"Default"] = React.createRef(null);
    })

    const handleSelect = (e)=>{
        const type = e.target.getAttribute("data-filter-type");
        const value = e.target.innerText.toLowerCase();
        setFilterParams({...filterParams, [type.toLowerCase()]:value});
        console.log(e.target.previousSibling, "prev")
        typeRefs[type+"Default"].current.innerText = value;
        if(typeRefs[type].current.style.display!==""){
            typeRefs[type].current.style.display="";
            typeRefs[type+"Default"].current.className = "default-selected-item";
        }
        else {
            typeRefs[type].current.style.display="block";
            typeRefs[type+"Default"].current.className+=' select-arrow-active';
        }
    }

    const handleFilterClick = (e)=>{
        const type = e.target.getAttribute("data-type");
        if(typeRefs[type].current.style.display!==""){
            typeRefs[type].current.style.display="";
            typeRefs[type+"Default"].current.className = "default-selected-item";
        }
        else{
            typeRefs[type].current.style.display="block";
            typeRefs[type+"Default"].current.className+=' select-arrow-active';
        }
        // select-arrow-active
    }

    const applyFilter = (e)=>{
        if(Object.keys(filterParams).length === 0){
            e.stopPropagation();
            return
        }
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
            const listOfManufacturers = manufacturers.manufacturers.map(key=>key.name)
            setAvailableFilters({Color:colors.colors, Manufacturer: listOfManufacturers});
        }
        fetchFilterData()
    },[]);
    
    return ( 
        <div className="filter-wrapper">
            {Object.keys(availableFilters).map((type,index)=>(
                <div className="custom-select" key={type}>
                    <p className="filter-type">{type}</p>
                    <div ref={typeRefs[type+"Default"]} className="default-selected-item" onClick={handleFilterClick} data-type={type}>All {type}</div>
                    <AutoSuggestPanel ref={typeRefs[type]} key={index} filterData={availableFilters[type]} type={type} select={handleSelect}/>
                </div>
            ))}
            <Button customClass="filter-btn" value="Filter" click={applyFilter}/>
        </div>
     );
}
