import React from 'react';
import './Link.scss';


function LinkAcceuil(props) {

    return (
        <a href="/" className='nav_linkAcceuil'>
            {props.name}
        </a>

    )

}

export default LinkAcceuil;