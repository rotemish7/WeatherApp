import styled from "styled-components";
import { ForecastType } from "../../models/enums";
import WeatherCast from "../../weather/WeatherCast";

const Wrapper = styled.div`
  background: rgb(58, 215, 233);
  background: linear-gradient(
    180deg,
    rgba(58, 215, 233, 0) 0%,
    rgba(75, 216, 232, 1) 0%,
    rgba(152, 219, 227, 1) 50%,
    rgba(113, 140, 252, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 20px;
`;

function Home({ weeklyData, hourlyData, currentCondition }: Record<string, any>) {

  return (
    <Wrapper>
      {currentCondition && (
        <WeatherCast data={currentCondition} type={ForecastType.Daily} />
      )}
      {weeklyData && (
        <WeatherCast data={weeklyData} type={ForecastType.Weekly} />
      )}
      {hourlyData && (
        <WeatherCast data={hourlyData} type={ForecastType.Hourly} />
      )}
    </Wrapper>
  );
}

export default Home;
