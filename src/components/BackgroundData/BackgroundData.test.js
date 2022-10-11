import { fireEvent, render, screen } from '@testing-library/react';
import { StyleProvider } from '../../provider/styleProviders';
import { WeatherProvider } from '../../provider/WeatherContext';
import BackgroundData from './BackgroundData';

const dataCity = {
  location: { name: 'Paris' },
  current: {
    cloud: 100,
    humidity: 68,
    wind_kph: 20,
    condition: { text: 'Overcast' },
  },
};

describe('test data de las cards', () => {
  test('Se espera que renderize el componente', () => {
    render(
    <WeatherProvider>
      <StyleProvider>
        <BackgroundData {...dataCity}/>;
      </StyleProvider>
    </WeatherProvider>,
    );
    const element = screen.getByText('Volver');
    expect(element).toBeInTheDocument();
  });

  test('Se espera que renderize la data del componente', () => {
    render(
    <WeatherProvider >
      <StyleProvider>
      <BackgroundData {...dataCity} />;
      </StyleProvider>
    </WeatherProvider>,
    );
    const element = screen.getByText(dataCity.current.condition.text);
    expect(element).toBeInTheDocument();
  });

  test('Se espera que el componente vuelva a searchbar', () => {
    render(
    <WeatherProvider>
      <StyleProvider>
      <BackgroundData {...dataCity}/>;
      </StyleProvider>
    </WeatherProvider>,
    );
    const element = screen.getByText('Volver');
    fireEvent.click(element);
    expect(element).toBeTruthy();
  });
});
