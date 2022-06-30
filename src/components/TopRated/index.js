import React from "react";
//import './contact.scss';
import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../configApi/Request";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RateStar from "../RateStar";


function TopRated() {
    const [movieRatedDatabase, setMovieRatedDatabase] = useState([]);

    useEffect(() => {
        async function fetchDatabase() {
            const request = await axios.get(requests.fetchAllMoviesRating);
            console.log(request.data.results);

            setMovieRatedDatabase(request.data.result)
        }
        fetchDatabase();
    }, []);
console.log(movieRatedDatabase)


    return (
        <div>
            <h1 className="bg-dark text-success">LES MEILLEURS FILMS </h1>
            <section className="card_movie d-flex flex-row flex-wrap justify-content-center p-4 pt-4">


                {movieRatedDatabase.map((movieRatedDatabase, index) => (
                    <div className="movie_container p-4 card text-bg-dark mb-3 d-flex flex-column m-4 w-25 justify-content-center" key={index}>

                        <div className="d-flex flex-row pb-2 justify-content-center mb-2">
                            <RateStar />
                        </div>
                        <div className="image ">
                            <div className="movie" key={index}>
                                <img className="image_database" src={process.env.PUBLIC_URL + 'tintin/' + movieRatedDatabase.picture} />
                            </div>
                        </div>
                        <p className="movies__synopsis card-text pt-4">
                            {movieRatedDatabase.synopsis}
                        </p>
                        <div className="movies__buttons p-2 ">
                            <button className="banner_button btn-sm">
                                <PlayCircleIcon />Lecture</button>
                        </div>
                        <div className="movies__buttons p-2 d-flex flex-row justify-content-around ">
                            <button className="banner_button btn-sm bg-success">
                                Ajouter
                            </button>
                            <button className="banner_button btn-sm bg-warning">
                                Editer
                            </button>

                            <button className="banner_button btn-sm bg-danger">
                                Supprimer
                            </button>

                        </div>

                    </div>

                ))}
            </section>

        </div>
    );
};

export default TopRated;