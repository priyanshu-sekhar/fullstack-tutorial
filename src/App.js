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
                <Player
                    iitem={selectedItem}
                />

                <Playlists
                    items={items}
                />
            </div>
        </div>
    );
}

export default App;
