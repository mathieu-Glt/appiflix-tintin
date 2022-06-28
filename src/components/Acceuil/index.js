import React from "react";
//import './contact.scss';
import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../configApi/Request";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


function Acceuil() {
    const [movieDatabase, setMovieDatabase] = useState([]);

    useEffect(() => {
        async function fetchDatabase() {
            const request = await axios.get(requests.fetchAllTintinDatabase);
            console.log(request.data.results);

            setMovieDatabase(request.data.result)
        }
        fetchDatabase();
    }, []);



    return(
        <div>
            <h1>TOUS LES FILMS TINTIN</h1>
            <section className="card_movie d-flex flex-row flex-wrap justify-content-center p-4 pt-4">
                {movieDatabase.map((movieDatabase, index) => (
                    <div className="movie_container p-4 card text-bg-dark mb-3 d-flex flex-column m-4 w-25 justify-content-center" key={index}>
                        <div className="image ">
                            <div className="movie" key={index}>
                                <img className="image_database" src={process.env.PUBLIC_URL + 'tintin/' + movieDatabase.picture} />
                            </div>
                        </div>
                        <p className="movies__synopsis card-text pt-4">
                            {movieDatabase.synopsis}
                        </p>
                        <div className="movies__buttons p-2 ">
                            <button className="banner_button btn-sm">
                                <PlayCircleIcon />Lecture</button>

                        </div>
                    </div>

                ))}
            </section>

        </div>
    );
};

export default Acceuil;