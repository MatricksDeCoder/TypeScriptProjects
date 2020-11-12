import {IAction, IEpisode, IState} from "../interfaces";
import {FAV_EPISODE, FETCH_DATA,UNFAV_EPISODE} from "../constants";

export const reducer = (state:IState, action:IAction): IState => {

    switch (action.type) {
        case FAV_EPISODE:
            return {...state, favorites: [...state.favorites, action.payload]}
        case FETCH_DATA:
            return {...state, episodes: action.payload}
        case UNFAV_EPISODE:
            const newFavs: Array<IEpisode> = state.
            favorites.
            filter(episode => {
                return episode.id !== action.payload.id
            });
            return {...state, favorites: [...newFavs]}
        default:
            return state;
    }
}
