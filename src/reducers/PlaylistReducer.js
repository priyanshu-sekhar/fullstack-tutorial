import {FETCH_PLAYLIST, SELECTED_ITEM} from "../models/Events";

const INITIAL_STATE = {
    items: [],
    selectedItem: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PLAYLIST:
            return {
                ...state,
                items: action.payload
            };
        case SELECTED_ITEM:
            return {
                ...state,
                selectedItem: action.payload
            };
        default:
            return state;
    }
}