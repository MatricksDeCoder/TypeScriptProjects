import {UNFAV_EPISODE} from '../constants';
import {IAction, IEpisode} from "../interfaces";

export const unFavEpisodeAction = (dispatch, episode: IEpisode) :IAction  => {
    return dispatch({
        type: UNFAV_EPISODE,
        payload: episode
    });

}