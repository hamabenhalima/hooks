import React, { useState } from 'react';
import logo from './logo.svg';
import'./App.css';
import MovieList from './MovieList';
import Search from './Search';
import { v4 as uuidv4 } from 'uuid';

function App()  {
  const [keysearch,setKeysearch] = useState("")
  const [newRate,setNewRate] = useState(1)
  const[movies,setMovies]= useState ([

  { id:uuidv4(),
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      main_img:
      "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    rate: 4,
    genre:"Action,Adventure",
  },
  { id: uuidv4(),
    title: "The Godfather",
    description:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      main_img:
      
      "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
    rate:5,
    genre:"Action,Adventure,Family",

  },
  { id: uuidv4(),
    title: "The Godfather: Part II",
    description:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    main_img:
    "https://upload.wikimedia.org/wikipedia/en/4/4d/Godfather_part_II.jpg",
    rate: 3,
    genre:"Action,Adventure,Family",
    
},
])

const search=(text)=> {
  setKeysearch(text)
}
const setRate =(rate)=> {
  setNewRate(rate)
}

const addMovie=(movie)=>{
  setMovies(movies.concat(movie))
}
return (
  <div className="App">
    <Search search={search} setRate={setRate} newRate={newRate} />
<MovieList addMovie={addMovie}movies={movies.filter(el =>el.rate>= newRate  && el.title.toLowerCase().includes((keysearch.toLowerCase().trim())))}/>
  </div>
);
}

export default App
