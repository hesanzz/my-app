import forEach from "lodash/forEach";
import Singleton from "../../../utils/Singleton";
import taskQueue from "../../../utils/taskQueue";

function destroy() {
    const self = this;
    this.log("Destroying player");
    taskQueue(() =>{self.activePlayer.destroy()});
    forEach(this.options.plugins || [], plugin => {
        this.log("Destroying plugin: " + plugin.name);
        plugin.destroy(self);
    });
    Singleton.remove(self.name);
    Singleton.remove(self.name + "native");
    this.log("Destroying player finished");

}


export default destroy;