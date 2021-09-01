import styled from "styled-components/macro";

export const StyledWeatherCast = styled.div`
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

export const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  margin: 0.67em 6% 0.67em 0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex: 1;
`;