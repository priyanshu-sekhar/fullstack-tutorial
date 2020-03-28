import React, {useEffect} from 'react';
import './App.css';
import Playlists from "./components/Playlists";
import {useDispatch, useSelector} from "react-redux";
import {Player} from 'video-react';
import {fetchCategories} from "./actions/CategoryActions";

function App() {
    const items = useSelector(({playlists}) => playlists.items);
    const selectedItem = useSelector(({playlists}) => playlists.selectedItem);
    const categories = useSelector(({categories}) => categories.items);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchCategories(dispatch);
        console.log(categories);
    }, []);

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
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                    </Player>
                </div>

                <Playlists
                    items={items}
                />
            </div>
        </div>
    );
}

export default App;
