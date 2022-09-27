import { useContext } from 'react';
import './App.css';
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo.jsx';
import { SearchBar } from './components/SearchBar';
import useFetch from './hooks/customFetch/useFetch';
import weatherContext from './provider/WeatherContext';

function App() {
  const { list, cityName, places } = useContext(weatherContext);

  const citiesData = useFetch(
    `http://api.weatherapi.com/v1/search.json?key=feb6eb809bb34569b51171058222109&q=${list}`,
  );
  const cityData = useFetch(
    `http://api.weatherapi.com/v1/current.json?key=feb6eb809bb34569b51171058222109&q=${cityName}`,
  );
  console.log(cityData.data);
  return (
    <>
      <BackgroundVideo />
      <SearchBar citiesData={citiesData} places={places} />
    </>
  );
}

export default App;
