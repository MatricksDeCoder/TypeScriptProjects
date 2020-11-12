import * as React from 'react';
import {IEpisode} from "../interfaces";
import {store} from "../store";

const FavoriteList = (props: any): JSX.Element => {

    const {state} = React.useContext(store);

    return (

        <section className="episode-layout">
            {state.favorites.map((episode:IEpisode) => {
                if(episode.image) {
                    return (
                        <section className = "episode-box" key ={episode.id}>
                            <img className={"episode-image"}  src={episode.image.medium} alt={episode.name} />
                            <div className = "name">{episode.name}</div>
                            <span>Season: {episode.season}</span><span> Number: {episode.number}</span>
                        </section>
                    )}

            })}
        </section > )

}

export default FavoriteList;