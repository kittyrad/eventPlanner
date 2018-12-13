import {ADD_LOCATION} from "../constants/action-types";

const initialState = {
  availableLocations: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOCATION:
            return { ...state, availableLocations: [...state.availableLocations, action.payload]};
        default:
            return state;
    }
};

export default rootReducer;