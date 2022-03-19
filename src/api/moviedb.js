import axios from "axios";
import { config } from '../config';


export async function SearchMoviesWithKeyWord(keyWord) {
    axios.get(config.movie_api_url + 'search/movie?api_key=' + config.movie_api_key + '&query=' + keyWord)
    .then((response)=>{
        console.log(response.data.results)
        return response.data;
    
    })
}


 


