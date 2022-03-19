import React from 'react';
import './Link.scss';
import avatarConnected from '../../assets/images/avatarConnecte.png';



function LinkAvatarIcon() {

    return (
        <a href="/" className='nav_action_notif'>
            <img src={avatarConnected} className='favicon' width="50px"alt='netflix' />
        </a>

    )

}

export default LinkAvatarIcon;