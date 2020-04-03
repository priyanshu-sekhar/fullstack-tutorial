import {ADD_TO_PLAYLIST, FETCH_PLAYLIST, SELECTED_ITEM} from "../models/Events";

const INITIAL_STATE = {
    items: [
        {
            videoName: 'Corona Live Count',
            videoThumbnail: 'data:image/jpeg;base64,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'
        }
    ],
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
        case ADD_TO_PLAYLIST:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        default:
            return state;
    }
}