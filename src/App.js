import { useContext } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import useFetch from './hooks/customFetch/useFetch';
import weatherContext from './provider/WeatherContext';
import { CardPrede } from './components/Cards';

function App() {
  const {
    list, cityName, places, clima,
  } = useContext(weatherContext);

  const citiesData = useFetch(`http://api.weatherapi.com/v1/search.json?key=feb6eb809bb34569b51171058222109&q=${list}`);
  const cityData = useFetch(`http://api.weatherapi.com/v1/current.json?key=feb6eb809bb34569b51171058222109&q=${cityName}`);
  const cityClima = useFetch(`http://api.weatherapi.com/v1/forecast.json?key=6be8c28794924ed8a2a184922222905&q=${clima}&days=1&aqi=no&alerts=no`);
  console.log('Tucuman:', cityClima.data);

  return (
    <>
      { !cityClima?.loading
      && <SearchBar citiesData={citiesData} places={places} cityClima={cityClima} />
      }
    </>
  );
}

export default App;
