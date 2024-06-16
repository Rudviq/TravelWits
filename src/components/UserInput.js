import React,{useState} from 'react'
import MovieInput from './MovieInput'
import RatingOptions from './RatingOptions';
import CategoryOptions from './CategoryOptions';

const UserInput = (props) => {
    const [ isDownArrowR, setIsDownArrowR] = useState(true);
    const [ isDownArrowC, setIsDownArrowC] = useState(true);
    
    console.log(props.selectedGenre);
    const handleInputChange = (event) => {
      props.setMovieInput(event.target.value);
    };

    const handleClickRating = () => {
      if (isDownArrowR) {
        props.setIsGenreVisible(false);
        setIsDownArrowC(true);
      }
      setIsDownArrowR(!isDownArrowR);
      props.setIsRatingVisible(!props.isRatingVisible);

    };

    const handleClickGenre = () => {
        if (isDownArrowC) {
          props.setIsRatingVisible(false);
          setIsDownArrowR(true);
        }
        setIsDownArrowC(!isDownArrowC);
        props.setIsGenreVisible(!props.isGenreVisible);
    };

    const handleGenreSelect = (genre) => {
      
      if (genre === '') {
        // If 'Any Genre' is selected, clear all selections
        props.setSelectedGenre([]);
      } else if (props.selectedGenre.includes(genre)) {
        // If the genre is already selected, remove it
        props.setSelectedGenre(props.selectedGenre.filter(g => g !== genre));
      } else {
        // If the genre is not selected, add it
        props.setSelectedGenre([...props.selectedGenre, genre]);
      }
      
    };

    const handleRatingSelect = (rating) => {
      if (rating === 0) {
        // If 'Any Rating' is selected, clear all selections
        props.setSelectedRatings([]);
      } else if (props.selectedRatings.includes(rating)) {
        // If the rating is already selected, remove it
        props.setSelectedRatings(props.selectedRatings.filter(r => r !== rating));
      } else {
        // If the rating is not selected, add it
        props.setSelectedRatings([...props.selectedRatings, rating]);
      }
    };

  return (
    <div className='uI'>
      <MovieInput
        onInputChange={handleInputChange}
      />
      
      <div className='demo'>
        <div className="box" onClick={handleClickRating}>
          <span className="text">Rating</span>
          <span className="arrow">
              {isDownArrowR ? "▼" : "▲"}
          </span>
          </div>
          {!isDownArrowR && (
            // <div className='dropdown-container'>
              <RatingOptions 
                  movies= {props.movies}
                  onRatingSelect={handleRatingSelect}
                  selectedRatings={props.selectedRatings}
              />
            // </div>
          )}
      </div>
     
        <div className='demo'>
          <div className="box1" onClick={handleClickGenre}>
          <span className="text">Genre</span>
          <span className="arrow">
              {isDownArrowC ? "▼" : "▲"}
              
          </span>
          </div>
          {!isDownArrowC &&  (
            // <div className='dropdown-container'>
              <CategoryOptions 
                movies= {props.movies}
                onGenreSelect={handleGenreSelect} 
                selectedGenre={props.selectedGenre}  
              />
            // </div>
          )}
        </div>
    </div>
  )
}

export default UserInput
