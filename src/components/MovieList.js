import React from 'react'


const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return Array.from({ length: 10 }, (_, i) => {
    if (i < fullStars) return <span key={i} className="star filled">&#9733;</span>;
    if (i === fullStars && hasHalfStar) return <span key={i} className="star half-filled">&#9733;</span>;
    return <span key={i} className="star">&#9733;</span>;
  });
};

const MovieItem = React.memo(({ movie }) => (
  <div className='movie-item'>
    <div className='movie-header'>
      <span className='movie-title'>{movie.title}</span>
      <span className='movie-genre'>{movie.genre}</span>
    </div>
    <div className='movie-rating'>{renderStars(movie.rating)}</div>
  </div>
));


const MovieList = ({ movies }) => (
  <div className='container'>
    <div className='movie-list'>
      {movies.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      ))}
    </div>
  </div>
);

export default React.memo(MovieList);
