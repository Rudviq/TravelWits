import React from 'react'



const MovieList = ({movies}) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return Array.from({ length: 10 }, (_, i) => {
      if (i < fullStars) {
        return <span key={i} className="star filled">&#9733;</span>;
      } else if (i === fullStars && hasHalfStar) {
        return <span key={i} className="star half-filled">&#9733;</span>;
      } else {
        return <span key={i} className="star">&#9733;</span>;
      }
    });
  };
  return (
    
    <div className='container'>
      <div className='movie-list'>
        {movies.map((movie, index) => (
            <div className='movie-item' key={index}>
            <div className='movie-header'>
                <span className='movie-title'>{movie.title}</span>
                <span className='movie-genre'>{movie.genre}</span>
            </div>
            <div className='movie-rating'>
                {/* {Array.from({ length: 10 }, (_, i) => (
                <span key={i} className={`star ${i < movie.rating ? 'filled' : ''}`}>
                    ★
                </span>
                ))} */}
                 {renderStars(movie.rating)}
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default MovieList
