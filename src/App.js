import { useContext, useEffect, useState } from 'react';
import './App.css';
import BackgroundData from './components/Cards/BackgroundData';
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo.jsx';
import { SearchBar } from './components/SearchBar';
import useFetch from './hooks/customFetch/useFetch';
import weatherContext from './provider/WeatherContext';

function App() {
  const {
    list, cityName, places, clima,
  } = useContext(weatherContext);
  const [dataCity, setDataCity] = useState();

  const citiesData = useFetch(`http://api.weatherapi.com/v1/search.json?key=feb6eb809bb34569b51171058222109&q=${list}`);
  const cityData = useFetch(`http://api.weatherapi.com/v1/current.json?key=feb6eb809bb34569b51171058222109&q=${cityName}`);
  const cityClima = useFetch(`http://api.weatherapi.com/v1/forecast.json?key=6be8c28794924ed8a2a184922222905&q=${clima}&days=1&aqi=no&alerts=no`);
  console.log(cityClima);

  useEffect(() => {
    setDataCity(cityData.data);
  }, [cityData]);

  console.log(cityData.data);
  return (
    <>
      {/* <BackgroundVideo /> */}
      <SearchBar citiesData={citiesData} places={places} />
      <BackgroundData {...dataCity} />
    </>
  );
}

export default App;
