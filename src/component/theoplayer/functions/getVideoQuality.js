function getVideoQuality(key) {
 return this.activePlayer.getPlaybackVideoData()[key];
}

export default getVideoQuality;