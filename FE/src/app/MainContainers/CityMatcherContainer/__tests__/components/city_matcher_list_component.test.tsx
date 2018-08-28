import CityMatcherListComponent from "MainContainers/CityMatcherContainer/components/CityMatcherListComponent";
import { shallow } from "enzyme";
import { cities } from "../../__mocks__/cities.mock";
import { autoCompleteResults } from "../../__mocks__/autocomplete_results.mock";
import toJson from "enzyme-to-json";
import * as React from "react";

describe("<CityMatcherListComponent />", () => {
  describe("render()", () => {
    test("renders CityMatcherListComponent", () => {
      const onCityInputChange = jest.fn();
      const onCityInputFocus = jest.fn();
      const activateRow = jest.fn();
      const logCity = jest.fn();
      const wrapper = shallow(
        <CityMatcherListComponent
          cities={cities}
          autoCompleteResults={autoCompleteResults}
          onCityInputChange={onCityInputChange}
          onCityInputFocus={onCityInputFocus}
          activateRow={activateRow}
          logCity={logCity}
          currentActiveRow={1}
          currentQueryPage={8}
        />
      );
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
