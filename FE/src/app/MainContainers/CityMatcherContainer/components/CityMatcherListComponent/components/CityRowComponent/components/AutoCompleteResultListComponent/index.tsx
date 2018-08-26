import * as React from "react";
import { City } from "MainContainers/CityMatcherContainer/reducer";
import AutoCompleteResultItem from "./components/AutoCompleteResultItemComponent";
import { logCityPayload } from "MainContainers/CityMatcherContainer/actions";
import { StyledAutoCompleteList } from "./styles";

interface Props {
  autoCompleteResults: City[];
  originCity: City;
  logCity: ({ cityLog }: logCityPayload) => void;
}

export default class AutoCompleteResultListComponent extends React.PureComponent<
  Props
> {
  private renderAutoCompleteResultItem = (resultCity: City, index: number) => {
    return (
      <AutoCompleteResultItem
        originCity={this.props.originCity}
        resultCity={resultCity}
        index={index}
        logCity={this.props.logCity}
        key={index}
      />
    );
  }
  render() {
    const { autoCompleteResults } = this.props;
    return (
      <StyledAutoCompleteList className="uk-list uk-list-divider">
        {autoCompleteResults.map(this.renderAutoCompleteResultItem)}
      </StyledAutoCompleteList>
    );
  }
}
