import configureStore from "redux-mock-store";

// Actions to be tested
import * as cityMatcherActions from "MainContainers/CityMatcherContainer/actions";

const mockStore = configureStore();
const store = mockStore();

describe("fetchCities", () => {
  test("Dispatches FETCH_CITIES", () => {
    store.dispatch(cityMatcherActions.doFetchCities());
    expect(store.getActions()).toMatchSnapshot();
  });
});
