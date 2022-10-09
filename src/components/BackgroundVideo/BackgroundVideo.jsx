import React from 'react';
import setVideo from '../../helpers/setVideo.jsx';
import { useStyleContext } from '../../provider/styleProviders';
import './style.scss';

const BackgroundVideo = ({ weatherData }) => {
  const style = useStyleContext();

  // eslint-disable-next-line camelcase
  const { condition, is_day } = weatherData;
  // eslint-disable-next-line camelcase
  const { dayTime, weather } = setVideo({ code: condition.code, isDay: is_day });

  const videoUrl = `../../assets/videos/${dayTime}/${weather}.mp4`;
  return (
    <video
    key={videoUrl}
    autoPlay
    muted loop
    playsInline
    id='myVideo'
    style={{ opacity: style.opacity }}
    >
      <source
        src={`${require(`../../assets/videos/${dayTime}/${weather}.mp4`)}`}
        type='video/mp4'
        id='myVideo1'
      />
    </video>
  );
};

export default BackgroundVideo;
