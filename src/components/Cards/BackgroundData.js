import React from 'react';
import './estilo.css';

const BackgroundData = ({ current, location }) => {
  return (
  <>
   <p>{current?.condition?.text && <img src={current.condition.icon} className='icon' alt='icon' width='50' height='50' /> }</p>
  </>
  );
};

export default BackgroundData;
