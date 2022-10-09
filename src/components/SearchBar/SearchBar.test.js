import { render, screen, fireEvent } from '@testing-library/react';
import { WeatherProvider } from '../../provider/WeatherContext';
import SearchBar from './SearchBar';

describe('SearchBar Test', () => {
  test('Debe encontrar el boton de busqueda', () => {
    render(
      <WeatherProvider>
        <SearchBar/>
      </WeatherProvider>,
    );
    const buttonElement = screen.getByText('Buscar');
    expect(buttonElement).toBeInTheDocument();
  });
  test('Debe encontrar la busqueda', () => {
    render(
      <WeatherProvider>
        <SearchBar/>
      </WeatherProvider>,
    );
    const input = screen.getByPlaceholderText('Clima en...');
    const buttonSearch = screen.getByText('Buscar');
    fireEvent.change(input, { target: { value: 'Santa fe' } });
    fireEvent.click(buttonSearch);
    screen.debug();
  });
});
