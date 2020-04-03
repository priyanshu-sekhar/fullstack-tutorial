import {POST_HEADER} from "../models/Headers";
import {ADD_TO_PLAYLIST} from "../models/Events";
import {logAPIError} from "../models/Errors";
import {playlists_uri} from "../models/Apis";

export const addToPlaylist = (playlist, dispatch, callback) => {
    fetch(playlists_uri, POST_HEADER({playlist}))
        .then(res => res.json())
        .then(value => {
            dispatch({
                type: ADD_TO_PLAYLIST,
                payload: playlist
            });

            callback();
        })
        .catch(err => logAPIError(playlists_uri, err))
};