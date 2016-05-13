"use strict";

var archDevRequire = require("@walmart/electrode-archetype-react-app-dev/require");
var _ = archDevRequire("lodash");
var mergeWebpackConfig = archDevRequire("webpack-partial").default;

var testConfig = require("./base-test.js");
var inlineSourcemapsConfig = require("./partial/sourcemaps-inline");

module.exports = _.flow(
  mergeWebpackConfig.bind(null, {}, testConfig),
  inlineSourcemapsConfig()
)();
