import * as React from 'react';
import {IEpisode} from "../interfaces";
import {unFavEpisodeAction} from "../actions/unFavEpisodeAction";
import {favEpisodeAction} from "../actions/favEpisodeAction";
import {store} from "../store";

const EpisodeList = (props: any): JSX.Element => {

    const {state} = React.useContext(store);

    const {toggleFav, toggleText} = props;

    return (

    <section className="episode-layout">
        {state.episodes.map((episode:IEpisode) => {
         if(episode.image) {
        return (
            <section className = "episode-box" key ={episode.id}>
                <img className={"episode-image"}  src={episode.image.medium} alt={episode.name} />
                <div className = "name">{episode.name}</div>
                    <span>Season: {episode.season}</span><span> Number: {episode.number}</span>
                <button onClick ={() => toggleFav(episode)}>
                    {toggleText(episode)}
                </button>
            </section>
        )}

    })}
        </section > )

}

export default EpisodeList;