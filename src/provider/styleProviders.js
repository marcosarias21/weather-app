import { createContext, useContext, useState } from 'react';

const styleContext = createContext();
const styleChangeContext = createContext();

export const StyleProvider = ({ children }) => {
  const [style, setStyle] = useState({
    opacity: 1,
  });

  return (
      <styleChangeContext.Provider value={setStyle}>
          <styleContext.Provider value={style}>{children}</styleContext.Provider>
      </styleChangeContext.Provider>
  );
};

export const useStyleContext = () => {
  return useContext(styleContext);
};

export const useStyleChangeContext = () => {
  return useContext(styleChangeContext);
};
