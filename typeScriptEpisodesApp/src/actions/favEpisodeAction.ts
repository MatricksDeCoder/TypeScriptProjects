import {FAV_EPISODE} from '../constants';
import {IAction, IEpisode} from "../interfaces";

export const favEpisodeAction = (dispatch, episode: IEpisode) :IAction  => {
        return dispatch({
            type: FAV_EPISODE,
            payload: episode
        });

}