import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav'>
            <ul className='nav_wrappper'>
                <li className="nav_item">
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/dialogs">Messages</NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/news">News</NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/music">Music</NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/users">Users</NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/settings">Settings</NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;