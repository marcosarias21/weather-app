/* eslint-disable import/extensions */
import { render, screen } from '@testing-library/react';
import { StyleProvider } from '../../provider/styleProviders.js';
import { WeatherProvider } from '../../provider/WeatherContext.js';
import BackgroundVideo from './BackgroundVideo.jsx';

const weatherData = {
  last_updated_epoch: 1665516600,
  last_updated: '2022-10-11 21:30',
  temp_c: 14,
  temp_f: 57.2,
  is_day: 0,
  condition: {
    text: 'Partly cloudy',
    icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
    code: 1003,
  },
  wind_mph: 6.9,
  wind_kph: 11.2,
  wind_degree: 30,
  wind_dir: 'NNE',
  pressure_mb: 1024,
  pressure_in: 30.24,
  precip_mm: 0,
  precip_in: 0,
  humidity: 72,
  cloud: 25,
  feelslike_c: 13.7,
  feelslike_f: 56.7,
  vis_km: 10,
  vis_miles: 6,
  uv: 1,
  gust_mph: 8.7,
  gust_kph: 14,
};

describe('test backgroundVideo component', () => {
  test('Se espera que no renderize la data', () => {
    render(<BackgroundVideo />);
    const element = screen.queryByTestId('video-id');
    expect(element).not.toBeInTheDocument();
  });
  test('Se espera que renderize la data', () => {
    render(
      <WeatherProvider>
      <StyleProvider>
        <BackgroundVideo weatherData={weatherData}/>
      </StyleProvider>
     </WeatherProvider>,
    );
    const element = screen.queryByTestId('video-id');
    expect(element).toBeInTheDocument();
  });
});
