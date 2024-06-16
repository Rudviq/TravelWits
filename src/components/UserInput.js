import React,{useState, useCallback} from 'react'
import MovieInput from './MovieInput'
import RatingOptions from './RatingOptions';
import CategoryOptions from './CategoryOptions';

const UserInput = (props) => {
    const [ isDownArrowR, setIsDownArrowR] = useState(true);
    const [ isDownArrowC, setIsDownArrowC] = useState(true);
    
    
    const handleInputChange = useCallback((event) => {
      props.setMovieInput(event.target.value);
    }, [props.setMovieInput]);

    const handleClickRating = useCallback(() => {
      setIsDownArrowR(prev => !prev);
      props.setIsRatingVisible(prev => !prev);
      if (isDownArrowR) {
        props.setIsGenreVisible(false);
        setIsDownArrowC(true);
      }
    }, [isDownArrowR, props.setIsRatingVisible, props.setIsGenreVisible]);

    const handleClickGenre = useCallback(() => {
      setIsDownArrowC(prev => !prev);
      props.setIsGenreVisible(prev => !prev);
      if (isDownArrowC) {
        props.setIsRatingVisible(false);
        setIsDownArrowR(true);
      }
    }, [isDownArrowC, props.setIsGenreVisible, props.setIsRatingVisible]);

    const handleGenreSelect = useCallback((genre) => {
      props.setSelectedGenre(prev => 
        genre === '' ? [] :
        prev.includes(genre) ? prev.filter(g => g !== genre) :
        [...prev, genre]
      );
    }, [props.setSelectedGenre]);

    const handleRatingSelect = useCallback((rating) => {
      props.setSelectedRatings(prev => 
        rating === 0 ? [] :
        prev.includes(rating) ? prev.filter(r => r !== rating) :
        [...prev, rating]
      );
    }, [props.setSelectedRatings]);


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

export default React.memo(UserInput);