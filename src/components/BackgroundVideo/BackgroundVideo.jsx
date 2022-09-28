import React, { useContext } from 'react';

import './style.css';

const BackgroundVideo = ({ condition, isDay }) => {
  return (
    <video key='video' autoPlay muted loop playsInline id='myVideo'>
      <source
        src={`${require('../../assets/videos/day/rainy.mp4')}`}
        type='video/mp4'
        id='myVideo1'
      />
    </video>
  );
};

export default BackgroundVideo;
