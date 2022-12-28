import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export const sideBarData = [
    {
        title: 'Home',
        icon:<HomeIcon/>,
        link:'/home'
    },
    {
        title: 'Dash-board',
        icon:<DashboardIcon/>,
        link:'/dashboard'
    },
    {
        title: 'Account',
        icon:<AccountCircleIcon/>,
        link:'/account'
    },
    {
        title: 'Contact',
        icon:<ContactMailIcon/>,
        link:'/conatact'
    },
    {
        title: 'Log out',
        icon:<MeetingRoomIcon/>,
        link:'/logout'
    }
]