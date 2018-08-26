import * as React from "react";
import { fetchOldCitiesPayload } from "MainContainers/CityMatcherContainer/actions";

interface Props {
  onCityInputChange: ({ query }: fetchOldCitiesPayload) => void;
  onCityInputFocus: (index) => void;
  index: number;
}

export default class HeaderComponent extends React.PureComponent<Props> {
  private handleCityInputChange = event => {
    const { onCityInputChange } = this.props;
    onCityInputChange({ query: event.target.value });
  }

  private handleCityFocus = () => {
    const { onCityInputFocus, index } = this.props;
    onCityInputFocus(index);
  }
  render() {
    return (
      <input
        className="uk-form-small uk-align-right"
        placeholder="city name"
        onChange={this.handleCityInputChange}
        onFocus={this.handleCityFocus}
      />
    );
  }
}
