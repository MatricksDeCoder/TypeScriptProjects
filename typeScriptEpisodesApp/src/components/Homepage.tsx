import * as React from 'react';
import {store} from "../store";
import {fetchDataAction} from "../actions/fetchDataAction";
import {IEpisode, IPropsEpisodeList} from "../interfaces";
import {unFavEpisodeAction} from "../actions/unFavEpisodeAction";
import {favEpisodeAction} from "../actions/favEpisodeAction";
import {ADD_TO_FAVS,REMOVE_FROM_FAVS} from "../constants";
import EpisodeList from './EpisodeList';
//import FavoriteList from "./FavoriteList";

//const EpisodeList = React.lazy<any>(() => import('./EpisodeList'));

export const HomePage = (props:any): JSX.Element => {

    const {state,dispatch} = React.useContext(store);

    React.useEffect(() => {
        state.episodes.length===0 && fetchDataAction(dispatch);
    });

    const isInFavs = (episode: IEpisode): boolean => {
        return state.favorites.filter(curr => curr.id === episode.id).length !==0;
    }

    const toggleFav = (episode: IEpisode): void => {
        if(!isInFavs(episode)) {
            favEpisodeAction(dispatch, episode)
        } else {
            unFavEpisodeAction(dispatch, episode)
        }
    }

    const toggleText = (episode: IEpisode): string  => {
        if(isInFavs(episode)) {
            return REMOVE_FROM_FAVS;
        } else {
            return ADD_TO_FAVS;
        }
    }

    const propsPassed: IPropsEpisodeList = {
        toggleFav,
        toggleText
    }


    return (
        //<React.Suspense fallback = {<div className="loader"></div>} >
            <EpisodeList {...propsPassed} />
        //</React.Suspense>
    )

}
