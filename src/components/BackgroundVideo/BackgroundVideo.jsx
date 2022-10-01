import React, { useContext } from 'react';
import setVideo from '../../helpers/setVideo.jsx';

import './style.css';

const BackgroundVideo = ({ weatherData }) => {
  // eslint-disable-next-line camelcase
  const { condition, is_day } = weatherData;
  // eslint-disable-next-line camelcase
  const { dayTime, weather } = setVideo({ code: condition.code, isDay: is_day });

  const videoUrl = `../../assets/videos/${dayTime}/${weather}.mp4`;

  return (
    <video key={videoUrl} autoPlay muted loop playsInline id='myVideo'>
      <source
        src={`${require(`../../assets/videos/${dayTime}/${weather}.mp4`)}`}
        type='video/mp4'
        id='myVideo1'
      />
    </video>
  );
};

export default BackgroundVideo;
