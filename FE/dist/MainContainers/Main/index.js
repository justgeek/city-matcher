"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var routes_config_1 = require("../../Config/routes.config");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderRoute = function (route, index) {
            return (React.createElement(react_router_dom_1.Route, { exact: true, path: route.path, component: route.component, key: index }));
        };
        return _this;
    }
    Main.prototype.render = function () {
        return React.createElement(react_router_dom_1.Switch, null, routes_config_1.appRoutes.map(this.renderRoute));
    };
    return Main;
}(React.PureComponent));
exports.default = Main;
//# sourceMappingURL=index.js.map