import { createContext, useState } from 'react';

const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [list, setList] = useState('');
  const [cityName, setCityName] = useState('paris');
  const [places, setPlaces] = useState();
  const [clima, setClima] = useState('Tucuman');
  const [isShow, setIsShow] = useState(true);

  const data = {
    list,
    setList,
    cityName,
    setCityName,
    places,
    setPlaces,
    clima,
    setClima,
    isShow,
    setIsShow,
  };

  return (
     <weatherContext.Provider value={data}>{children}</weatherContext.Provider>
  );
};

export default weatherContext;
