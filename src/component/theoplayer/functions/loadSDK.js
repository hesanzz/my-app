
// import partialRight from "lodash/partialRight";
// import forOwn from "lodash/forOwn";
// import get from 'lodash/get';
// import { addScript, select } from "../../../utils/dom";

import taskQueue from "../../../utils/taskQueue";


/*
const fallbackSrc = 'https://cdn.bitmovin.com/player/web/8/bitmovinplayer.js';
const getSrc = partialRight(get, 'bitmovinConfig.sdkUrl', fallbackSrc);



function loadSDKOld(onSDKloaded) {
  const onload = function onload() {
    onSDKloaded(this);
    this.init();
    // register events
    this.log("Registering events");
    forOwn(this.options.events, (cb, eventName) => { this.on(eventName, cb) });
    this.state = "ready";
  }.bind(this);


  // check if we already have the SDK
  if (select("script[src*='bitmovinplayer.js']")) {
    this.log("SDK already loaded");
    onload();
    return;
  }
  // create the script tag
  this.state = "loading";
  this.log("Loading SDK");
  // TODO(iamaamir): load sdk from npm package instead of url
  addScript(getSrc(this.options), onload);
  this.log("SDK loaded");

}
*/


function loadSDK(onSDKloaded) {
  const self = this;
  taskQueue(() => onSDKloaded(self));
  self.init();
}

export default loadSDK