import { useContext } from 'react';
import weatherContext from '../../provider/WeatherContext';
import './estilo.css';

const BackgroundData = ({ current, location }) => {
  if (!current || !location) {
    return null;
  }
  console.log(current, location);
  const { setIsShow } = useContext(weatherContext);
  const backToSearch = () => {
    setIsShow(true);
  };
  return (
    <>
      <div className='d-flex flex-column w-50 data-background'>
        <div className='weather d-flex flex-column align-items-left'>
          <h2>{current?.condition?.text && <h2>{location.name}</h2>}</h2>
          <img src={current?.condition.icon} className='icon' alt='icon' />
          <h3 className='temp'>{current?.temp_c}°C </h3>
          <div className='d-flex flex-column'>
            <h5>{current?.condition?.text}</h5>
            <p>{current?.condition?.text && <h4>Cloud: {current?.cloud} %</h4>}</p>
            <p>{current?.condition?.text && <h4>Humidity: {current?.humidity} %</h4>}</p>
            <p>{current?.condition?.text && <h4>Wind: {current?.wind_kph} km/h</h4>}</p>
            <button className='btn btn-primary w-50' onClick={() => backToSearch()}> Volver </button>
          </div>
        </div>
       </div>
    </>
  );
};

export default BackgroundData;
