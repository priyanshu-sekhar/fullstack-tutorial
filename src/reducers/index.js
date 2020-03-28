import {combineReducers} from "redux";
import PlaylistReducer from "./PlaylistReducer";

export default combineReducers({
    playlists: PlaylistReducer
});