"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var MAP_KEY = process && process.env && process.env.MAP_KEY || "AIzaSyA3C5AilsVhn6xNYDJ73B0eKJwBNFe2RNc";
var _default = {
  URL: {
    googleMaps: 'https://maps.googleapis.com/maps/api/js?key='
  },
  KEY: {
    googleKey: MAP_KEY
  }
};
exports.default = _default;