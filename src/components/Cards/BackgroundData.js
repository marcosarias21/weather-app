import { useContext } from 'react';
import weatherContext from '../../provider/WeatherContext';
import './style.css';

const BackgroundData = ({ current, location }) => {
  const { setIsShow } = useContext(weatherContext);
  const backToSearch = () => {
    setIsShow(true);
  };
  return (
    <>
      <div className='data-background col-md-3'>
        {current?.condition?.text && <h2 className='d-flex justify-content-center'>{location.name}</h2>}
        <img src={current.condition.icon} className='icon' id='icono' alt='icon' />
        <h3 className='temp d-flex justify-content-center'>{current?.temp_c}°C </h3>
        <div>
          <h4 className='d-flex justify-content-center mb-5'>{current?.condition?.text}</h4>
          <p>{current?.condition?.text && <h4>Cloud: {current?.cloud} %</h4>}</p>
          <p>{current?.condition?.text && <h4>Humidity: {current?.humidity} %</h4>}</p>
          <p>{current?.condition?.text && <h4>Wind: {current?.wind_kph} km/h</h4>}</p>
          <button className='btn btn-secondary w-100 mt-3' id='button' onClick={() => backToSearch()}> Volver </button>
        </div>
      </div>
    </>
  );
};

export default BackgroundData;
