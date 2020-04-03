import React, {useEffect, useState} from 'react';
import './App.css';
import Playlists from "./components/Playlists";
import {useDispatch, useSelector} from "react-redux";
import {Player} from 'video-react';
import {fetchCategories} from "./actions/CategoryActions";

function App() {
    const items = useSelector(({playlists}) => playlists.items);
    const [selectedItem, setSelectedItem] = useState({
        // videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        videoUrl: "https://www.youtube.com/watch?v=77wafaFbZ6Y"
    });
    const categories = useSelector(({categories}) => categories.items);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchCategories(dispatch);
        console.log(categories);
    }, []);

    console.log('selected item', selectedItem);
    return (
        <div className="App">
            <li className={"category-header"}>
                {categories.map(category => {
                    return (
                        <ul>
                            {category}
                        </ul>
                    );
                })}
            </li>

            <div className={"app-body"}>
                <div className={"player"}>
                    <Player>
                        <source src={selectedItem.videoUrl}/>
                    </Player>
                </div>

                <Playlists
                    items={items}
                    onSelect={(item) => setSelectedItem(item)}
                />
            </div>
        </div>
    );
}

export default App;
