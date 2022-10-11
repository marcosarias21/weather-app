import React from 'react';
import Marquee from 'react-fast-marquee';
import { weekDayTemperature } from '../../helpers/weekData';
import useFetch from '../../hooks/customFetch/useFetch';
import { useStyleContext } from '../../provider/styleProviders';
import { WeekDay } from '../WeekDay';
import './style.scss';

const url = process.env.REACT_APP_FORECAST_URL;
const key = process.env.REACT_APP_FORECAST_KEY;

const WeeklyForecast = ({ locationData }) => {
  if (!locationData) return null;
  const style = useStyleContext();
  const { lat, lon } = locationData;
  const { data } = useFetch(`${url}?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
  let weekData = [];
  if (data) {
    weekData = weekDayTemperature(data);
  }

  return (
    <div className='weekForecast' data-testid='weeklyId' style={{ opacity: style.opacity }}>
      <Marquee gradient={false}>
        {weekData.length && weekData.map((dayInfo, index) => {
          return <WeekDay data-testid='weekday' key={index} {...dayInfo}/>;
        })}
      </Marquee>
    </div>
  );
};

export default WeeklyForecast;
