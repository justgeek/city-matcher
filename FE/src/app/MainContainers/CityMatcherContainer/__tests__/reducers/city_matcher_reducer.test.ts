import cityMatcherReducer, {
  initialState
} from "MainContainers/CityMatcherContainer/reducer";
import { doActivateRow } from "MainContainers/CityMatcherContainer/actions";

describe("INITIAL_STATE", () => {
  test("is initial", () => {
    const action = { type: "dummy_action" };

    expect(cityMatcherReducer(undefined, action)).toMatchSnapshot();
  });
});

describe("ACTIVE_ROW_STATE", () => {
  test("activate row by index returns expected state", () => {
    const index = 1;
    const action = { type: doActivateRow.type, payload: { index } };
    const expectedState = { ...initialState, currentActiveRow: index };
    expect(cityMatcherReducer(undefined, action)).toEqual(expectedState);
  });
});
