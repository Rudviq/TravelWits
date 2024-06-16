import React from 'react'
import MovieList from './MovieList'
import RatingOptions from './RatingOptions'
import CategoryOptions from './CategoryOptions'

const MovieSuggestions = (props) => {
  return (
    <div className='movieSuggest'>
        {props.filter && <MovieList filter={props.filter} movies= {props.movies} />}
    </div>
  )
}

export default MovieSuggestions
