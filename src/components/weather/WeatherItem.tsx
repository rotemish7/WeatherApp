import { ForecastType } from "../models/enums";
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
  let maxTemp: number = 0;
  let minTemp: number | null = 0;
  let icon: string = "";
  let date: any = "";

  switch (type) {
    
    case ForecastType.Weekly: {
      date = new Date(item.Date).getDay();
      maxTemp = Math.round(item.Temperature.Maximum.Value);
      minTemp = Math.round(item.Temperature.Minimum.Value);
      icon = item.Day.Icon;
      break;
    }

    case ForecastType.Hourly:
      date = new Date(item.DateTime).getHours();
      maxTemp = Math.round(item.Temperature.Value);
      minTemp = null;
      icon = item.WeatherIcon;
      break;
  }

  const days = [
    "'יום א",
    "'יום ב",
    "'יום ג",
    "'יום ד",
    "'יום ה",
    "'יום ו",
    "יום שבת",
  ];

  const hours = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  return (
    <StyledWeatherItem>
      <DateTime>
        {type === ForecastType.Weekly ? days[date] : hours[date]}
      </DateTime>
      <MaxTemperature>{maxTemp}°</MaxTemperature>
      <MinTemperature>{minTemp ? minTemp + "°" : ""}</MinTemperature>
      <Icon>{icon}</Icon>
    </StyledWeatherItem>
  );
}

export default WeatherItem;
