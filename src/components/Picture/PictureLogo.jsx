import React from 'react';
import './PictureLogo.scss';
import pictureLogo from '../../assets/images/Tintin.jpg';

function PictureLogo() {

    return (
        
        <img src={pictureLogo} className='logoPicture' alt='netflix' />

    )

}

export default PictureLogo;