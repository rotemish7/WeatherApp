import { days, ForecastType, hours, WeatherProperties } from '../../models/enums';
import { StyledWeatherItem, DateTime, MaxTemperature, MinTemperature, Icon } from './WeatherItem.style';
import './WeatherItem.style';

function WeatherItem({ item, type }: Record<string, any>) {
  const forecast: WeatherProperties = item;

  return (
    <StyledWeatherItem>
      <DateTime>
        {type === ForecastType.Weekly
          ? days[forecast.date]
          : type === ForecastType.Hourly
          ? hours[forecast.date]
          : forecast.date}
      </DateTime>
      <MaxTemperature>{forecast.maxTemp}°</MaxTemperature>
      <MinTemperature>{forecast.minTemp ? forecast.minTemp + '°' : ''}</MinTemperature>
      <Icon>{forecast.weatherIcon}</Icon>
    </StyledWeatherItem>
  );
}

export default WeatherItem;
