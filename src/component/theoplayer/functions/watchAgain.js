import coreEvents from "../../../core/modules/coreEvents";

function watchAgain(){
    this.activePlayer.seek(0);
    this.activePlayer.play();
    this.emit(coreEvents.DPlayerWatchAgain)
}


export default watchAgain;