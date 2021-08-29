import axios from "axios";
import { StorageService } from "../../services/storageService/storageService";
const API_KEY = "cbAwn0WViH92ygqzcIDuEfbefy0m0JuE";
const API_HOST = "http://dataservice.accuweather.com/";
const API_VERSION = "v1";

async function getGeoPosition(location) {
  // const latitude = location.latitude;
  // const longitude = location.longitude;
  // try {
  //     const res = await axios.get(`${API_HOST}locations/${API_VERSION}/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`);
  //     localStorage.setItem('London',res.data.Key);
  //     return res.data.Key;
  //   } catch (error) {
  //     throw error;
  //   }
  return StorageService.load("London");
}

async function getAutoComplete(location) {
  try {
    const res = await axios.get(
      `${API_HOST}locations/${API_VERSION}/cities/autocomplete?apikey=${API_KEY}&q=${'london'}`
    );
    StorageService.save("Autocomplete", res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
}

async function getDayilyForecast(key) {
  // try {
  //   const res = await axios.get(
  //     `${API_HOST}forecasts/${API_VERSION}/hourly/12hour/${215755}?apikey=${API_KEY}&metric=true`
  //   );
  //   StorageService.save('HourlyForecast',res.data);
  //   return res.data;
  // } catch (error) {
  //   throw error;
  // }
  return StorageService.load("HourlyForecast");
}

async function getHourlyForecast() {}

async function getWeeklyForecast(location) {
  //328328
  //   try {
  //     const res = await axios.get(
  //       `${API_HOST}forecasts/${API_VERSION}/daily/5day/${215755}?apikey=${API_KEY}&metric=true`
  //     );
  //     console.log('Res:', res.data);
  //     const { DailyForecasts: dailyForecasts } = res.data;
  //     StorageService,save('5DayForecast',dailyForecasts)
  //     return dailyForecasts;
  //   } catch (error) {
  //     throw error;
  //   }
  return StorageService.load("5DayForecast");
}

export const WeatherService = {
  getDayilyForecast,
  getWeeklyForecast,
  getHourlyForecast,
  getAutoComplete,
  getGeoPosition,
};
