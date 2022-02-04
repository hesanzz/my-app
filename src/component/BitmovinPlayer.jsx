import React, { useEffect, useState } from 'react';
import InitPlayer from './InitPlayer';

const BitmovinPlayer = () => {
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    setPlayer(InitPlayer());
  }, []);

  useEffect(() => {
    if (!player) {
      return;
    }
    const dash = 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd';
    player.activePlayer.load({
      dash,
    });
  }, [player]);

  return (
    <div id="dplayer" />
  );
};

export default BitmovinPlayer;