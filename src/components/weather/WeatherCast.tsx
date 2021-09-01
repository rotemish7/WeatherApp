import * as React from "react";
import { StyledWeatherCast, Title, Item } from "./WeatherCast.style";
import WeatherItem from "./WeatherItem";
import "./WeatherCast.style.ts";
import { ForecastTitle, ForecastType } from "../models/enums";
import { NormalizeService } from "../../services/normalize/normalizeService";

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
              return (
                <WeatherItem
                  key={index}
                  item={NormalizeService.weekly(forecast)}
                  type={type}
                />
              );
            })
          ) : type === ForecastType.Hourly ? (
            data
              .slice(0, 5)
              .map((forecast: Record<string, any>, index: number) => {
                return (
                  <WeatherItem
                    key={index}
                    item={NormalizeService.hourly(forecast)}
                    type={type}
                  />
                );
              })
          ) : (
            <WeatherItem
              key={0}
              item={NormalizeService.current(data)}
              type={type}
            />
          ))}
      </Item>
    </StyledWeatherCast>
  );
}

export default React.memo(WeatherCast);
