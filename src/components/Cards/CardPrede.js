/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import weatherContext from '../../provider/WeatherContext';

const CardPrede = ({ citiesData, places }) => {
  const { setPlaces } = useContext(weatherContext);

  setPlaces(citiesData.data);

  return (
    <div>
      <h1>Ciudad Natal </h1>
      {places?.map(place => (
        <li key={place.id}>{place.name}</li>
      ))}
      {/* <li key={setPlaces.id}>{setPlaces.name}</li> */}
    </div>
  );
};

export default CardPrede;
