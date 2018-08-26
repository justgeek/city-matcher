import { combineReducers } from "redux";
import CityMatcher, {
  City
} from "../MainContainers/CityMatcherContainer/reducer";

export interface State {
  CityMatcher: {
    cities: City[];
    currentQueryOldCities: City[];
    currentActiveRow: number | null;
    currentLog: string;
  };
}

export default combineReducers({
  CityMatcher
});
