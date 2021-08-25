import { ForecastType } from "../models/enums";
import "./WeatherItem.scss";

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
    <div className="weather-item">
      <div className="weather-item__date">
        {type === ForecastType.Weekly ? days[date] : hours[date]}
      </div>
      <div className="weather-item__max-temp">{maxTemp}°</div>
      <div className="weather-item__min-temp">
        {minTemp ? minTemp + "°" : ""}
      </div>
      <div className="weather-item__icon">{icon}</div>
    </div>
  );
}

export default WeatherItem;
