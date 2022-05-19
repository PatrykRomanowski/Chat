import { createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import { moviesAction } from './app/movies/duck';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

window.store = store

store.dispatch(moviesAction.add('Sezon na misia'));

export default store
