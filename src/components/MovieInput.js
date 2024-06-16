import React from 'react'

const MovieInput = (props) => {
  return (
    <div className='MI'>
      <input 
        placeholder='Enter Movie Name' 
        onChange={props.onInputChange}
      ></input>
    </div>
  )
}

export default MovieInput
