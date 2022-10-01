import { useContext } from 'react';
import weatherContext from '../../provider/WeatherContext';
import './style.css';

const SearchBar = ({ citiesData, places }) => {
  const { setList, setPlaces, setCityName } = useContext(weatherContext);
  const handleChange = (e) => {
    setList(e.target.value);
  };
  const setDataFound = () => {
    setPlaces(citiesData.data);
  };

  return (
    <section className='searchSection'>
      <div className='d-flex w-25'>
        <input onChange={handleChange} type="text" className="form-control w-50" id="exampleInputText" aria-describedby="textHelp" />
        <button onClick={setDataFound} className='btn btn-primary'>Buscar</button>
      </div>
      <div>
        <ul>
          {places?.map(place => (
            <li key={place.id} className='my-1'><button className='btn btn-primary' onClick={() => setCityName(place.name)}>{place.name}</button></li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SearchBar;
