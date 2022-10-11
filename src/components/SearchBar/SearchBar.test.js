import { render, screen, fireEvent } from '@testing-library/react';
import { StyleProvider } from '../../provider/styleProviders';
import { WeatherProvider } from '../../provider/WeatherContext';
import SearchBar from './SearchBar';

const places = [{
  id: 111921,
  name: 'Tucuman',
  region: 'Tucuman',
  country: 'Argentina',
  lat: -26.82,
  lon: -65.22,
  url: 'tucuman-tucuman-argentina',
}];

const citiesData = [{
  data: {
    id: 111921,
    name: 'Tucuman',
    region: 'Tucuman',
    country: 'Argentina',
    lat: -26.82,
    lon: -65.22,
    url: 'tucuman-tucuman-argentina',
  },
}];

describe('SearchBar Test', () => {
  test('Debe encontrar el boton de busqueda', () => {
    render(
      <WeatherProvider>
      <StyleProvider>
        <SearchBar places={places} citiesData={citiesData}/>
      </StyleProvider>
      </WeatherProvider>,
    );
    const buttonElement = screen.getByText('Buscar');
    expect(buttonElement).toBeInTheDocument();
  });

  test('Debe no cambiar la opacidad', () => {
    const setCityName = jest.fn();
    const setStyle = jest.fn();
    render(
      <WeatherProvider value={setCityName}>
       <StyleProvider value={setStyle} >
          <SearchBar places={places} citiesData={citiesData}/>
        </StyleProvider>
      </WeatherProvider>,
    );
    const sectionElement = screen.queryByTestId('section-searchbar');
    expect(sectionElement).toHaveStyle('opacity: 1');
  });

  test('Debe cambiar la opacidad', () => {
    const setCityName = jest.fn();
    const setStyle = jest.fn();
    render(
      <WeatherProvider value={setCityName}>
       <StyleProvider value={setStyle}>
          <SearchBar places={places} citiesData={citiesData}/>
        </StyleProvider>
      </WeatherProvider>,
    );
    const element = screen.queryByTestId('opcion');
    fireEvent.click(element);
    const sectionElement = screen.queryByTestId('section-searchbar');
    expect(sectionElement).toHaveStyle('opacity: 0');
  });

  test('Debe encontrar la busqueda', () => {
    const setList = jest.fn();
    render(
      <WeatherProvider value={setList} >
      <StyleProvider>
        <SearchBar places={places} citiesData={citiesData}/>
      </StyleProvider>
      </WeatherProvider>,
    );
    const input = screen.getByPlaceholderText('Clima en...');
    const buttonSearch = screen.getByText('Buscar');
    fireEvent.change(input, { target: { value: 'Tucuman' } });
    fireEvent.click(buttonSearch);
    const element = screen.getByText('Tucuman');
    expect(element).toBeInTheDocument();
  });
});
