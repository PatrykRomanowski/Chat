import { combineReducers } from "redux";
import actorsReducer from "./app/actors/duck/reducers";
import moviesReducers from "./app/movies/duck/reducers";

const rootReducer = combineReducers({
    actors: actorsReducer,
    movies: moviesReducers
})

export default rootReducer