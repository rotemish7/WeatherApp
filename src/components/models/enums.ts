

export enum ForecastType {
    Hourly = 'hourly',
    Weekly = 'weekly',
    Daily = 'daily'
}

export enum ForecastTitle {
    Hourly = 'תחזית שעתית',
    Weekly = 'תחזית שבועית',
    Daily = 'תחזית יומית'
}

export interface weatherProperties {
    date: any,
    maxTemp?: number | null,
    minTemp?: number | null,
    weatherIcon?: string,
    weatherText?: string,
    isCurrentDate?: boolean
}

export const ForecastCondition: Record<string,any> = {
    Sunny: 'שמש'

}


export const days = [
    "'יום א",
    "'יום ב",
    "'יום ג",
    "'יום ד",
    "'יום ה",
    "'יום ו",
    "יום שבת",
  ];

  export const hours = [
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