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

    console.log(movieApi);




    return (
        <div className="banner">
            <h1 className="banner__title">
                {movieApi.title}
            </h1>

            <div className="banner__content d-flex flex-row  w-100 ms-1">
                <div className="image w-40 ms-1">
                    <img className="image_api" src={requests.base_url_img + movieApi.poster_path} />
                </div>
                <div>
                <p className="banner__paragraphe w-60">
                    {movieApi.overview}
                    {movieApi.release_date}
                </p>

                </div>

                <div className="banner__buttons ms-1">
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