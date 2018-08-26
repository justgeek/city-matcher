import { State as AppState } from "../../Store/reducers";

export const selectCities = (state: AppState) => {
  return state.CityMatcher.cities;
};

export const selectCurrentAutoCompleteResults = (state: AppState) => {
  return state.CityMatcher.currentQueryOldCities;
};

export const selectCurrentActiveRow = (state: AppState) => {
  return state.CityMatcher.currentActiveRow;
};

export const selectCurrentLog = (state: AppState) => {
  return state.CityMatcher.currentLog;
};
