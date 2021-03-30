import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer';
import ErrorBoundary from './ErrorBoundaries/ErrorBoundaries';
import DetailsPage from './DetailsPage/DetailsPage';
import Home from './Home/Home';

function App() {
  // const [availableFilters, setAvailableFilters] = useState(["color", "brand"])
  return (
      <div className="App">
        <Router>
          <ErrorBoundary>
            <Header/>
            <Switch>
              <Route exact path = "/">
                <Home/>
              </Route>
              <Route exact path = "/details/">
                <DetailsPage/>
              </Route>
            </Switch>
            <Footer/>
          </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
