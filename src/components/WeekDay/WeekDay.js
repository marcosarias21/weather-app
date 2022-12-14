import React from 'react';
import './style.scss';

const WeekDay = ({
  minTemp, maxTemp, iconCode, date,
}) => {
  if (!minTemp || !maxTemp || !iconCode || !date) return null;
  const d = new Date(date.slice(0, 10));
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset() - 60000);

  const dayName = d.toLocaleString('es', { weekday: 'long' });
  return (
    <div className='weekDay' data-testid='id-test'>
        <div>
            <p>{dayName.slice(0, 3)} {date.slice(5, 10)}</p>
            <p>{Math.round(minTemp)}° / {Math.round(maxTemp)}°</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${iconCode.slice(0, 2)}d@2x.png`} className='weekDayIcon' alt='icon' />
    </div>
  );
};

export default WeekDay;
