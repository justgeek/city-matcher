import * as React from "react";
import { Link } from "react-router-dom";
import { NUMBER_OF_RESULTS } from "../CityMatcherListComponent";

interface Props {
  numberOfCities: number;
}

interface State {
  arrayOfNumbers: number[];
  currentAnchorPosition: number; // Current window size of how many anchors are shown
  maxAnchorPosition: number | null;
}
const NUMBER_OF_ANCHORS = 10; // how many anchors should be shown

export default class PaginatorComponent extends React.PureComponent<
  Props,
  State
> {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfNumbers: [],
      currentAnchorPosition: 1,
      maxAnchorPosition: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.arrayOfNumbers != state.arrayOfNumbers) {
      const numberOfPages = Math.ceil(props.numberOfCities / NUMBER_OF_RESULTS);
      return {
        arrayOfNumbers: Array.from(
          { length: numberOfPages },
          (element, index) => index + 1
        ),
        maxAnchorPosition: Math.ceil(numberOfPages / NUMBER_OF_ANCHORS)
      };
    }
  }

  private renderPageNumber = (number, index) => {
    const search = "?page=" + number;
    return (
      <li key={index}>
        <Link
          to={{
            search
          }}
        >
          {number}
        </Link>
      </li>
    );
  }

  private slicePagesPerAnchorSize(arrayOfNumbers, anchorPosition) {
    const startOfSlice = (anchorPosition - 1) * NUMBER_OF_ANCHORS;
    const endOfSlice = startOfSlice + NUMBER_OF_ANCHORS + 1;

    return arrayOfNumbers.slice(startOfSlice, endOfSlice);
  }

  private incrementAnchorPosition = () => {
    this.setState({
      currentAnchorPosition: this.state.currentAnchorPosition + 1
    });
  }

  private decrementAnchorPosition = () => {
    this.setState({
      currentAnchorPosition: this.state.currentAnchorPosition - 1
    });
  }

  render() {
    const {
      arrayOfNumbers,
      currentAnchorPosition,
      maxAnchorPosition
    } = this.state;
    return (
      <ul className="uk-pagination uk-flex-center">
        {currentAnchorPosition > 1 && (
          <li>
            <a onClick={this.decrementAnchorPosition}>&lt;</a>
          </li>
        )}
        {!!arrayOfNumbers &&
          arrayOfNumbers.length > 0 &&
          this.slicePagesPerAnchorSize(
            arrayOfNumbers,
            currentAnchorPosition
          ).map(this.renderPageNumber)}
        {currentAnchorPosition < maxAnchorPosition && (
          <li>
            <a onClick={this.incrementAnchorPosition}>&gt;</a>
          </li>
        )}
      </ul>
    );
  }
}
