// VITE_APP_API=https://api.themoviedb.org/3
// VITE_APP_API_KEY = f67f4686e991d0dc16c641fd9507ceb3
// API for movies: `${apiBaseUrl}/movie/popular?api_key=${apiKey}&page=${page}`
// API for movie details: `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`
// API for search: `${apiBaseUrl}/search/movie?api_key=${apiKey}&query=${searchedTerm}`

import { Route, Routes } from "react-router-dom"
import MovieList from "./pages/movieList/movieList"
import Navbar from "./components/navbar/navbar"
import MovieDetails from "./pages/movieDetails/movieDetails"
import PageNotFound from "./pages/pageNotFound/pageNotFound"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
