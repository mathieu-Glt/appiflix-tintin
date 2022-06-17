import React from "react";
import "./Banner.scss";
import { useState, useEffect } from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import requests from "../../configApi/Request";
import axios from "axios";


function Banner() {


    const [movieApi, setMovieApi] = useState([]);

    useEffect(() => {
        async function fetchDataApi() {
            const request = await axios.get(requests.fetchAllTintinApi);
            //console.log(request);
            //console.log(request.data.results)

            setMovieApi(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]

            );
        }
        fetchDataApi();
    }, []);

    //console.log(movieApi);




    return (
        <div className="banner">
            <div className="banner__content">
                <h1 className="banner__title">
                    {movieApi.title}
                </h1>
                <div className="image">
                    <img className="image_api" src={requests.base_url_img + movieApi.poster_path} />
                </div>
                <p className="banner__paragraphe">
                    {movieApi.overview}
                </p>
                <p className="release_date">
                    {movieApi.release_date}
                </p>

                <div className="banner__buttons">
                    <button className="banner_button">
                        <PlayCircleIcon />Lecture</button>
                    <button className="banner_button">
                        <HelpOutlineIcon />PLus d'infos</button>

                </div>
            </div>
        </div>
    )
}

export default Banner;