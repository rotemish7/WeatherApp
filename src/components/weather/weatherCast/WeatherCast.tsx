import * as React from 'react';
import { StyledWeatherCast, Title, Item } from './WeatherCast.style';
import WeatherItem from '../weatherItem/WeatherItem';
import './WeatherCast.style';
import { ForecastTitle, ForecastType } from '../../models/enums';
import { weeklyNormalizer, hourlyNormalizer, currentNormalizer } from '../../../services/normalize/normalizeService';

function WeatherCast({ data, type }: Record<string, any>) {
  return (
    <StyledWeatherCast>
      <Title>
        {type === ForecastType.Hourly
          ? ForecastTitle.Hourly
          : type === ForecastType.Weekly
          ? ForecastTitle.Weekly
          : ForecastTitle.Daily}
      </Title>
      <Item>
        {data &&
          (type === ForecastType.Weekly ? (
            data.map((forecast: Record<string, any>, index: number) => {
              return <WeatherItem key={index} item={weeklyNormalizer(forecast)} type={type} />;
            })
          ) : type === ForecastType.Hourly ? (
            data.slice(0, 5).map((forecast: Record<string, any>, index: number) => {
              return <WeatherItem key={index} item={hourlyNormalizer(forecast)} type={type} />;
            })
          ) : (
            <WeatherItem item={currentNormalizer(data)} type={type} />
          ))}
      </Item>
    </StyledWeatherCast>
  );
}

export default React.memo(WeatherCast);
