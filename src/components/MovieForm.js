import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useDispatch } from 'react-redux'
import { movieInfo } from '../actions/movieAction'
const MovieForm = (props) => {
    const dispatch = useDispatch()
    const [movieName, setMovieName] = useState('')
    const [rating, setRating] = useState('')

    const handleChange = (e) => {
        const result = e.target.name
        if (result === "movieName") {
            setMovieName(e.target.value)
        } else if (result === 'rating') {
            setRating(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: uuid(),
            MovieName: movieName,
            Rating: Number(rating)
        }
        //console.log(formData)
        dispatch(movieInfo(formData))
        setMovieName('')
        setRating('')
    }
    return (
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Movie Name" className="form-control" value={movieName} name='movieName' onChange={handleChange} /><br />
                <input type="number" placeholder="IMDB Ranking" className="form-control" value={rating} name='rating' onChange={handleChange} /><br />
                <button type="submit" className="btn btn-primary">ADD</button>
                {/*<input type="submit" value="Add"/>*/}
            </form>
        </div>
    )
}
export default MovieForm