import actionCreatorFactory from "typescript-fsa";
import { City } from "./reducer";
const actionCreator = actionCreatorFactory();

export interface fetchedCitiesPayload {
  data: City[];
}

export interface fetchOldCitiesPayload {
  query: string;
}

export interface activateRowPayload {
  index: number;
}

export interface logCityPayload {
  cityLog: string;
}
export const doFetchCities = actionCreator("FETCH_CITIES");
export const fetchingCities = actionCreator.async<{}, fetchedCitiesPayload>(
  "FETCHING_CITIES"
);
export const doFetchOldCities = actionCreator<fetchOldCitiesPayload>(
  "FETCH_OLD_CITIES"
);
export const fetchingOldCities = actionCreator.async<{}, fetchedCitiesPayload>(
  "FETCHING_OLD_CITIES"
);

export const doClearOldCities = actionCreator("CLEAR_CITIES");

export const doActivateRow = actionCreator<activateRowPayload>("ACTIVATE_ROW");

export const doLogCity = actionCreator<logCityPayload>("LOG_CITY");
