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
import PaginatorComponent from "./components/PaginatorComponent";
import { RouteComponentProps } from "react-router-dom";

type Props = typeof mapDispatchToProps &
  ReturnType<typeof mapStateToProps> &
  RouteComponentProps<any>;

interface State {
  currentQueryPage: number | null;
}

// Component DOM

class CityMatcherContainer extends React.PureComponent<Props, State> {
  private historyListener;
  constructor(props) {
    super(props);
    this.state = {
      currentQueryPage: this.extractPageFromQuery(props.history.location.search)
    };

    // Debounce search calls by 500 ms
    this.handleCityInputChange = debounce(500, this.handleCityInputChange);
  }
  componentDidMount() {
    const { doFetchCities, history } = this.props;
    console.log(this.props); // "?filter=top&origin=im"
    this.historyListener = history.listen(location => {
      console.log(location);
      this.setState({
        currentQueryPage: this.extractPageFromQuery(location.search)
      });
    });

    doFetchCities();
  }

  componentDidUnMount() {
    // This will unsubscribe from listening
    this.historyListener();
  }

  private extractPageFromQuery(queryString) {
    if (queryString.indexOf("?page=") !== -1) {
      const pageNumber = queryString.split("?page=")[1];

      if (typeof parseInt(pageNumber) === "number") {
        return pageNumber;
      }
    }
    return null;
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

    const { currentQueryPage } = this.state;
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
          currentQueryPage={currentQueryPage}
        />
        <PaginatorComponent numberOfCities={cities.length} />
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
