import React from 'react';
import './Link.scss';


function LinkFavories(props) {

    return (
        <a href="/" className='nav_linkFavories'>
            {props.name}
        </a>

    )

}

export default LinkFavories;