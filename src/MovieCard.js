import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
const MovieCard = ({movies}) => {
  return (
    <div>
      <div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src={movies.main_img} alt='ay hkeya'/>
      <h1>{movies.title}</h1>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movies.rate}
         
        /> <br/>
      <span class="minutes">{movies.duration}</span>
      <p class="type">{movies.genre}</p>
    </div>
    <div class="movie_desc">
      <p class="text">
        {movies.description}
      </p>
    </div>
   
  </div>
  <div class="blur_back "></div>
</div>
</div>
  )
}

export default MovieCard