import React from "react";
import PlaylistItem from "./PlaylistItem";
import '../styles/Playlists.css'

function Playlists({items}) {
    return <div className={"playlist"}>
        <div className={"playlist-header"}>
            Play next
        </div>

        {items.map(item => {
            return (
                <PlaylistItem
                    item={item}
                />
            )
        })}
    </div>
}

export default Playlists;