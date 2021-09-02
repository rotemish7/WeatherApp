import { useEffect, useState } from 'react';
import { defaultLocation, locationService } from './../services/location/LocationService';
import { WeatherService } from './../services/weather/WeatherService';

export function useWeather() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>({ latitude: 0, longitude: 0 });
  const [locationKey, setLocationKey] = useState<string>('');
  const [currentCondition, setCurrentCondition] = useState<Record<string, any> | null>(null);
  const [weeklyForecast, setWeeklyForecast] = useState<Record<string, any> | null>(null);
  const [hourlyForecast, setHourlyForecast] = useState<Record<string, any> | null>(null);
  const [topCities, setTopCities] = useState<Record<string, any> | null>(null);
  const weatherData = {
    location,
    locationKey,
    currentCondition,
    weeklyForecast,
    hourlyForecast,
    topCities,
  };

  function setWeatherData(key: string) {
    fetchFiveDaysData(key);
    fetchHourlyData(key);
    fetchAutocompleteOptions(key);
    fetchCurrentCondition(key);
  }

  useEffect(() => {
    fetchLocation();
    fetchLocationKey(location);
    setWeatherData(locationKey);
    // fetchFiveDaysData(locationKey);
    // fetchHourlyData(locationKey);
    // fetchAutocomplete(locationKey);
    // fetchCurrentCondition(locationKey);
  }, []);

  async function fetchLocation() {
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

  async function fetchLocationKey(loc: { latitude: number; longitude: number } | null) {
    try {
      const key = await WeatherService.getGeoPosition(loc);
      setLocationKey(key);
    } catch (error) {}
  }

  async function fetchFiveDaysData(key: string) {
    const forecast = await WeatherService.getWeeklyForecast(key);
    setWeeklyForecast(forecast);
  }

  async function fetchHourlyData(key: string) {
    const forecast = await WeatherService.getHourlyForecast(key);
    setHourlyForecast(forecast);
  }

  async function fetchAutocompleteOptions(key: string) {
    const search = await WeatherService.getTopCities();
    setTopCities(search);
  }

  async function fetchCurrentCondition(key: string) {
    const forecast = await WeatherService.getCurrentForecast(key);
    setCurrentCondition(forecast);
  }

  return { weatherData, setWeatherData };
}
