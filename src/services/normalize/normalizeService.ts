import { weatherProperties } from "../../components/models/enums";

function current(data: Record<string,any>) {
    const hours = new Date(data[0].LocalObservationDateTime).getHours();
    const minutes = new Date(data[0].LocalObservationDateTime).getMinutes().toLocaleString();

    const normalizedData: weatherProperties = {
        date: hours + ':' + minutes,
        maxTemp: Math.round(data[0].Temperature.Metric.Value),
        weatherIcon: data[0].WeatherIcon,
        weatherText: data[0].WeatherText,
        isCurrentDate: true
    }
    return normalizedData;
}

function weekly(data: Record<string,any>) {
    const normalizedData: weatherProperties = {
        date:  new Date(data.Date).getDay(),
        maxTemp: Math.round(data.Temperature.Maximum.Value),
        minTemp: Math.round(data.Temperature.Minimum.Value),
        weatherIcon: data.Day.Icon,
        weatherText: data.Day.IconPhrase,
        isCurrentDate: new Date().getDate() === new Date(data.date).getDate()
    }
    return normalizedData;
}

function hourly(data: Record<string,any>)  {
    const normalizedData: weatherProperties = {
        date: new Date(data.DateTime).getHours(),
        maxTemp: Math.round(data.Temperature.Value),
        weatherIcon: data.WeatherIcon,
        weatherText: data.IconPhrase,
        isCurrentDate: new Date().getDate() === new Date(data.date).getDate()
    }
    return normalizedData;
}

export const NormalizeService = {
    current,
    weekly,
    hourly
}