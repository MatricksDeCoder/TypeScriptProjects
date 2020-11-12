import {URL, FETCH_DATA} from '../constants';

export function fetchDataAction(dispatch) {
    fetch(URL).then(res => {
        res.json().then(data => {
            data = data._embedded.episodes;
            return dispatch({
                type:FETCH_DATA,
                payload: data
            })
        })
    })
}
/*
export const fetchDataAction = async (dispatch)  => {

    const response = await fetch(URL);
    const data     = await response.json();
    return dispatch({
        type: FETCH_DATA,
        payload: data
    });

}

 */