import React from 'react';
import './Link.scss';


function LinkSeries(props) {

    return (
        <a href="/" className='nav_linkSeries'>
            {props.name}
        </a>

    )

}

export default LinkSeries;