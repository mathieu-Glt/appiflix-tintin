import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import requests from "../../configApi/Request";
// On importe une fonction maison de validation de formulaire
import {validateInputField} from '../../helperForm/form-validator';
import './form.scss';

const Login = (props) => {
    const [error, setError] = useState(null);
    const [redirect, setRedirect] = useState(false);
    // création des states du formulaire
    const [email, setEmail] = useState("");
    const [hashPassword, setHashPassword] = useState("");
    // on envoie le formulaire
    const onSubmitForm = () => {
        // on récupère les valeurs des states du from que l'on met dans un object
        let datas = {
            email: email,
            hashPassword: hashPassword
        }
        // envoie le formulaire vers l'api
        axios.post(requests.api_url+'/login', datas)
        .then((response) => {
            //si la réponse est status 200
            if(response.data.status === 200) {
                // si tout se passe bien enregistrement du token dans le localstorage
                window.localStorage.setItem('b4y-token', response.data.token)
                //on redirige vers l'acceuil
                setRedirect(true)
            }
        })
        .catch(err=>console.log(err))
    }

    if(redirect) {
        return <Navigate  to="/acceuil" />
    }

    return(
        <div>
            <h1>Formulaire </h1>
            {/*formulaire*/}
            <form
                    className='b-form'
                    onSubmit={(e)=>{
                        e.preventDefault();
                        onSubmitForm();
                    }}
            >
                <input
                    type='text'
                    placeholder='Your email'
                    onChange={(e)=>{
                        setEmail(e.currentTarget.value)
                    }}
                />
                <input
                    type='text'
                    placeholder='Your password'
                    onChange={(e)=>{
                        setHashPassword(e.currentTarget.value)
                    }}
                />
                <input type="submit" name="Registered"/>
            </form>
        </div>
    )


}

export default Login;