import CityMatcherContainer from "../MainContainers/CityMatcherContainer";
import { PureComponent } from "react";

export interface RouteType {
  path: string;
  component: any;
}
// Usually we add More Routes (Screens) in this file
export const appRoutes: RouteType[] = [
  { path: "/", component: CityMatcherContainer }
];
