import { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ListPageContext } from "./helpers/storeContext";
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import DetailsPage from './components/DetailsPage/DetailsPage';
import Home from './components/Home/Home';
import ErrorBoundaries from './components/ErrorBoundaries/ErrorBoundaries';
import logo from './logo.png';

function App() {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [pagenumber, setPagenumber] = useState(1);
  const [totalCarsCount, setTotalCarsCount] = useState(null);
  const [totalPageCount, setTotalPageCount] = useState(null);
  const savedCarInstorage = JSON.parse(localStorage.getItem('items'));
  const [savedCars, setSavedCars] = useState([] || savedCarInstorage);
  const [availableFilters, setAvailableFilters] = useState({});
  const [filterParams, setFilterParams] = useState({});
  const [headerNavList] = useState([ "Purchase", "My Orders", "Sells" ])
  const pageContextProvider = useMemo(
    () => ({
      totalCarsCount,
      setTotalCarsCount,
      totalPageCount,
      setTotalPageCount,
      pagenumber,
      setPagenumber,
      selectedFilter,
      setSelectedFilter,
      savedCars,
      setSavedCars,
      availableFilters,
      setAvailableFilters,
      filterParams,
      setFilterParams
    }),
    [pagenumber, setPagenumber, selectedFilter, setSelectedFilter, totalPageCount, totalCarsCount, savedCars, setSavedCars, availableFilters, filterParams,]
  );
  const errorDetails = <p>Sorry, the page you are looking for doesn't exist. <br/>You can always go back to <Link className="homepage-redirect" to = '/'> homepage</Link>.</p>

  useEffect(() => {
    const savedCars = JSON.parse(localStorage.getItem('savedCars'));
    if (savedCars) {
      setSavedCars(savedCars);
    }
  }, []);

  useEffect(()=>{
    window.localStorage.setItem("savedCars", JSON.stringify(savedCars))
  },[savedCars])
  
  return (
        <Router>
            <Header headerNavList={headerNavList} brandLogo={logo}/>
            <ErrorBoundaries>
            <ListPageContext.Provider value={pageContextProvider}>
              <div className="main">
                  <Switch>
                    <Route exact path = "/">
                      <Home/>
                    </Route>
                    <Route exact path = "/details/:stockNumber">
                      <DetailsPage/>
                    </Route>
                    <Route exact path = "*">
                      <NotFound errorType="404 - Not Found" errorDetails={errorDetails} brandLogo={logo} />
                    </Route>
                  </Switch>
              </div>
            </ListPageContext.Provider>
            </ErrorBoundaries>
            <Footer footerBody=" © Auto1 Group 2018" />
      </Router>
  );
}

export default App;
