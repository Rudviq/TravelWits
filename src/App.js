import { useState, useMemo  } from 'react';
import './App.css';
import MovieSuggestions from './components/MovieSuggestions';
import UserInput from './components/UserInput';

function App() {
  const [ isRatingVisible, setIsRatingVisible] = useState(false);
  const [ isGenreVisible, setIsGenreVisible] = useState(false);
  const [movieInput, setMovieInput] = useState('');
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const MOVIES = [
    { title: "The Matrix", rating: 7.5, genre: "Action" },
    { title: "Focus", rating: 6.9, genre: "Comedy" },
    { title: "The Lazarus Effect", rating: 6.4, genre: "Thriller" },
    { title: "Everly", rating: 5.0, genre: "Action" },
    { title: "Maps to the Stars", rating: 7.5, genre: "Drama" },
  ];


   // Filter movies based on the input
   const filteredMovies = useMemo(() => 
    MOVIES.filter(movie =>
      movie.title.toLowerCase().includes(movieInput.toLowerCase()) &&
      (selectedGenre.length === 0 || selectedGenre.includes(movie.genre)) &&
      (selectedRatings.length === 0 || selectedRatings.some(rating => 
        movie.rating >= rating - 0.5 && movie.rating < rating + 0.5
      ))
    ), [movieInput, selectedGenre, selectedRatings]
  );

  return (
    <div className="App">
      <div className='movieOptions'>
        <UserInput 
          movies = {MOVIES}
          isRatingVisible= {isRatingVisible} 
          setIsRatingVisible = {setIsRatingVisible}
          isGenreVisible= {isGenreVisible}
          setIsGenreVisible = {setIsGenreVisible}
          movieInput = {movieInput}
          setMovieInput = {setMovieInput}
          setSelectedGenre={setSelectedGenre} 
          selectedGenre = {selectedGenre}
          selectedRatings={selectedRatings}
          setSelectedRatings={setSelectedRatings}
        />


        <MovieSuggestions
          movies = {filteredMovies}
          filter = {movieInput}
          isRatingVisible= {isRatingVisible} 
          setIsRatingVisible = {setIsRatingVisible}
          isGenreVisible= {isGenreVisible}
          setIsGenreVisible = {setIsGenreVisible}
        />
      </div>
    </div>
  );
}

export default App;
