import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../app/movies/duck/operation';

import './componentCss/movieComponent.css'



const MovieComponent = ({movies, getAllMovies}) => {

useEffect(() => { 
    getAllMovies() }, [])

    return <ul>
           {movies.list.map(movie => <li>{movie}</li>)}
        </ul>
}

const mapStateToProps = (state) => ({
    movies: state.movies
})

const mapDispatchToProps = dispatch => ({
    getAllMovies: () => dispatch(getAllMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent)