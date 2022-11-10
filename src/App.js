import { useContext, useEffect, useState } from 'react';
import './App.scss';
import BackgroundData from './components/BackgroundData/BackgroundData';
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo.jsx';
import { SearchBar } from './components/SearchBar';
import useFetch from './hooks/customFetch/useFetch';
import weatherContext from './provider/WeatherContext';
import { WeeklyForecast } from './components/WeeklyForecast';

const url = process.env.REACT_APP_BASE_URL;
const key = process.env.REACT_APP_SECRET_KEY;

function App() {
  const {
    list, cityName, places, setIsShow, isShow,
  } = useContext(weatherContext);
  const [dataCity, setDataCity] = useState();

  const citiesData = useFetch(`${url}/search.json?key=${key}&q=${list}`);
  const cityData = useFetch(`${url}/current.json?key=${key}&q=${cityName}`);

  useEffect(() => {
    setDataCity(cityData.data);
    if (places) setIsShow(false);
  }, [cityData]);

  return (
    <>
    {cityData.data && <BackgroundVideo weatherData={cityData.data.current}/>}
    {
      isShow ? <SearchBar citiesData={citiesData} places={places} />
        : <BackgroundData {...dataCity} isShow={isShow}
      />
    }
    <div className="forecastContainer">
        {cityData.data && <WeeklyForecast locationData={cityData.data.location}/>}
    </div>
    </>
  );
}

export default App;
