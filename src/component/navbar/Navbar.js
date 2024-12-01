import React from 'react';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <Link to='/' className='nav-title'>Movies</Link>
            <div className='nav-links'>
                <Link to='/' className='nav-link'>Watch List</Link>
                <Link to='/watched' className='nav-link'>Watched</Link>
                <NavLink to='/add'>  <button className='btn-add' >Add</button></NavLink>
            </div>
        </nav>
    );
}

export default Navbar;