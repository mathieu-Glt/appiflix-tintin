import React from 'react';
import './Link.scss';


function LinkTintin(props) {

    return (
        <a href="/" className='nav_linkTintin'>
            {props.name}
        </a>

    )

}

export default LinkTintin;