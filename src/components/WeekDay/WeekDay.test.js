import { render, screen } from '@testing-library/react';
import { StyleProvider } from '../../provider/styleProviders';
import { WeatherProvider } from '../../provider/WeatherContext';
import WeekDay from './WeekDay';

const minTemp = 13.25;
const maxTemp = 29.82;
const iconCode = '02d';
const date = '2022-10-12 21:00:00';

describe('test WeekDay component', () => {
  test('Se espera que renderize la data', () => {
    render(
     <WeatherProvider>
      <StyleProvider>
        <WeekDay minTemp={minTemp} maxTemp={maxTemp} iconCode={iconCode} date={date} />
      </StyleProvider>
     </WeatherProvider>,
    );
    const element = screen.getByAltText('icon');
    expect(element).toBeInTheDocument();
  });

  test('Se espera que no renderize la data', () => {
    render(<WeekDay />);
    const element = screen.queryByTestId('id-test');
    expect(element).not.toBeInTheDocument();
  });
});
