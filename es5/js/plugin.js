// use the videojs core version with VHS
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _videoJsDistAltVideoCore = require('video.js/dist/alt/video.core');

var _videoJsDistAltVideoCore2 = _interopRequireDefault(_videoJsDistAltVideoCore);

var _videojsChromecast = require('./videojs-chromecast');

var _videojsChromecast2 = _interopRequireDefault(_videojsChromecast);

/**
 * The video.js playlist plugin. Invokes the playlist-maker to create a
 * playlist function on the specific player.
 *
 * @param {Array} list
 */
var plugin = function plugin(options) {
  var player = this;
  player.addChild('Chromecast', options);
};

var registerPlugin = _videoJsDistAltVideoCore2['default'].registerPlugin || _videoJsDistAltVideoCore2['default'].plugin;

registerPlugin('chromecast', plugin);

exports['default'] = plugin;
module.exports = exports['default'];