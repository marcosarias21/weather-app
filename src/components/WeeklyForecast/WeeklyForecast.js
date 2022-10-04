import React from 'react';
import { weekDayTemperature } from '../../helpers/weekData';
import useFetch from '../../hooks/customFetch/useFetch';
import { useStyleContext } from '../../provider/styleProviders';
import { WeekDay } from '../WeekDay';
import './style.css';

const WeeklyForecast = ({ locationData }) => {
  const style = useStyleContext();

  const { lat, lon } = locationData;
  const { data } = useFetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=4fff37ecb0c5f3a090a2ae2e3ead9fbf&units=metric`);
  let weekData = [];
  if (data) {
    weekData = weekDayTemperature(data);
  }

  return (
    <div className='weekForecast' style={{ opacity: style.opacity }}>
      {weekData.length && weekData.map((dayInfo, index) => {
        return <WeekDay key={index} {...dayInfo}/>;
      })}
    </div>
  );
};

export default WeeklyForecast;
