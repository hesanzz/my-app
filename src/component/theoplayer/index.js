/**
 * this module contains the Theoplayer player wrapper that will be used to handle all the player functionality
 * @author Aamir khan
 * @param {Object} options all the player options
 * @return {Object} the player wrapper object
 * @note every function must be define on the prototype of the player wrapper
 * @module Theoplayer
 * @namespace Theoplayer
 */

import { unImplemented } from "../diagnal-webplayer/src/utils/common";
import State from "../diagnal-webplayer/src/utils/events/State";
import taskQueue from "../diagnal-webplayer/src/utils/taskQueue";
import init from "./functions/init";


// import TheoplayerEvents from "./TheoplayerEvents";
// import destroy from "./functions/destroy";
// import getAudio from "./functions/getAudio";
// import getAudioQuality from "./functions/getAudioQuality";
// import getAvailableAudio from "./functions/getAvailableAudio";
// import getAvailableAudioQualities from "./functions/getAvailableAudioQualities";
// import getAvailableSubtitles from "./functions/getAvailableSubtitles";
// import getAvailableVideoQualities from "./functions/getAvailableVideoQualities";
// import getBufferedRanges from "./functions/getBufferedRanges";
// import getConfig from "./functions/getConfig";
// import getCurrentTime from "./functions/getCurrentTime";
// import getDuration from "./functions/getDuration";
// import getManifest from "./functions/getManifest";
// import getPlaybackVideoData from "./functions/getPlaybackVideoData";
// import getVideoQuality from "./functions/getVideoQuality";
// import init from "./functions/init";
// import isPaused from "./functions/isPaused";
// import isPlaying from "./functions/isPlaying";
// import isStalled from "./functions/isStalled";
// import load from "./functions/load";
// import loadSDK from "./functions/loadSDK";
// import pause from "./functions/pause";
// import play from "./functions/play";
// import seek from "./functions/seek";
// import setAudio from "./functions/setAudio";
// import setAudioQuality from "./functions/setAudioQuality";
// import setSubtitle from "./functions/setSubtitle";
// import setVideoQuality from "./functions/setVideoQuality";
// import watchAgain from "./functions/watchAgain";


/** @constructor */
function Theoplayer(options) {
    this.options = options
    this.config = this.options.TheoplayerConfig;
    this.activePlayer = null;
    this.reportError = unImplemented('reportError') // TODO: implement error reporting
    this.state = new State();
    this.events = {};
    this.log("Creating Theoplayer Player", this.options);
}

// /**
//  * load the player SDK from the url and call the callback
//  * @param {Function} onSDKloaded to be called after the SDK is loaded
//  * @note this can be a promise based function but we will have to consider the old devices that do not support promises
//  */
Theoplayer.prototype.loadSDK = function loadSDK(onSDKloaded) {
    const self = this;
    taskQueue(() => onSDKloaded(self));
    init(self);
}
Theoplayer.prototype.init = init;

// Theoplayer.prototype.load = load;
// Theoplayer.prototype.play = play;
// Theoplayer.prototype.pause = pause;
// Theoplayer.prototype.watchAgain = watchAgain;
// Theoplayer.prototype.getPlaybackVideoData = getPlaybackVideoData;
// Theoplayer.prototype.seek = seek;
// Theoplayer.prototype.isPlaying = isPlaying;
// Theoplayer.prototype.isPaused = isPaused;
// Theoplayer.prototype.isStalled = isStalled;

// Theoplayer.prototype.getDuration = getDuration;
// Theoplayer.prototype.getBufferedRanges = getBufferedRanges;
// Theoplayer.prototype.getCurrentTime = getCurrentTime
// Theoplayer.prototype.setCurrentTime = seek;

// Theoplayer.prototype.getAvailableSubtitles = getAvailableSubtitles;
// Theoplayer.prototype.getCurrentSubtitle = unImplemented("getCurrentSubtitle");
// Theoplayer.prototype.setSubtitle = unImplemented("setSubtitle");


// // Audio
// Theoplayer.prototype.getAvailableAudioQualities = getAvailableAudioQualities;
// Theoplayer.prototype.getAudioQuality = getAudioQuality;
// Theoplayer.prototype.setAudioQuality = setAudioQuality;
// Theoplayer.prototype.setAudio = setAudio;
// Theoplayer.prototype.getAudio = getAudio;
// Theoplayer.prototype.getAvailableAudio = getAvailableAudio;


// // Video
// Theoplayer.prototype.getAvailableVideoQualities = getAvailableVideoQualities;
// Theoplayer.prototype.getVideoQuality = getVideoQuality;
// Theoplayer.prototype.setVideoQuality = setVideoQuality;

// Theoplayer.prototype.getManifest = getManifest;
// Theoplayer.prototype.getConfig = getConfig;

// Theoplayer.prototype.getPlaybackVideoData = getPlaybackVideoData
// Theoplayer.prototype.setSubtitle = setSubtitle




// Theoplayer.prototype.getVideoElement = function getVideoElement() {
//     return this.activePlayer.getVideoElement();
// }


// Theoplayer.prototype.destroy = destroy;

export default Theoplayer;