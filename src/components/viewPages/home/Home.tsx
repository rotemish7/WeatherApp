import React, { useEffect, useState } from "react";
import {
  defaultLocation,
  locationService,
} from "../../../services/location/LocationService";
import { WeatherService } from "../../../services/weather/WeatherService";
import { ForecastType } from "../../models/enums";
import WeatherCast from "../../weather/WeatherCast";
import "./Home.scss";

function Home() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>({ latitude: 0, longitude: 0 });
  const [locationKey, setLocationKey] = useState<string>("");
  const [weeklyForecast, setWeeklyForecast] = useState<Record<
    string,
    any
  > | null>(null);
  const [hourlyForecast, setHourlyForecast] = useState<Record<
    string,
    any
  > | null>(null);

  useEffect(() => {
    initLocation();
    initLocationKey(location);
    initFiveDaysData(locationKey);
    initHourlyData(locationKey);
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

  // console.log("location:", location);
  // console.log("Key:", locationKey);
  //  console.log("WeeklyForecast:", weeklyForecast);

  return (
    <div className="home">
      {weeklyForecast && (
        <WeatherCast data={weeklyForecast} type={ForecastType.Weekly} />
      )}
      {hourlyForecast && (
        <WeatherCast data={hourlyForecast} type={ForecastType.Hourly} />
      )}
    </div>
  );
}

export default Home;
