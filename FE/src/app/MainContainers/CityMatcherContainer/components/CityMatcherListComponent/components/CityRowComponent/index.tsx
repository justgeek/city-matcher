import * as React from "react";
import styled from "styled-components";
import { City } from "../../../../reducer";
import { fetchOldCitiesPayload, logCityPayload } from "../../../../actions";
import {
  selectCurrentActiveRow,
  selectCurrentAutoCompleteResults
} from "../../../../selectors";
import AutoCompleteResultList from "./components/AutoCompleteResultListComponent";
import AutoCompleteInput from "./components/AutoCompleteInputComponent";

// Component Styles
interface Props {
  city: City;
  autoCompleteResults: City[];
  onCityInputChange: ({ query }: fetchOldCitiesPayload) => void;
  onCityInputFocus: (index) => void;
  activateRow: (index) => void;
  logCity: ({ cityLog }: logCityPayload) => void;
  index: number;
  isActive: boolean;
}

const CityRowStyle = styled.tr`
  width: 100%;
`;

// Component DOM
export default class CityRowComponent extends React.PureComponent<Props> {
  render() {
    const {
      city,
      onCityInputChange,
      autoCompleteResults,
      index,
      isActive,
      onCityInputFocus,
      logCity
    } = this.props;

    return (
      <CityRowStyle>
        <td>
          <span className="uk-text-middle">{city.name}</span>
        </td>
        <td>
          {!!autoCompleteResults &&
            autoCompleteResults.length > 0 &&
            isActive && (
              <AutoCompleteResultList
                originCity={city}
                autoCompleteResults={autoCompleteResults}
                logCity={logCity}
              />
            )}
        </td>
        <td>
          <AutoCompleteInput
            index={index}
            onCityInputChange={onCityInputChange}
            onCityInputFocus={onCityInputFocus}
          />
        </td>
      </CityRowStyle>
    );
  }
}
