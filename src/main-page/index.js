import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import { BrowserRouter as Router, Switch,  Route} from "react-router-dom";
import FeaturedHouse from './featured-house';
import SearchResults from '../search-result';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery';
import useHouses from '../hooks/useHouses';
import useFeaturedHouses from '../hooks/useFeaturedHouses';
import HouseContext from '../context/housesContext';

function App() {

  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouses(allHouses);
  
  const userName = "Providing Houses all over the world";



  return (
    <Router>
      < HouseContext.Provider value={allHouses}>
      <div className="container">
        <Header subtitle={userName} />
        <HouseFilter />
        <Switch>
            <Route exact path="/">
              <FeaturedHouse house={featuredHouse}> </FeaturedHouse>
            </Route>
            <Route path="/house/:id">
              <HouseFromQuery />
            </Route>
            <Route path="/searchresults/:country">
              <SearchResults />
            </Route>
        </Switch>  
      </div>
      </HouseContext.Provider>
    </Router>
  );
}

export default App;
