import * as React from "react";
import styled from "styled-components";
import WeatherItem from "./WeatherItem";
import "./WeatherCast.scss";
import { ForecastTitle, ForecastType } from "../models/enums";

const StyledWeatherCast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0.3;
  padding-bottom: 15px;
  box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
  background-color: white;
  border-radius: 60px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  margin: 0.67em 6% 0.67em 0;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex: 1;
`;

function WeatherCast({ data, type }: Record<string, any>) {

  return (
    <StyledWeatherCast>
      <Title>
          {type === ForecastType.Hourly
            ? ForecastTitle.Hourly
            : ForecastTitle.Weekly}
      </Title>
      <Item>
        {data && (type === ForecastType.Weekly
          ? data.map((forecast: Record<string, any>, index: number) => {
              return <WeatherItem key={index} item={forecast} type={type} />;
            })
          : data.slice(0,5).map((forecast: Record<string, any>, index: number) => {
              return <WeatherItem key={index} item={forecast} type={type} />;
            }))}
      </Item>
    </StyledWeatherCast>
  );
}


export default React.memo(WeatherCast);
