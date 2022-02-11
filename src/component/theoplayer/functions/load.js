import coreEvents from "../../../core/modules/coreEvents";

function load(config) {
  const player = this;
  player.emit(coreEvents.media.loading);
  return player.activePlayer.load(config)
  .then(() => player.emit(coreEvents.media.success))
  .catch((err) => player.emit(coreEvents.media.failed, err));
}
export default load;