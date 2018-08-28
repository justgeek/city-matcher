import * as React from "react";
import { City } from "../../reducer";
import CityRowComponent from "./components/CityRowComponent";
import { fetchOldCitiesPayload, logCityPayload } from "../../actions";
import { StyledCityMatcherComponent } from "./styles";

interface Props {
  cities: City[];
  autoCompleteResults: City[];
  onCityInputChange: ({ query }: fetchOldCitiesPayload) => void;
  onCityInputFocus: (index) => void;
  activateRow: (index) => void;
  logCity: ({ cityLog }: logCityPayload) => void;
  currentActiveRow: number | null;
  currentQueryPage: number | null;
}
export const NUMBER_OF_RESULTS = 10; // how many results are shown per page;

// Component DOM
export default class CityMatcherListComponent extends React.PureComponent<
  Props
> {
  private renderCityRow = (city: City, index: number) => {
    const {
      onCityInputChange,
      onCityInputFocus,
      activateRow,
      currentActiveRow,
      autoCompleteResults,
      logCity
    } = this.props;
    const isActive = currentActiveRow === index;
    return (
      <CityRowComponent
        key={index}
        city={city}
        autoCompleteResults={autoCompleteResults}
        onCityInputChange={onCityInputChange}
        onCityInputFocus={onCityInputFocus}
        activateRow={activateRow}
        index={index}
        isActive={isActive}
        logCity={logCity}
      />
    );
  }

  private sliceCitiesPerPage(cities, page) {
    const startOfSlice = (page - 1) * NUMBER_OF_RESULTS;
    const endOfSlice = startOfSlice + NUMBER_OF_RESULTS + 1;

    return cities.slice(startOfSlice, endOfSlice);
  }
  render() {
    const { cities, currentQueryPage } = this.props;
    return (
      <StyledCityMatcherComponent>
        <table className="uk-table uk-table-divider uk-table-striped">
          <tbody>
            {this.sliceCitiesPerPage(cities, currentQueryPage).map(
              this.renderCityRow
            )}
          </tbody>
        </table>
      </StyledCityMatcherComponent>
    );
  }
}
