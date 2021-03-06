import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import tinderimg from "./Tinder-Emblem.png";

function Header() {
    return (
        <div className="header">

            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>

            <img
                className="header__logo"
                src={tinderimg}
                alt=""
            />

            <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
                       
        </div>
    );
}

export default Header;
