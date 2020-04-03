import React, {useState} from "react";
import PlaylistItem from "./organs/PlaylistItem";
import '../styles/Playlists.css'
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import {addToPlaylist} from "../actions/PlaylistActions";
import AddToPlaylistModal from "./organs/AddToPlaylistModal";

function Playlists({items, onSelect}) {
    const [show, setShow] = useState(false);
    const [videoName, setVideoName] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [videoThumbnail, setVideoThumbnail] = useState('');

    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        addToPlaylist(
            {videoName, videoUrl, videoThumbnail},
            dispatch,
            handleClose
        );
    };

    return <div className={"playlist"}>
        <div className={"playlist-header"}>
            <span className={"playlist-header-name"}>
                  Play next
            </span>


            <div className="playlist-add-btn">
                <Button variant="primary" onClick={handleShow} size={"sm"}>
                    <i className="fa fa-plus">
                    </i>
                </Button>
            </div>

            <AddToPlaylistModal
                show={show}

                fields={[
                    {label: "Video Name", value: videoName, setValue: setVideoName, mutedText: "Give the video a name"},
                    {label: "Video Url", value: videoUrl, setValue: setVideoUrl},
                    {
                        label: "Video Thumbnail",
                        value: videoThumbnail,
                        setValue: setVideoThumbnail,
                        mutedText: "The youtube url of the video"
                    }
                ]}

                actions={[
                    {handle: handleSubmit, title: 'Add To Playlist', isPrimary: true},
                    {handle: handleClose, title: 'Close'}
                ]}
            />

        </div>

        {items.map(item => {
            return (
                <PlaylistItem
                    item={item}
                    onSelect={onSelect}
                />
            )
        })}
    </div>
}

export default Playlists;