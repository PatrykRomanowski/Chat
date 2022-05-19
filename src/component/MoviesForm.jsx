import React from 'react';
import { connect } from 'react-redux';
import actions from '../app/movies/duck/actions';
import axios from 'axios'
import {URL} from '../consts/firebase'

const FormComponent = (props) => {

    const movieInput = React.createRef()

    const addMovie = (event) => {
        event.preventDefault()
        props.add(movieInput.current.value)
        console.log('form', movieInput.current.value)
        
axios.get(URL)
   .then(response => console.log(response.data))
   .catch(response => console.log(response))

axios.put(URL, {
    1: movieInput.current.value
})
    }

    return <form onSubmit={addMovie}>
        <input ref={movieInput}/>
        <button type='submit'>ADD</button>
    </form>
}

const mapDispatchToProps = dispatch => ({
    add: movie => dispatch(actions.add(movie))
})

export default connect(null, mapDispatchToProps)(FormComponent)