import styled, { StyledComponent } from "styled-components";

export const StyledWeatherItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const DateTime: StyledComponent<"div", any, {}, never> = styled.div`
  font-size: large;
`;

export const MaxTemperature: StyledComponent<"div", any, {}, never> = styled.div`
  color: #1b4de4;
  font-size: 2.25rem;
  font-weight: 700;
`;

export const MinTemperature: StyledComponent<"div", any, {}, never> = styled.div`
  color: #1b4de4;
  font-size: 1.125rem;
  font-weight: 400;
`;

export const Icon: StyledComponent<"div", any, {}, never> = styled.div`
  font-size: 1.125rem;
`;