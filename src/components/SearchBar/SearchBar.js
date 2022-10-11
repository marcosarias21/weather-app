import { useContext } from 'react';
import { useStyleChangeContext, useStyleContext } from '../../provider/styleProviders';
import weatherContext from '../../provider/WeatherContext';
import './style.scss';

const SearchBar = ({ citiesData, places }) => {
  if (!citiesData && !places) return null;
  const setStyle = useStyleChangeContext();
  const style = useStyleContext();

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
    <section data-testid='section-searchbar' style={{ opacity: style.opacity }} className='searchSection'>
      <div className='searchContainer'>
        <input onChange={handleChange}
               type="text"
               className="searchInput"
               placeholder='Clima en...' />
        <button onClick={setDataFound} className='btn btn-secondary mt-3 mb-3' id='buttons'>Buscar</button>
      </div>
      <div className='itemContainer'>
        {places?.map(place => (
          <h5 data-testid='opcion' key={place.id} className='d-flex my-3 list-items btn btn-outline-light' onClick={() => clickItem(place.name)}>{place.name}</h5>
        ))}
      </div>
    </section>
  );
};

export default SearchBar;
