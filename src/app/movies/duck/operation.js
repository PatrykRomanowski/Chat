import actions from "./actions"

const fetchMovies = async () => {
    console.log('json')

    const response = await fetch('https://chatapp-95ab1-default-rtdb.firebaseio.com/text.json', {method: 'GET'})
    const json = await response.json()
    console.log(json)

    return json
}

export const getAllMovies = () => 
    async (dispatch) => {
        const movies = await fetchMovies()
        // console.log(movies)
        movies.map(movie => dispatch(actions.add(movie)))
    }
