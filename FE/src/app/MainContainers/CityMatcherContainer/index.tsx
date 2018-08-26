import * as React from "react";
import { connect } from "react-redux";
import LoggerComponent from "./components/LoggerComponent";
import {
  doFetchCities,
  doFetchOldCities,
  fetchOldCitiesPayload,
  doActivateRow,
  doLogCity,
  doClearOldCities,
  logCityPayload
} from "./actions";
import { State as AppState } from "../../Store/reducers";
import {
  selectCities,
  selectCurrentAutoCompleteResults,
  selectCurrentActiveRow,
  selectCurrentLog
} from "./selectors";
import { debounce } from "throttle-debounce";
import CityMatcherListComponent from "./components/CityMatcherListComponent";
import { StyledCityMatcherContainer } from "./styles";

type Props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>;

// Component DOM

class CityMatcherContainer extends React.PureComponent<Props> {
  constructor(props) {
    super(props);

    // Debounce search calls by 500 ms
    this.handleCityInputChange = debounce(500, this.handleCityInputChange);
  }
  componentDidMount() {
    const { doFetchCities } = this.props;

    doFetchCities();
  }

  private handleCityInputChange = ({ query }: fetchOldCitiesPayload) => {
    const { doFetchOldCities } = this.props;
    if (query) {
      doFetchOldCities({ query });
    }
  }

  private handleCityInputFocus = index => {
    const { doActivateRow, doClearOldCities } = this.props;
    // Clear current old cities so it doesn't appear on newly selected rows
    doClearOldCities();
    doActivateRow({ index });
  }

  private activateRow = (index: number) => {
    const { doActivateRow } = this.props;
    doActivateRow({ index });
  }

  private logCity = (cityLog: logCityPayload) => {
    const { doLogCity } = this.props;
    doLogCity(cityLog);
  }

  render() {
    const {
      cities,
      currentActiveRow,
      autoCompleteResults,
      currentLog
    } = this.props;
    return (
      <StyledCityMatcherContainer>
        <CityMatcherListComponent
          cities={cities}
          autoCompleteResults={autoCompleteResults}
          onCityInputChange={this.handleCityInputChange}
          onCityInputFocus={this.handleCityInputFocus}
          activateRow={this.activateRow}
          logCity={this.logCity}
          currentActiveRow={currentActiveRow}
        />
        <LoggerComponent currentLog={currentLog} />
      </StyledCityMatcherContainer>
    );
  }
}
const mapDispatchToProps = {
  doFetchCities,
  doFetchOldCities,
  doActivateRow,
  doLogCity,
  doClearOldCities
};
const mapStateToProps = (state: AppState) => {
  return {
    cities: selectCities(state),
    autoCompleteResults: selectCurrentAutoCompleteResults(state),
    currentActiveRow: selectCurrentActiveRow(state),
    currentLog: selectCurrentLog(state)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityMatcherContainer);
