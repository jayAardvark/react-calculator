var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Calculator = function (_React$Component) {_inherits(Calculator, _React$Component);
  function Calculator(props) {_classCallCheck(this, Calculator);var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this,
    props));_this.





    handleClickAC = function (event) {
      _this.setState({ display: event.target.value });
    };_this.

    handleClick = function (event) {
      if (_this.state.display != "0") {
        _this.setState({ display: _this.state.display + event.target.value });
      } else {
        _this.setState({ display: event.target.value });
      }
    };_this.

    handleClickOperator = function (event) {
      var displayVar = _this.state.display;
      var myRegex = /[+-/*]$/;
      console.log(displayVar + " dispVar");
      if (myRegex.test(displayVar)) {
        var newDisplay = displayVar.replace(myRegex, event.target.value);
        console.log((typeof newDisplay === "undefined" ? "undefined" : _typeof(newDisplay)) + " type Display");
        _this.setState({
          display: newDisplay });

      } else {
        _this.setState({
          display: _this.state.display + event.target.value });

      }
    };_this.

    handleClickEquals = function () {
      _this.setState({
        display: eval(_this.state.display) });

    };_this.


    handleClickDecimal = function (event) {
      var myString = _this.state.display;

      var myRegex = /\d*\.?\d*$/;
      var getMatch = void 0;
      if (myString.match(myRegex) == null) {
        getMatch = "0";
      } else {
        getMatch = myString.match(myRegex).toString(); //without toString(), getMatch is array.
      }

      console.log(getMatch + " getMatch");
      var checkDecimal = getMatch.includes(".");

      if (checkDecimal == false) {
        _this.setState({
          display: _this.state.display + event.target.value });

      }
    };_this.state = { display: "0" };return _this;} //fix this logic
  _createClass(Calculator, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "container" },
          React.createElement("div", { id: "display" }, this.state.display),
          console.log(this.state.display),

          React.createElement("button", {
              id: "clear",
              type: "button",
              "class": "btn btn-warning",
              value: "0",
              onClick: this.handleClickAC }, "AC"),




          React.createElement("button", {
              id: "zero",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClick,
              value: 0 }, "0"),



          React.createElement("button", {
              id: "one",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClick,
              value: 1 }, "1"),



          React.createElement("button", {
              id: "two",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClick,
              value: 2 }, "2"),



          React.createElement("button", {
              id: "three",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClick,
              value: 3 }, "3"),



          React.createElement("button", {
              id: "four",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClick,
              value: 4 }, "4"),



          React.createElement("button", {
              id: "five",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClick,
              value: 5 }, "5"),



          React.createElement("button", {
              id: "six",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClick,
              value: 6 }, "6"),



          React.createElement("button", {
              id: "seven",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClick,
              value: 7 }, "7"),



          React.createElement("button", {
              id: "eight",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClick,
              value: 8 }, "8"),



          React.createElement("button", {
              id: "nine",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClick,
              value: 9 }, "9"),



          React.createElement("button", {
              id: "add",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClickOperator,
              value: "+" }, "+"),




          React.createElement("button", {
              id: "subtract",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClickOperator,
              value: "-" }, "-"),




          React.createElement("button", {
              id: "multiply",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClickOperator,
              value: "*" }, "*"),



          React.createElement("button", {
              id: "divide",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClickOperator,
              value: "/" }, "/"),



          React.createElement("button", {
              id: "decimal",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClickDecimal,
              value: "." }, "."),



          React.createElement("button", {
              id: "equals",
              type: "button",
              "class": "btn btn-warning",
              onClick: this.handleClickEquals }, "=")));





    } }]);return Calculator;}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById("target-render"));