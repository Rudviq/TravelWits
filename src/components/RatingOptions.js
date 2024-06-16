import React from 'react'

const RatingOptions = (props) => {

  const ratings = [0, ...Array.from({ length: 10 }, (_, i) => i + 1)];

  return (
    <div className='container-rating'>
     
      {ratings.map((rating) => (
        <label className='rating-option' key={rating}>
          <input 
            type='checkbox'
            onChange={() => props.onRatingSelect(rating)}
            checked={rating === 0 ? props.selectedRatings.length === 0 : props.selectedRatings.includes(rating)}
          />
          <span>
            {rating === 0 ? 'Any Rating' : 
              Array.from({ length: rating }, (_, i) => (
                <span key={i} className='star filled'>★</span>
              ))
            }
          </span>
        </label>
      ))}
    </div>
  )
}

export default RatingOptions
