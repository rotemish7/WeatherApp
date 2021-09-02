import { ActionsType } from '../../components/models/enums';

const INITIAL_STATE = {
  options: [],
  currLocation: null,
  currForecast: null,
  weeklyForecast: null,
  hourlyForecast: null,
  // favorites: localStorage.favoriteDB ? JSON.parse(localStorage.favoriteDB) : [],
  loading: true,
};

export function weatherReducer(state = INITIAL_STATE, action: Record<string, any>) {
  switch (action.type) {
    case ActionsType.DefaultOptions:
      return {
        ...state,
        options: action.defaultOptions,
      };
    case ActionsType.DefaultLocation:
      return {
        ...state,
        currLocation: action.location,
      };
    case ActionsType.CurrentForecast:
      return {
        ...state,
        currForecast: action.currentForecast,
        loading: false,
      };
    case ActionsType.WeeklyForecast:
      return {
        ...state,
        weeklyForecast: action.weeklyForecast,
        loading: false,
      };
    case ActionsType.HourlyForecast:
      return {
        ...state,
        hourlyForecast: action.hourlyForecast,
        loading: false,
      };
    case 'ADD_LOCATION_TO_FAV':
      return {
        ...state,
        //   favorites: [...state.favorites,action.favLocation]
      };
    case 'DELETE_LOCATION_FROM_FAV':
      return {
        ...state,
        //   favorites: state.favorites.filter(favLocation => favLocation.id !== action.locationId)
      };
    default:
      return state;
  }
}
