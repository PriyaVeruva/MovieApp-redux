import { createStore, combineReducers } from 'redux'
import movieReducer from '../reducers/movieReducer'
const configureStore = () => {
   // const data = JSON.parse(localStorage.getItem('movieList'))

    const store = createStore(combineReducers({
        movies:  movieReducer
    }))
    return store
}
export default configureStore