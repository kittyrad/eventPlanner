import {ADD_LOCATION} from "../constants/action-types";
import {ADD_INTEREST} from "../constants/action-types";

export const addLocation = location => ({ type: ADD_LOCATION, payload: location });
export const addInterest = interest => ({ type: ADD_INTEREST, payload: interest });