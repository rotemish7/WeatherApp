import React from 'react';
import { StyledApp } from './App.styled';
import './App.styled.ts';
import Header from './components/header/Header';
import { CityProperties } from './components/models/enums';
import Home from './components/viewPages/home/Home';
import { useWeather } from './custom-hooks/useWeather';

function App() {
  const { weatherData, setWeatherData } = useWeather();

  const handleValueChanged = (event: React.ChangeEvent<{}>, value: CityProperties) => {
    console.log('Value', value?.key);
    setWeatherData(value?.key);
  };

  const handleInputChange = (event: React.ChangeEvent<{}>, value: string | null) => {
    console.log('Input-Value:', value);
  };

  // console.log('Data:', weatherData);
  return (
    <StyledApp>
      {weatherData.topCities && (
        <Header
          searchOptions={weatherData.topCities}
          handleValueChanged={handleValueChanged}
          handleInputChange={handleInputChange}
        />
      )}
      {weatherData.weeklyForecast && weatherData.hourlyForecast && weatherData.currentCondition && (
        <Home
          weeklyData={weatherData.weeklyForecast}
          hourlyData={weatherData.hourlyForecast}
          currentCondition={weatherData.currentCondition}
        />
      )}
    </StyledApp>
  );
}

export default React.memo(App);
