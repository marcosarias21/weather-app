import { useContext } from 'react';
import weatherContext from '../../provider/WeatherContext';
import './style.css';

const SearchBar = ({ citiesData, places }) => {
  const {
    setList, setPlaces, setCityName,
  } = useContext(weatherContext);
  const handleChange = (e) => {
    setList(e.target.value);
  };
  const setDataFound = () => {
    setPlaces(citiesData.data);
  };

  return (
    <section className='searchSection d-flex flex-column'>
      <div className='d-flex'>
        <input onChange={handleChange} type="text" className="form-control w-50" id="exampleInputText" aria-describedby="textHelp" />
        <button onClick={setDataFound} className='btn btn-secondary'>Buscar</button>
      </div>
      <div className='background-listPlaces-style'>
        {places?.map(place => (
          <h5 key={place.id} className='d-flex my-3 list-items btn btn-outline-light' onClick={() => setCityName(place.name)}>{place.name}</h5>
        ))}
      </div>
    </section>
  );
};

export default SearchBar;
