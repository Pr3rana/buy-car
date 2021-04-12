import './DropdownFilter.css';
import React, { useContext, useEffect } from 'react';
import { ListPageContext } from "../../helpers/appContext";
import AutoSuggestPanel from './AutoSuggestPanel'
import Button from '../Button/Button';

export default function Filter() {
    const {setPagenumber, setSelectedFilter, availableFilters, setAvailableFilters, filterParams, setFilterParams} = useContext(ListPageContext);
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
    });
    
    return ( 
        <div data-testid="filter-wrapper" className="filter-wrapper">
            {Object.keys(availableFilters).length===0?(<div className="filter-loader"><img alt="Loader" src="https://i.gifer.com/ZZ5H.gif" /></div>):
            Object.keys(availableFilters).map((type,index)=>(
                <div className="custom-select" key={type}>
                    <p className="filter-type">{type}</p>
                    <div data-testid="default-filter" ref={typeRefs[type+"Default"]} className="default-selected-item" onClick={handleFilterClick} data-type={type}>All {type}</div>
                    <AutoSuggestPanel ref={typeRefs[type]} key={index} filterData={availableFilters[type]} type={type} select={handleSelect}/>
                </div>
            ))}
            <Button customClass="filter-btn" value="Filter" click={applyFilter}/>
        </div>
     );
}
