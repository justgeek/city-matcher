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
var React = require("react");
var CityMatcherComponent_1 = require("./components/CityMatcherComponent");
var LoggerComponent_1 = require("./components/LoggerComponent");
var services_1 = require("./services");
var style = require("./style.css");
var CityMatcherContainer = (function (_super) {
    __extends(CityMatcherContainer, _super);
    function CityMatcherContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CityMatcherContainer.prototype.componentDidMount = function () {
        try {
            services_1.getCities();
        }
        catch (error) {
            console.log(error);
        }
    };
    CityMatcherContainer.prototype.render = function () {
        return (React.createElement("div", { className: style.cityMatcherWrapper },
            React.createElement(CityMatcherComponent_1.default, null),
            React.createElement(LoggerComponent_1.default, null)));
    };
    return CityMatcherContainer;
}(React.PureComponent));
exports.default = CityMatcherContainer;
// export default connect(
//   undefined,
//   undefined
// )(CityMatcherContainer);
//# sourceMappingURL=index.js.map