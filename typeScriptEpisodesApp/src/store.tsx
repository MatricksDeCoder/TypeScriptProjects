import * as React from 'react';
import {IState} from  './interfaces';
import {reducer} from './reducers';

const initialState: IState = {episodes: [], favorites: []}
export const store = React.createContext<IState | any>(initialState);

export const StoreProvider = (props:any): JSX.Element => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return <store.Provider value={{state, dispatch}}>{props.children}</store.Provider>
}