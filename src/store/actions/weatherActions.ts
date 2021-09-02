import { ActionsType } from '../../components/models/enums';
import { WeatherService } from '../../services/weather/WeatherService';

export function loadAutocompleteOptions(searchInput: string) {
  if (searchInput === '') {
    return;
  }
  return async (dispatch: (arg0: { type: string; options: any }) => void) => {
    try {
      const options = await WeatherService.getAutoComplete(searchInput);
      dispatch({ type: ActionsType.AutocompleteOptions, options });
    } catch (error) {
      dispatch({ type: ActionsType.AutocompleteOptions, options: [] });
      //   dispatch(setToast({ msg: `Can't get auto complete options`, type: 'error' }));
    }
  };
}

export function loadDefaultOptions() {
  return async (dispatch: (arg0: { type: ActionsType; defaultOptions: any }) => void) => {
    try {
      const defaultOptions = await WeatherService.getTopCities();
      dispatch({ type: ActionsType.DefaultOptions, defaultOptions });
    } catch (error) {
      dispatch({ type: ActionsType.DefaultOptions, defaultOptions: [] });
      //   dispatch(setToast({ msg: `Can't get auto complete options`, type: 'error' }));
    }
  };
}

export function loadCurrLocation(currLocation: Record<string, any>) {
  return async (dispatch: (arg0: { type: string; location: any }) => void) => {
    try {
      const location = await WeatherService.getGeoPosition(currLocation);
      dispatch({ type: ActionsType.DefaultLocation, location });
    } catch (err) {
      //   dispatch (setToast ({msg: `Can't load current Location`, type: 'error'}));
    }
  };
}

export function loadCurrForecast(currLocation: string) {
  return async (dispatch: (arg0: { type: string; currentForecast: any }) => void) => {
    try {
      const currentForecast = await WeatherService.getCurrentForecast(currLocation);
      dispatch({ type: ActionsType.CurrentForecast, currentForecast });
    } catch (err) {
      //   dispatch (setToast ({msg:`Can't load forecast`, type: 'error'}));
    }
  };
}

export function loadWeeklyForecast(currLocation: string) {
  return async (dispatch: (arg0: { type: string; weeklyForecast: any }) => void) => {
    try {
      const weeklyForecast = await WeatherService.getWeeklyForecast(currLocation);

      dispatch({ type: ActionsType.WeeklyForecast, weeklyForecast });
    } catch (err) {
      //   dispatch (setToast ({msg:`Can't load forecast`, type: 'error'}));
    }
  };
}

export function loadHourlyForecast(currLocation: string) {
  return async (dispatch: (arg0: { type: string; hourlyForecast: any }) => void) => {
    try {
      const hourlyForecast = await WeatherService.getHourlyForecast(currLocation);

      dispatch({ type: ActionsType.HourlyForecast, hourlyForecast });
    } catch (err) {
      //   dispatch (setToast ({msg:`Can't load forecast`, type: 'error'}));
    }
  };
}

export function loadDefaultForecasts(userLocation: Record<string, any>) {
  return async (
    dispatch: (arg0: {
      type: string;
      defaultLocation?: any;
      currentForecast?: any;
      weeklyForecast?: any;
      hourlyForecast?: any;
      defaultOptions?: any;
    }) => void,
  ) => {
    try {
      const defaultLocation = await WeatherService.getGeoPosition(userLocation);
      const hourlyForecast = await WeatherService.getHourlyForecast(defaultLocation);
      const weeklyForecast = await WeatherService.getWeeklyForecast(defaultLocation);
      const currentForecast = await WeatherService.getCurrentForecast(defaultLocation);
      const defaultOptions = await WeatherService.getTopCities();

      dispatch({ type: ActionsType.DefaultLocation, defaultLocation });
      dispatch({ type: ActionsType.CurrentForecast, currentForecast });
      dispatch({ type: ActionsType.WeeklyForecast, weeklyForecast });
      dispatch({ type: ActionsType.HourlyForecast, hourlyForecast });
      dispatch({ type: ActionsType.DefaultOptions, defaultOptions });
    } catch (err) {
      //   dispatch (setToast ({msg: `Can't load default location`, type: 'error'}));
    }
  };
}
