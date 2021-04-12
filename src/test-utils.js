import React from 'react';
import { render } from '@testing-library/react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'; 
import { ListPageContext } from "./helpers/appContext";

export const carData = {
    cars: [{"stockNumber":10000,"manufacturerName":"Tesla","modelName":"Model S","color":"silver","mileage":{"number":151884,"unit":"km"},"fuelType":"Diesel","pictureUrl":"https://auto1-js-task-api--mufasa71.repl.co/images/car.svg"}],
    totalPageCount:100,
    totalCarsCount:1000
}
export const isFetched = false;
const setTotalCarsCount = jest.fn();
const setTotalPageCount = jest.fn();
const setPagenumber = jest.fn();
const setSelectedFilter = jest.fn();
const setSavedCars = jest.fn();
const setAvailableFilters = jest.fn();
const setFilterParams = jest.fn();

const pageContextProvider = {totalCarsCount:1,
    setTotalCarsCount,
    totalPageCount:2,
    setTotalPageCount,
    pagenumber:1,
    setPagenumber,
    selectedFilter:[{}],
    setSelectedFilter,
    savedCars:[],
    setSavedCars,
    availableFilters:{test:["test value"]},
    setAvailableFilters,
    filterParams: [{test:"test filter value"}],
    setFilterParams
}

const AllTheProviders = ({ children }) => {
    return (
     <Router>
          <ListPageContext.Provider value={pageContextProvider}>{children}</ListPageContext.Provider>
     </Router>
    )
}

const customRender = (ui, options) => {
    render(ui, { wrapper: AllTheProviders, ...options });
};

export * from "@testing-library/react";
export { customRender as render };