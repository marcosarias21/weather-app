import { useContext } from 'react';
import { useStyleContext } from '../../provider/styleProviders';
import weatherContext from '../../provider/WeatherContext';
import './style.scss';

const BackgroundData = ({ current, location }) => {
  const style = useStyleContext();

  if (!current || !location) {
    return null;
  }
  const { setIsShow } = useContext(weatherContext);
  const backToSearch = () => {
    setIsShow(true);
  };
  return (
    <>
      <div className='data-background' style={{ opacity: style.opacity }}>
        {current?.condition?.text
        && <>
              <h2>{location.name}</h2>
              <img src={current.condition.icon} className='icon' id='icono' alt='icon' />
              <h3 className='temp'>{current?.temp_c}°C </h3>
              <div>
                <h4 className='conditionText'>{current?.condition?.text}</h4>
                <p>Cloud: {current?.cloud} %</p>
                <p>Humidity: {current?.humidity} %</p>
                <p>Wind: {current?.wind_kph} km/h</p>
              <button className='btn btn-secondary w-100 mt-3' id='button' onClick={() => backToSearch()}> Volver </button>
        </div>
          </>
        }
      </div>
    </>
  );
};

export default BackgroundData;
