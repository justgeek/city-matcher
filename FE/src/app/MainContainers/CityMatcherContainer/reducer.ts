// actions.ts
import { isType, actionCreatorFactory } from "typescript-fsa";
import { Action } from "redux";
import {
  fetchingCities,
  fetchingOldCities,
  doActivateRow,
  doLogCity,
  doClearOldCities
} from "./actions";

export interface City {
  id: number;
  name: string;
  admin_area: string;
}
type State = {
  cities: City[];
  currentQueryOldCities: City[];
  currentActiveRow: number;
  currentLog: string;
};
export const initialState: State = {
  cities: [],
  currentQueryOldCities: [],
  currentActiveRow: null,
  currentLog: ""
};
const cityMatcherReducer = (state = initialState, action: Action): State => {
  if (isType(action, fetchingCities.done)) {
    const {
      payload: {
        result: { data }
      }
    } = action;
    return { ...state, cities: data };
  }

  if (isType(action, fetchingOldCities.done)) {
    const {
      payload: {
        result: { data }
      }
    } = action;
    return { ...state, currentQueryOldCities: data };
  }

  if (isType(action, doActivateRow)) {
    const {
      payload: { index }
    } = action;
    return { ...state, currentActiveRow: index };
  }

  if (isType(action, doLogCity)) {
    const {
      payload: { cityLog }
    } = action;
    return { ...state, currentLog: cityLog };
  }

  if (isType(action, doClearOldCities)) {
    return { ...state, currentQueryOldCities: [] };
  }

  return state;
};
export default cityMatcherReducer;
