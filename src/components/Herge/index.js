import React from "react";
import './herge.scss';
import { useState, useEffect } from "react";
import requests from "../../configApi/Request";
import axios from "axios";


function Herge() {

    const [hergeDatabase, setHergeDatabase] = useState([]);

    useEffect(() => {
        async function fetchDatabase() {
            const request = await axios.get(requests.fetchAllHergeDatabase);
            console.log(request.data.results);

            setHergeDatabase(request.data.result)
        }
        fetchDatabase();
    }, []);

    console.log(hergeDatabase);
    const hergePicture = [
        "1.jpg"
    ];

    return(
        <div className="herge_container">
            <h1 className="bg-dark text-info">
                L'HISTOIRE DE HERGE
            </h1>
            <section className="card_movie d-flex flex-row flex-wrap justify-content-center p-4 pt-4">
                {hergeDatabase.map((hergeDatabase, index) => (
                   <div className="movie_container p-5 card text-bg-dark mb-3 d-flex flex-column m-4 w-50 justify-content-center" key={index}>
                        <div className="imageHerge">
                            <img className="image_herge" src={process.env.PUBLIC_URL + 'herge/' + hergeDatabase.picture} />
                        </div>
                        <p className="movies__synopsis card-text pt-4">
                            Prénom: {hergeDatabase.firstName}
                        </p>
                        <p className="movies__synopsis card-text pt-4">
                            Nom: {hergeDatabase.lastName}
                        </p>
                        <p className="movies__synopsis card-text pt-4">
                            Nom d'artiste: {hergeDatabase.nomArtiste}
                        </p>
                        <p className="movies__synopsis card-text  pt-4">
                            Date de naissance de Hergé: {hergeDatabase.date_de_naissance}
                        </p>
                        <p className="movies__synopsis card-text  pt-4">
                            Date de décès de Hergé: {hergeDatabase.date_de_décès}
                        </p>
                        <p className="movies__synopsis card-text  pt-4">
                            Nationalité de Hergé: {hergeDatabase.nationalité}
                        </p>
                        <h3 className="pt-5">Présentation de l'auteur:</h3>
                        <p className="movies__synopsis card-text  pt-4">
                            {hergeDatabase.presentation}
                        </p>
                        <div className="imageHerge" key={index}>
                            <img className="image_herge" src={process.env.PUBLIC_URL + 'serie/tintin-tchang.jpg' } />
                        </div>

                        <h3 className="pt-5">La création des aventures de Tintin:</h3>
                        <p className="movies__synopsis card-text  pt-4">
                            {hergeDatabase.aventures_de_tintin}
                        </p>
                        <div className="imageHerge" key={index}>
                            <img className="image_herge" src={process.env.PUBLIC_URL + 'serie/tintin-smile.jpg' } />
                        </div>








                   </div> 
                ) )}
            </section> 

        </div>
    );
};

export default Herge;