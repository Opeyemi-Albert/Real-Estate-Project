import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch,  Route} from "react-router-dom";
import FeaturedHouse from './featured-house';
import SearchResults from '../search-result';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery';

function App() {
  //using useState
  const [allHouses, setAllHouses ] = useState([]);
  
  //using useEffect
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("./houses.json");
      const houses = await rsp.json();
      setAllHouses(houses); 
    };
    fetchHouses();
  }, []);

  //using useMemo
  const featuredHouse = useMemo(() => {
    if (allHouses.length){
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);
  

  const userName = "Providing Houses all over the world";
  return (
    <Router>
      <div className="container">
        <Header subtitle={userName} />
        <HouseFilter allHouses={allHouses} />
        <Switch>
            <Route exact path="/">
              <FeaturedHouse house={featuredHouse}> </FeaturedHouse>
            </Route>
            <Route path="/house/:id">
              <HouseFromQuery allHouses={allHouses}/>
            </Route>
            <Route path="/searchresults/:country">
              <SearchResults allHouses={allHouses} />
            </Route>
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
