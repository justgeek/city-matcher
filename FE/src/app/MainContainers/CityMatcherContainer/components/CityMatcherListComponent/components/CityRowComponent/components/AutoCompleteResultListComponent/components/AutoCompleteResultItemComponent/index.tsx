import * as React from "react";
import { City } from "MainContainers/CityMatcherContainer/reducer";
import { logCityPayload } from "MainContainers/CityMatcherContainer/actions";

interface Props {
  originCity: City;
  resultCity: City;
  index: number;
  logCity: ({ cityLog }: logCityPayload) => void;
}

export default class AutoCompleteResultItemComponent extends React.PureComponent<
  Props
> {
  render() {
    const { logCity, originCity, resultCity } = this.props;
    return (
      <li>
        <span>{resultCity.name}</span>
        <button
          className="uk-button uk-button-default uk-button-small uk-align-right uk-margin-small-right"
          onClick={() => {
            logCity({
              cityLog: `"Original City: ${originCity.name}, id: ${
                originCity.id
              }"--------"Clicked City: ${resultCity.name}, id: ${
                resultCity.id
              }"`
            });
          }}
        >
          LOG CITY
        </button>
      </li>
    );
  }
}
