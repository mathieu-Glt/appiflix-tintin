const API_Key = "fe7aee14ddcfaddd60f447c438c996bd";
const BASE_URL = "https://api.themoviedb.org/3";
const URL_img = "https://image.tmdb.org/t/p/w185";
const api_url = "http://localhost:8080"

const requests = {
    base_url_img: `${URL_img}`,
    fetchTrending: `${BASE_URL}/trending/movie/week?api_key=${API_Key}`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_Key}`,
    fetchAllTintinApi: `${BASE_URL}/search/movie?api_key=${API_Key}&language=fr&query=tintin`,
    fetchAllTintinDatabase: `${api_url}/api/tintins`,
    fetchAllHergeDatabase: `${api_url}/api/herges`,
    fetchAllPersoDatabase: `${api_url}/api/personnages`
}

export default requests;