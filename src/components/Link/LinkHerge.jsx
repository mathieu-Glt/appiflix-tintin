import React from 'react';
import './Link.scss';


function LinkHerge(props) {

    return (
        <a href="/" className='nav_linkHerge'>
            {props.name}
        </a>

    )

}

export default LinkHerge;