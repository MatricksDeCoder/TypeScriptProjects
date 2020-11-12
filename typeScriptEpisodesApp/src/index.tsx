import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './components/App';
import {StoreProvider} from './store';
import{Router, RouteComponentProps} from '@reach/router';
import {HomePage}  from './components/HomePage';
import {FavoritePage} from './components/FavoritePage';
import './index.css';

const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
	<StoreProvider>
        <Router>
            <App path = '/'>
                <RouterPage pageComponent={<HomePage />} path = '/' />
                <RouterPage pageComponent={<FavoritePage />} path = '/myFavs' />
            </App>
        </Router>
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
