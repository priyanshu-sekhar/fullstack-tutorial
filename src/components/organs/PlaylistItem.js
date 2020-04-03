import React from "react";
import '../../styles/PlayListItem.css'

function PlaylistItem({item, onSelect}) {
    const {videoName, videoThumbnail} = item;

    return (
        <div className={"playlist-item"} onClick={() => onSelect(item)}>
            <div className={"playlist-content"}>
                <img
                    src={videoThumbnail}
                    className={"playlist-image"}
                    alt={videoName}
                />

                <div className={"playlist-name"}>
                    {videoName}
                </div>
            </div>

            <div className={"playlist-border"}/>
        </div>
    )
}

export default PlaylistItem;