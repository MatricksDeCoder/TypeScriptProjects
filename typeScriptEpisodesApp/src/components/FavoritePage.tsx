import * as React from 'react';
import FavoriteList from "./FavoriteList";
//const FavoriteList = React.lazy<any>(() => import('./FavoriteList'));

export const FavoritePage = (props:any): JSX.Element => {
   return (
        //<React.Suspense fallback = {<div className="loader"></div>} >
            <FavoriteList {...props} />
        //</React.Suspense>
    )
}