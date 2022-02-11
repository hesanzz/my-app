/* eslint-disable prefer-destructuring */
import * as THEOplayer from 'theoplayer';
import forEach from "lodash/forEach";
import coreEvents from "../../diagnal-webplayer/src/core/modules/coreEvents";
import { log, yell } from "../../diagnal-webplayer/src/utils/common";
import { dispatchCustomEvent, select } from "../../diagnal-webplayer/src/utils/dom";
// import coreEvents from "../../../core/modules/coreEvents";
// import { yell } from '../../../utils/common';
// import { dispatchCustomEvent, select } from "../../../utils/dom";

// import Singleton from "../../../utils/Singleton";



function init(self) {
  log("Initializing player");
  const container = select(self.options.selector);
  const createNativePlayer = () => new THEOplayer.Player(container, { 
    libraryLocation: "https://cdn.myth.theoplayer.com/0584187f-9d9b-470f-9f58-01782ee461cb",
    license: "sZP7IYe6T6fL0SeiTSIK0Oz_0LetFSx10lC-TSbt3ZziCSggCLPlIDh_Iub6FOPlUY3zWokgbgjNIOf9fl5L0SCr3uxeFS5i0Sh-3QPeCZzr3lgeFSfk3S0rIuRcCSAgImfVfK4_bQgZCYxNWoryIQXzImf90SCz0laZ3u0Z0l0r06i6Io4pIYP1UQgqWgjeCYxgflEc3l0r3LakTSfZ0LeoFOPeWok1dDrLYtA1Ioh6TgV6v6fVfKcqCoXVdQjLUOfVfGxEIDjiWQXrIYfpCoj-fgzVfKxqWDXNWG3ybojkbK3gflNWf6E6FOPVWo31WQ1qbta6FOPzdQ4qbQc1sD4ZFK3qWmPUFOPLIQ-LflNWfK1zWDikfgzVfG3gWKxydDkibK4LbogqW6f9UwPkIYz"
  });
  const source = {
    sources: [{
        src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",
        type: "application/x-mpegurl"
    }]
}; 
  self.activePlayer = createNativePlayer();
  self.activePlayer.source = source;

  const plugins = self.options.plugins || [];
  forEach(plugins, plugin => plugin.onload(this));
  dispatchCustomEvent(coreEvents.DPlayerLoaded, this);
  const config = null;
  if(config){
    const onSuccess = () => {log('Successfully loaded Source Config!') }
    const onError = yell("Failed to load Source Config!");
    self.activePlayer.load(config).then(onSuccess, onError);
  }

}
export default init