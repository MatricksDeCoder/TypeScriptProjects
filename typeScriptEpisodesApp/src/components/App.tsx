import * as React from 'react';
import {Link} from "@reach/router";

export const App = (props:any): JSX.Element => {

    return (
        <>
            <div className = "header">
                <h3>Ricky Martin Episodes - <Link to = "/">View All </Link>
                    <Link to = "/myFavs">View Favorites</Link></h3>
            </div>
            {props.children}
        </>
    )

}

