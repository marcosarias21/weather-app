import { useContext, useEffect } from 'react';
import { weekDayTemperature } from '../../helpers/weekData';
import useFetch from '../../hooks/customFetch/useFetch';
import weatherContext from '../../provider/WeatherContext';
import { WeekDay } from '../WeekDay';
import './style.css';

const WeeklyForecast = ({ locationData, weekData }) => {
  if (!locationData || !weekData) return null;
  const { setWeekData } = useContext(weatherContext);
  const { lat, lon } = locationData;
  console.log(lat, lon);
  const { data } = useFetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=4fff37ecb0c5f3a090a2ae2e3ead9fbf&units=metric`);
  useEffect(() => {
    if (data) {
      setWeekData(weekDayTemperature(data));
    }
  }, [data]);
  console.log(weekData);

  return (
    <div className='weekForecast' data-testid='weeklyId' id='week'>{weekData.length && weekData.map((dayInfo, index) => {
      return <WeekDay key={index} {...dayInfo} data-testid='weekday' />;
    })}</div>
  );
};

export default WeeklyForecast;
