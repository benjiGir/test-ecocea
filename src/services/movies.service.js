import axios from 'axios'

const API_KEY = '41749e6d0881a27a54199ebeb0986671'

export async function getPopularMovies(language = 'fr_FR', page = 1) {
  const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`)
  console.log(movies);
  return movies.data.results
}