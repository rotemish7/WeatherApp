
import { useEffect, useState } from "react";
import { defaultLocation, locationService } from "./../services/location/LocationService";
import { WeatherService } from "./../services/weather/WeatherService";

export function useWeather() {
    const [location, setLocation] = useState<{latitude: number;longitude: number;} | null>({ latitude: 0, longitude: 0 });
    const [locationKey, setLocationKey] = useState<string>("");
    const [currentCondition, setCurrentCondition] = useState<Record<string,any> | null>(null); 
    const [weeklyForecast, setWeeklyForecast] = useState<Record<string,any> | null>(null);
    const [hourlyForecast, setHourlyForecast] = useState<Record<string,any> | null>(null);
    const [searchQuery, setSearchQuery] = useState<Record<string,any> | null>(null);
    const weatherData = {
        location,
        locationKey,
        currentCondition,
        weeklyForecast,
        hourlyForecast,
        searchQuery
    }


    useEffect(() => {
        initLocation();
        initLocationKey(location);
        initFiveDaysData(locationKey);
        initHourlyData(locationKey);
        initAutocomplete(locationKey);
        initCurrentCondition(locationKey);
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
    
      async function initCurrentCondition(key:string) {
        const forecast = await WeatherService.getCurrentConditions(key);
        setCurrentCondition(forecast);
      }

      return weatherData;

}