import React from "react";
import { StyledApp } from "./App.styled";
import "./App.styled.ts";
import Header from "./components/header/Header";
import Home from "./components/viewPages/home/Home";
import { useWeather } from "./custom-hooks/useWeather";

function App() {

  const weatherData = useWeather();

  const handleSearchChanged = (event: any) => {
    // setSearchQuery(event);
    console.log(event.target.value);
  };
  console.log('Data:', weatherData);

  return (
    <StyledApp>
      <Header onSearch={handleSearchChanged}></Header>
      {weatherData.weeklyForecast && weatherData.hourlyForecast && weatherData.currentCondition && (<Home weeklyData={weatherData.weeklyForecast} hourlyData={weatherData.hourlyForecast} currentCondition={weatherData.currentCondition} />)}
    </StyledApp>
  );
}

export default React.memo(App);
