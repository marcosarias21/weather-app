import React from 'react';
import './estilo.css';

const BackgroundData = ({ current, location }) => {
  console.log(current, location);
  return (
    <>
      <div className='row'>
        <div className='col weather d-flex flex-column align-items-left'>
        </div>
        <div className='col weather d-flex flex-column align-items-left'>
          <p>{current?.condition?.text && <h4>Cloud: {current?.cloud} %</h4>}</p>
          <p>{current?.condition?.text && <h4>Humidity: {current?.humidity} %</h4>}</p>
          <p>{current?.condition?.text && <h4>Wind: {current?.wind_kph} km/h</h4>}</p>
        </div>
        <div className='col weather d-flex flex-column align-items-left'>
         <div className='row'>
          <div className='col'>
          {current?.condition?.text && <h3 className='temp'>{current?.temp_c}°</h3>}
          </div>
          <div className='col d-flex align-items-center'>
            {current?.condition?.text
            && <>
              <img src={current.condition.icon} className='icon' alt='icon' width='50' height='50' />
              <h5>{current?.condition?.text}</h5>
            </>}
            </div>
         </div>
         {current?.condition?.text && <h2>{location.name}</h2>}
       </div>
      </div>
    </>
  );
};

export default BackgroundData;
