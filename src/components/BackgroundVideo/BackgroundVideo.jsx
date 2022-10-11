import React from 'react';
import setVideo from '../../helpers/setVideo.jsx';
import { useStyleContext } from '../../provider/styleProviders';
import './style.scss';

const BackgroundVideo = ({ weatherData }) => {
  if (!weatherData) return null;
  const style = useStyleContext();

  const { condition, is_day } = weatherData;
  const { dayTime, weather } = setVideo({ code: condition.code, isDay: is_day });

  const videoUrl = `../../assets/videos/${dayTime}/${weather}.mp4`;
  return (
    <video
    data-testid = 'video-id'
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
