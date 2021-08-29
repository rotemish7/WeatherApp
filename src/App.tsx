import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import { ForecastType } from "./components/models/enums";
import Home from "./components/viewPages/home/Home";
import { defaultLocation, locationService } from "./services/location/LocationService";
import { WeatherService } from "./services/weather/WeatherService";

function App() {
  const [location, setLocation] = useState<{latitude: number;longitude: number;} | null>({ latitude: 0, longitude: 0 });
  const [locationKey, setLocationKey] = useState<string>("");
  const [weeklyForecast, setWeeklyForecast] = useState<Record<string,any> | null>(null);
  const [hourlyForecast, setHourlyForecast] = useState<Record<string,any> | null>(null);
  const [searchQuery, setSearchQuery] = useState<Record<string,any> | null>(null);

  useEffect(() => {
    initLocation();
    initLocationKey(location);
    initFiveDaysData(locationKey);
    initHourlyData(locationKey);
    initAutocomplete(locationKey);
  }, []);

  async function initLocation() {
    try {
      const location = await locationService.getLocation();
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (error) {
      setLocation(defaultLocation);
    }
  }

  async function initLocationKey(
    loc: { latitude: number; longitude: number } | null
  ) {
    try {
      const key = await WeatherService.getGeoPosition(loc);
      setLocationKey(key);
    } catch (error) {}
  }

  async function initFiveDaysData(key: string) {
    const forecast = await WeatherService.getWeeklyForecast(key);
    setWeeklyForecast(forecast);
  }

  async function initHourlyData(key: string) {
    const forecast = await WeatherService.getDayilyForecast(key);
    setHourlyForecast(forecast);
  }

  async function initAutocomplete(key:string) {
    const search = await WeatherService.getAutoComplete(key);
    setSearchQuery(search);
  }

  // console.log("location:", location);
  // console.log("Key:", locationKey);
  //  console.log("WeeklyForecast:", weeklyForecast);
    // console.log('search:', searchQuery);

  const handleSearchChanged = (event: any) => {
    setSearchQuery(event);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearchChanged}></Header>
      {weeklyForecast && hourlyForecast && (<Home weeklyData={weeklyForecast} hourlyData={hourlyForecast} />)}
    </div>
  );
}

export default React.memo(App);
