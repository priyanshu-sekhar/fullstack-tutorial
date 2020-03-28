import React from 'react';
import './App.css';
import Player from "./components/Player";
import Playlists from "./components/Playlists";
import {useSelector} from "react-redux";

function App() {
    const items = useSelector(({playlists}) => playlists.items);
    const selectedItem = useSelector(({playlists}) => playlists.selectedItem);

    return (
        <div className="App">
            <div className={"category-header"}>
                Categories
            </div>

            <div className={"app-body"}>
                <div className={"player"}>
                    <Player
                        iitem={selectedItem}
                    />
                </div>

                <div className={"playlist"}>
                    <Playlists
                        items={items}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
