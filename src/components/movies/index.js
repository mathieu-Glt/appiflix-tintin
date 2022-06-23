import React from "react";
import "./movies.scss";
import { useState, useEffect } from "react";
import requests from "../../configApi/Request";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import axios from "axios";


function Movies() {


    const [movieDatabase, setMovieDatabase] = useState([]);


    useEffect(() => {
        async function fetchDatabase() {
            const request = await axios.get(requests.fetchAllTintinDatabase);
            console.log(request.data.results);

            setMovieDatabase(request.data.result)
        }
        fetchDatabase();
    }, []);

    console.log(movieDatabase);
    const tintinPicture = [
        "1.jpg", "2.jpg", "3.jpg", "4.jpg",
        "5.jpg", "6.jpg", "7.jpg", "8.jpg",
        "9.jpg", "10.jpg", "11.jpg", "12.jpg",
        "13.jpg", "14.jpg", "15.jpg", "16.jpg",
        "17.jpg", "18.jpg", "19.jpg", "20.jpg",
        "21.jpg", "22.jpg", "23.jpg", "24.jpg"
    ];


    return (
        <div className="movies_container  ">
            <h1 className="banner__title pt-5 text-warning">
                Toute la série des aventures de Tintin
            </h1>


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
    )


}

export default Movies;