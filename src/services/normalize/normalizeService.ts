import { CityProperties, WeatherProperties } from '../../components/models/enums';

export function currentNormalizer(data: Record<string, any>) {
  const hours = new Date(data[0].LocalObservationDateTime).getHours();
  const minutes = new Date(data[0].LocalObservationDateTime).getMinutes().toLocaleString();

  const normalizedData: WeatherProperties = {
    date: hours + ':' + minutes,
    maxTemp: Math.round(data[0].Temperature.Metric.Value),
    weatherIcon: data[0].WeatherIcon,
    weatherText: data[0].WeatherText,
    isCurrentDate: true,
  };
  return normalizedData;
}

export function weeklyNormalizer(data: Record<string, any>) {
  const normalizedData: WeatherProperties = {
    date: new Date(data.Date).getDay(),
    maxTemp: Math.round(data.Temperature.Maximum.Value),
    minTemp: Math.round(data.Temperature.Minimum.Value),
    weatherIcon: data.Day.Icon,
    weatherText: data.Day.IconPhrase,
    isCurrentDate: new Date().getDate() === new Date(data.date).getDate(),
  };
  return normalizedData;
}

export function hourlyNormalizer(data: Record<string, any>) {
  const normalizedData: WeatherProperties = {
    date: new Date(data.DateTime).getHours(),
    maxTemp: Math.round(data.Temperature.Value),
    weatherIcon: data.WeatherIcon,
    weatherText: data.IconPhrase,
    isCurrentDate: new Date().getDate() === new Date(data.date).getDate(),
  };
  return normalizedData;
}

export function cityNormalizer(data: Record<string, any>) {
  const normalizedData: CityProperties = {
    key: data.Key,
    name: data.LocalizedName,
    country: data.Country.EnglishName,
    countryId: data.Country.ID,
  };
  return normalizedData;
}
