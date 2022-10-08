import { useContext } from 'react';
import { useStyleChangeContext } from '../../provider/styleProviders';
import weatherContext from '../../provider/WeatherContext';
import './style.css';

const SearchBar = ({ citiesData, places }) => {
  const setStyle = useStyleChangeContext();

  const {
    setList, setPlaces, setCityName,
  } = useContext(weatherContext);
  const handleChange = (e) => {
    setList(e.target.value);
  };
  const setDataFound = () => {
    setPlaces(citiesData.data);
  };

  const clickItem = (name) => {
    setCityName(name);
    setStyle({ opacity: 0 });

    setTimeout(() => {
      setStyle({ opacity: 1 });
    }, 1000);
  };

  return (
    <section className='searchSection d-flex flex-column'>
      <div className='d-flex'>
        <input onChange={handleChange}
               type="text"
               className="form-control w-60 ml-3 mt-3 mb-3"
               placeholder='Clima en...' />
        <button onClick={setDataFound} className='btn btn-secondary mt-3 mb-3' id='buttons'>Buscar</button>
      </div>
      <div className='background-listPlaces-style'>
        {places?.map(place => (
          <h5 key={place.id} className='d-flex my-3 list-items btn btn-outline-light' onClick={() => clickItem(place.name)}>{place.name}</h5>
        ))}
      </div>
    </section>
  );
};

export default SearchBar;
