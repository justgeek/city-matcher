import { NavLink, Switch, Route } from "react-router-dom";
import * as React from "react";
import { RouteType, appRoutes } from "../../Config/routes.config";
import HeaderComponent from "CommonComponents/HeaderComponent";
import styled from "styled-components";

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export default class Main extends React.PureComponent {
  private renderRoute = (route: RouteType, index: number) => {
    return (
      <Route exact path={route.path} component={route.component} key={index} />
    );
  }
  render() {
    return (
      <MainStyle>
        <HeaderComponent />
        <Switch>{appRoutes.map(this.renderRoute)}</Switch>
      </MainStyle>
    );
  }
}
