import { all, fork } from "redux-saga/effects";
import {
  watchFetchCities,
  watchFetchOldCities
} from "./app/MainContainers/CityMatcherContainer/saga";
export default function* rootSaga() {
  yield all([fork(watchFetchCities), fork(watchFetchOldCities)]);
}
