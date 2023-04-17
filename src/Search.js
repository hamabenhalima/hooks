import StarRatingComponent from 'react-star-rating-component';



const Search = ({getData,dataRate,rating}) => {
  const onStarClick=(nextValue, preValue, name)=> {
    dataRate(nextValue);
  }

    return(
    <div className="navbarr">
        <input  type="search" placeholder="Search" onChange={(e)=>getData(e.target.value)}/>
        <button type="submit">Search</button>
        <StarRatingComponent
        name="rate1"
        starCount={5}
        value={rating}
        onStarClick={onStarClick} />
    </div>
  )

}

export default Search