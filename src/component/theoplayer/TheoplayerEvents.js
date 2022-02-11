/**
 * mapping for player events
 * @note every wrapper must implement these events
 * @author Aamir khan
 * @type {Object.<string, string>}
 * @readonly
 * @public
 */
const TheoplayerEvents = {
    timechanged: "timechanged",
    playing: "playing",
    paused: "paused",
    play: "play",
    stallstarted: "stallstarted",
    stallended: "stallended",
    seek: "seek",
    seeked: "seeked",
    DVRWindowExceeded: "DVRWindowExceeded",
    videoqualitychanged: 'videoqualitychanged',
    audioqualitychanged: 'audioqualitychanged',
    audiochanged: 'audiochanged',
    sourceunloaded: 'sourceunloaded',
    sourceloaded: 'sourceloaded',
    ready: 'ready',
    cueenter: 'cueenter',
    cueexit: 'cueexit',
    subtitleenabled:'subtitleenabled'
}


export default TheoplayerEvents
