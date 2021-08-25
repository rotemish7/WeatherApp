import * as React from 'react';
import WeatherItem from "./WeatherItem";
import "./WeatherCast.scss";
import { ForecastTitle, ForecastType } from "../models/enums";

function WeatherCast({ data, type }: Record<string, any>) {

  return (
    <div className="weather-cast">
      <div className="weather-cast__title">
        <h1>{type === ForecastType.Hourly ? ForecastTitle.Hourly : ForecastTitle.Weekly}</h1>
      </div>
      <div className="weather-cast__items">
        
        {type === ForecastType.Weekly ? data.map((item: Record<string, any>, index: number) => {
          return <WeatherItem key={index} item={item} type={type} />;
        }) : data.slice(0,5).map((item: Record<string, any>, index: number) => {
          return <WeatherItem key={index} item={item} type={type} />;
        })}
      </div>
    </div>
  );
}

export default React.memo(WeatherCast);
