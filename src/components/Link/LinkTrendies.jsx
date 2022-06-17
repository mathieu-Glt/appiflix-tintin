import React from 'react';
import './Link.scss';


function LinkTrendies(props) {

    return (
        <a href="/" className='nav_linkTrendies'>
            {props.name}
        </a>

    )

}

export default LinkTrendies;