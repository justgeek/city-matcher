import * as React from "react";
import { StyledLoggerComponent } from "./styles";

interface Props {
  currentLog: string;
}

export default class LoggerComponent extends React.PureComponent<Props> {
  render() {
    const { currentLog } = this.props;
    return (
      <StyledLoggerComponent>
        {!!currentLog ? (
          <p>{currentLog}</p>
        ) : (
          <p>Results will be shown here ...</p>
        )}
      </StyledLoggerComponent>
    );
  }
}
