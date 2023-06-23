
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';

function App() {

  const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=42b3dd400c3712e5cfe9406c13a12f38"
  const apiSearchUrl = "https://api.themoviedb.org/3/search/movie?api_key=42b3dd400c3712e5cfe9406c13a12f38&query="

  const [movies, setMovies] = useState([])
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(apiUrl)
    .then(res=> res.json())
    .then(data => setMovies(data.results))
  },[])

  console.log(movies)

  const handleSearch = (e) => {
    e.preventDefault()
    fetch(apiSearchUrl + term)
    .then(res=>res.json())
    .then(data=> setMovies(data.results))
  }
 
  return (
    <div className="App">
      <div className="search-nav"> 
        <div className='title'>
          <h1>Movies </h1>
        </div>
        <div className='search_box'>
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value)}/>
            <button>Search</button>
          </form>
        </div>
      </div>
      <div className='movies'>
        {movies.map((movie) => <MovieCard {...movie} />)}
      </div>
    </div>
  );
}

export default App;
