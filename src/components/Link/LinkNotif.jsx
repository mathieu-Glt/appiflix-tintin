import React from 'react';
import './Link.scss';
import NotificationsIcon from "@material-ui/icons/Notifications";



function LinkNotif() {

    return (
        <a href="/" className='nav_action_notif'>
            <NotificationsIcon />
        </a>

    )

}

export default LinkNotif;