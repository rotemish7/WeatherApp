import { days, ForecastType, hours, weatherProperties } from "../models/enums";
import styled, { StyledComponent } from "styled-components";
import "./WeatherItem.scss";

const StyledWeatherItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const DateTime: StyledComponent<"div", any, {}, never> = styled.div`
  font-size: large;
`;

const MaxTemperature: StyledComponent<"div", any, {}, never> = styled.div`
  color: #1b4de4;
  font-size: 2.25rem;
  font-weight: 700;
`;

const MinTemperature: StyledComponent<"div", any, {}, never> = styled.div`
  color: #1b4de4;
  font-size: 1.125rem;
  font-weight: 400;
`;

const Icon: StyledComponent<"div", any, {}, never> = styled.div`
  font-size: 1.125rem;
`;

function WeatherItem({ item, type }: Record<string, any>) {
  const forecast: weatherProperties = item;

  return (
    <StyledWeatherItem>
      <DateTime>
        {type === ForecastType.Weekly ? days[forecast.date] : type === ForecastType.Hourly ? hours[forecast.date] : forecast.date}
      </DateTime>
      <MaxTemperature>{forecast.maxTemp}°</MaxTemperature>
      <MinTemperature>{forecast.minTemp ? forecast.minTemp + "°" : ""}</MinTemperature>
      <Icon>{forecast.weatherIcon}</Icon>
    </StyledWeatherItem>
  );
}

export default WeatherItem;
