import store from "../js/store/index";
import { addLocation } from "../js/actions/index";
import { addInterest } from "../js/actions/index";

window.store = store;
window.addLocation = addLocation;
window.addInterest = addInterest;