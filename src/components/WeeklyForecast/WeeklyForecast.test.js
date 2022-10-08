import { render, screen } from '@testing-library/react';
import { WeatherProvider } from '../../provider/WeatherContext';
import WeeklyForecast from './WeeklyForecast';

const locationData = {
  lat: 48.87,
  lon: 2.33,
};

const weekData = [{
  date: '2022-10-06 15:00:00',
  iconCode: '01d',
  minTemp: '12.15',
  maxTemp: '24.34',
},
{
  date: '2022-10-07 15:00:00',
  iconCode: '02d',
  minTemp: '13.15',
  maxTemp: '25.34',
},
];

describe('test al componente weekly', () => {
  test('Se espera que no renderize el componente', () => {
    render(<WeeklyForecast />);
    const element = screen.queryByTestId('weeklyId');
    expect(element).not.toBeInTheDocument();
  });

  test('Se espera que renderize el componente', () => {
    render(<WeatherProvider>
            <WeeklyForecast locationData={locationData} weekData={weekData} />
          </WeatherProvider>);
    const element = screen.queryByTestId('weeklyId');
    expect(element).toBeInTheDocument();
  });

  test('Se espera que renderize el componente con la data', () => {
    const setWeekData = jest.fn();
    render(
      <WeatherProvider value={setWeekData}>
        <WeeklyForecast locationData={locationData} weekData={weekData} />
      </WeatherProvider>,
    );
    const elementComponent = screen.findByTestId('weekday');
  });
});
