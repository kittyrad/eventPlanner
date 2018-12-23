import {ADD_LOCATION} from "../constants/action-types";
import {ADD_INTEREST} from "../constants/action-types";

const initialState = {
  availableLocations: [],
  interests: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOCATION:
            return { ...state, availableLocations: [...state.availableLocations, action.payload]};
        case ADD_INTEREST:
            return { ...state, interests: [...state.interests, action.payload]}
        default:
            return state;
    }
};

export default rootReducer;