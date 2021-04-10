import { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ListPageContext } from "./helpers/storeContext";
import './App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';
import DetailsPage from './DetailsPage/DetailsPage';
import Home from './Home/Home';
import ErrorBoundaries from './ErrorBoundaries/ErrorBoundaries';

function App() {

  const [selectedFilter, setSelectedFilter] = useState('');
  const [pagenumber, setPagenumber] = useState(1);
  const [totalCarsCount, setTotalCarsCount] = useState(null);
  const [totalPageCount, setTotalPageCount] = useState(null);
  const [savedCars, setSavedCars] = useState([]);

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
      setSavedCars
    }),
    [pagenumber, setPagenumber, selectedFilter, setSelectedFilter, totalPageCount, totalCarsCount, savedCars, setSavedCars]
  );
  
  return (
        <Router>
            <Header/>
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
                      <NotFound />
                    </Route>
                  </Switch>
              </div>
            </ListPageContext.Provider>
            </ErrorBoundaries>
            <Footer />
      </Router>
  );
}

export default App;
