import React from 'react'

const CategoryOptions = (props) => {
  
  const genres = ['Any Genre', ...new Set(props.movies.map(movie => movie.genre))];
  
  return (
    <div className='container-genre'>
      
       {genres.map((genre, index) => (
        <label className='genre-option' key={index} >
          <input 
            type='checkbox' 
            onChange={() => props.onGenreSelect(genre === 'Any Genre' ? '' : genre)}
            checked={genre === 'Any Genre' ? props.selectedGenre.length === 0 : props.selectedGenre.includes(genre)}
          />
          <span>{genre}</span>
        </label>
      ))}
    </div>
  )
}

export default CategoryOptions
