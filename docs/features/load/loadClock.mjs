import { clockInterval } from "../../modules/clock/clock.mjs";

function clockInterval() {
  var d = new Date();
  document.querySelector("#clock").innerHTML = d.toLocaleTimeString();
}