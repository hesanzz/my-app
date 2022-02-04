import DPlayer from './diagnal-webplayer/src/core/DPlayer';
import Bitmovin from './diagnal-webplayer/src/players/Bitmovin';
import BitmovinEvents from './diagnal-webplayer/src/players/Bitmovin/BitmovinEvents';
import { log } from './diagnal-webplayer/src/utils/common';

const wrapperEvents = BitmovinEvents;

const events = {
  [wrapperEvents.playing]: (data) => {
    log('playing', data);
  },

  [wrapperEvents.sourceunloaded]: (data) => {
    log('sourceunloaded', data);
  },

  [wrapperEvents.stallstarted]: (data) => {
    log('stallstarted', data);
  },
};

const InitPlayer = () => {
  // const [state] = stoare;
  // console.log('static state', state());

  const playerConfig = {
    device: 'web',
    events,
    wrapperEvents,
    bitmovinConfig: {
      playerConfig: {
        key: 'b7ef39d2-03a7-451b-a9e1-da3266fb6d4c',
        ui: false,
        style: {
          aspectratio: '2:1',
        },
        tweaks: {
          file_protocol: true,
          app_id: 'com.intigral.webtv',
        },
        playback: {
          autoplay: true,
        },
      },
    },
  };
  return DPlayer.createPlayer(Bitmovin, playerConfig);
};

export default InitPlayer;