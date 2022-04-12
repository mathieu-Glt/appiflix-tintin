import React, { useEffect } from 'react';
import './searchBar.scss';
import { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { SearchMoviesWithKeyWord } from '../../api/moviedb'
import axios from 'axios';
import { config } from '../../config';


function Form() {

    
    const [error, setError] = useState(null);
    const [isLoaded, setIsloaded] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [movies, setMovies] = useState([]);


    useEffect((e)=>{
        console.log(e.target.value)
        setInputValue(e.target.value)
        
        
        function SearchMoviesWithKeyWord(setInputValue) {
            axios.get(config.movie_api_url + 'search/movie?api_key=' + config.movie_api_key + '&query=' + setInputValue)
            .then((response)=>{
                console.log(response.data.results)
                setMovies(response.data)
                setIsloaded(true)
                return response.data;
            
            },
            (error) => {
                setError(error)
            })
        }
        
    }, []);

    if(error) {
        return <div>Erreur : {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    }


    const searchClick = (e) => {
        e.preventDefault();
        setToggleSearch(!toggleSearch);

    };

        /*const onSubmitSearchMoviesWithKeyWord = ()=> {
            SearchMoviesWithKeyWord(inputValue)
      
               .then((response)=>{
                    console.log(response)
                    setMovies(response);
                })
            } */   


        
    return (
        <div className='loop_search_container'>
        <a href="/" className='nav_action_link' onClick={searchClick}>
        <SearchIcon />
        </a>
        <form 
        className='form_search'
        onSubmit={(e)=>{
            e.preventDefault();
            SearchMoviesWithKeyWord();
        }}
        >
            <div className='form_search_input'>
                <input 
                className={`${toggleSearch ? 'search_form' : 'nav-transparent_link'}`} 
                type="text" name="name" id="search" value={inputValue}
               //value={setInputValue}
                onChange={(e)=>{
                    console.log(e.currentTarget.value)
                    setInputValue(e.currentTarget.value)
                }}
                placeholder="Search" 
                />
                
                <input 
                className={`${toggleSearch ? 'button_submit' : 'nav-transparent_link'}`} 
                type="submit" 
                value="Submit"
                />
            </div>
        </form>
    
    </div>

    );
            
}

export default Form;
