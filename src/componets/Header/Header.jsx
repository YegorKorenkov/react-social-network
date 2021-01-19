import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = props => {
    return (
        <header className="header">
            {/* <img src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" alt="Header"/> */}
            <div className="login">
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                
            </div>
        </header>
        
    );
};

export default Header;