import React from "react";
import './personnage.scss';
import { useState, useEffect } from "react";
import requests from "../../configApi/Request";
import axios from "axios";


function Tintin() {

    const [persoDatabase, setPersoDatabase] = useState([]);

    useEffect(() => {
        async function fetchDatabase() {
            const request = await axios.get(requests.fetchAllPersoDatabase);
            console.log(request.data.results);

            setPersoDatabase(request.data.result)
        }
        fetchDatabase();
    }, []);

    console.log(persoDatabase);
    const persoPicture = [
        "1.jpg",
        "2.jpg",
        "3.jpg"

    ];

    return (
        <div className="herge_container">
            <h1 banner__title pt-5 text-warning>
                LE PERSONNAGE TINTIN

            </h1>

            <section className="card_movie d-flex flex-row flex-wrap justify-content-center p-4 pt-4">
                {persoDatabase.map((persoDatabase, index) => (
                    <div className="movie_container p-5 card text-bg-dark mb-3 d-flex flex-column m-4 w-50 justify-content-center" key={index}>
                        <div className="imageHerge" key={index}>
                            <img className="image_herge" src={process.env.PUBLIC_URL + 'personnage/' + persoDatabase.picture} />
                        </div>
                        <p className="movies__synopsis card-text pt-4">
                            {persoDatabase.presentation}
                        </p>
                        <div className="imageHerge" key={index}>
                            <img className="image_herge" src={process.env.PUBLIC_URL + 'personnage/2.jpg' } />
                        </div>

                        <p className="movies__synopsis card-text pt-4">
                            {persoDatabase.suite}
                        </p>
                        <p className="movies__synopsis card-text pt-4">
                            {persoDatabase.age}
                        </p>
                        <div className="imageHerge" key={index}>
                            <img className="image_herge" src={process.env.PUBLIC_URL + 'personnage/3.jpg' } />
                        </div>

                        <p className="movies__synopsis card-text pt-4">
                            {persoDatabase.personnalité}
                        </p>
                        <p className="movies__synopsis card-text pt-4">
                            {persoDatabase.personnalité_suite}
                        </p>






                    </div>
                ))}
            </section>
        </div>

    );
};

export default Tintin;