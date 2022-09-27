import { createContext, useState } from 'react';

const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [list, setList] = useState('');
  const [cityName, setCityName] = useState('');
  const [places, setPlaces] = useState();

  const data = {
    list,
    setList,
    cityName,
    setCityName,
    places,
    setPlaces,
  };

  return (
     <weatherContext.Provider value={data}>{children}</weatherContext.Provider>
  );
};

export default weatherContext;
