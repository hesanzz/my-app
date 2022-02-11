function getAvailableSubtitles() {
  const subtitles = this.activePlayer.subtitles.list();
  return subtitles
  }
  
  export default getAvailableSubtitles;