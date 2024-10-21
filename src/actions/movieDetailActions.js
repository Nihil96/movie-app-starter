import axios from "axios"

export const FETCH_MOVIE_REQUEST = "FETCH_MOVIE_REQUEST"
export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS"
export const FETCH_MOVIE_FAILURE = "FETCH_MOVIE_FAILURE"

const apiBaseUrl = import.meta.env.VITE_APP_API
const apiKey = import.meta.env.VITE_APP_API_KEY

export const fetchMovieRequest = () => ({ type: FETCH_MOVIE_REQUEST })

export const fetchMovieSuccess = (movie) => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: movie,
})

export const fetchMovieFailure = (error) => ({
  type: FETCH_MOVIE_FAILURE,
  payload: error,
})

export const fetchMovieDetails = (movieId) => {
  return (dispatch) => {
    dispatch(fetchMovieRequest())
    axios
      .get(`${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`)
      .then((res) => {
        const movie = res.data
        dispatch(fetchMovieSuccess(movie))
      })
      .catch((error) => {
        const errorMsg = error.message
        dispatch(fetchMovieFailure(errorMsg))
      })
  }
}
