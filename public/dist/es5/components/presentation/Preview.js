"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;


// Styling Object
var style = {
  jobPost: {
    padding: 16,
    background: "#f9f9f9",
    border: "1px solid #ddd",
    marginBottom: 24
  }
};

module.exports = function (props) {
  var job = props;

  return React.createElement(
    "div",
    { style: style.jobPost },
    React.createElement(
      "h4",
      null,
      job.title
    ),
    React.createElement(
      "p",
      null,
      job.description
    )
  );
};