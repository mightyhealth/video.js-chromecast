// use the videojs core version with VHS
import videojs from "video.js";
import Chromecast from "./videojs-chromecast";

/**
 * The video.js playlist plugin. Invokes the playlist-maker to create a
 * playlist function on the specific player.
 *
 * @param {Array} list
 */
const plugin = function (options) {
  let player = this;
  player.addChild("Chromecast", options);
};

var registerPlugin = videojs.registerPlugin || videojs.plugin;

registerPlugin("chromecast", plugin);

export default plugin;
