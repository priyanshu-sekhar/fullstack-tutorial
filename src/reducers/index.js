import {combineReducers} from "redux";
import PlaylistReducer from "./PlaylistReducer";
import CategoryReducer from "./CategoryReducer";

export default combineReducers({
    playlists: PlaylistReducer,
    categories: CategoryReducer
});