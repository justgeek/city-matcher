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
}

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
  render() {
    const { cities } = this.props;
    return (
      <StyledCityMatcherComponent>
        <table className="uk-table uk-table-divider uk-table-striped">
          <tbody>{cities.map(this.renderCityRow)}</tbody>
        </table>
      </StyledCityMatcherComponent>
    );
  }
}
