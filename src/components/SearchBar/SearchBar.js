import React, { useState, useContext } from 'react';
import weatherContext from '../../provider/WeatherContext';
import { Card } from '../Cards';

const SearchBar = ({
  citiesData, places, cityClima, cityData,
}) => {
  const { setList, setPlaces, setCityName } = useContext(weatherContext);
  const [show, setShow] = useState(false);
  const [captureCity, setCaptureCity] = useState('');
  const handleChange = (e) => {
    setList(e.target.value);
    console.log('Value Seleccionado', e.target.value);
  };

  const handleSelection = (e) => {
    setShow(true);
    // setPlaces(place);
    setCaptureCity(e.target.value);
    console.log(e.target.value);
    // console.log(place);
  };

  const setDataFound = () => {
    setPlaces(citiesData.data);
  };
  console.log(cityData);

  console.log('Esto:', cityClima);
  return (
    <div className='container'>
      <section className='mt-5 mb-5'>
        <div className='row'>
          <div className='col-3'>
            <h4 className=''>Ciudad: { cityClima.data.location?.name }</h4>
            <h5 className="text-muted">Pais: {cityClima.data.location?.country}</h5>
            <span className="text-muted">{cityClima.data.current?.last_updated}</span>
            <img src={cityClima.data.current.condition.icon} alt="" />
          </div>
          <div className='col'>
            <h6 className="text-muted">Temperatura: { cityClima.data.current.temp_c }°</h6>
            <h6 className="text-muted">Humedad: {cityClima.data.current.humidity }%</h6>
            <h6 className="text-muted">Probab. Precipit.: {cityClima.data.current.precip_in }%</h6>
            <h6 className="text-muted">Viento: {cityClima.data.current.gust_kph }km/h</h6>
          </div>
        </div>
      </section>
      <section>
        <div className='row'>
          <div className='col'>
          <h4>Situacion actual del clima por ciudad</h4>
          <div className='d-flex w-50'>
            <input onChange={handleChange} type="text" className="form-control w-300" id="exampleInputText" aria-describedby="textHelp" />
            <button onClick={setDataFound} className='btn btn-primary'>Buscar</button>
          </div>
          <div>
            <ul>
              {places?.map(place => (
                <li key={place.id} className='my-1'><button id="selector" value={place.name} className='btn btn-primary'onClick={(e) => handleSelection(e, captureCity) }>{place.name}</button></li>
              ))}
            </ul>
          </div>
          </div>
          <div className='col'>
            {setShow && <Card citiesData={citiesData} places={places} captureCity={captureCity}/>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchBar;
