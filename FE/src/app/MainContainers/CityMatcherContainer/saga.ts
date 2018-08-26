import { takeLatest, call, put, takeEvery, take } from "redux-saga/effects";
import { Action } from "typescript-fsa";
import {
  doFetchCities,
  fetchingCities,
  doFetchOldCities,
  fetchingOldCities,
  fetchOldCitiesPayload
} from "./actions";
import { CityMatcherService } from "./services";

// watch for disptached action of type FETCH_CITIES
function* fetchCities() {
  yield put(fetchingCities.started({}));
  try {
    const result = yield call(CityMatcherService.getCities);
    yield put(fetchingCities.done({ params: {}, result: { data: result } }));
  } catch (e) {
    yield put(fetchingCities.failed({ params: {}, error: {} }));
  }
}

// watch for disptached action of type FETCH_OLD_CITIES
function* fetchOldCities(action: Action<fetchOldCitiesPayload>) {
  const {
    payload: { query }
  } = action;

  yield put(fetchingOldCities.started({}));
  try {
    const result = yield call(CityMatcherService.getOldCities, query);
    yield put(fetchingOldCities.done({ params: {}, result: { data: result } }));
  } catch (e) {
    yield put(fetchingOldCities.failed({ params: {}, error: {} }));
  }
}

export function* watchFetchCities() {
  yield takeEvery(doFetchCities, fetchCities);
}

export function* watchFetchOldCities() {
  yield takeEvery(doFetchOldCities, fetchOldCities);
}
export default [watchFetchCities, watchFetchOldCities];
