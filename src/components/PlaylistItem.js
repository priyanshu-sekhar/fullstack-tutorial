import React from "react";
import '../styles/PlayListItem.css'

function PlaylistItem({item}) {
    const {image, name} = item;

    return (
        <div className={"playlist-item"}>
            <div className={"playlist-content"}>
                <img
                    src={image}
                    className={"playlist-image"}
                    alt={name}
                />

                <div className={"playlist-name"}>
                    {name}
                </div>
            </div>

            <div className={"playlist-border"}/>
        </div>
    )
}

export default PlaylistItem;