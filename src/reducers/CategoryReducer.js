import {FETCH_CATEGORIES} from "../models/Events";

const INITIAL_STATE = {
  items: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_CATEGORIES:
        return {
          ...state,
          items: action.payload
        };
      default:
        return state;
    }
}