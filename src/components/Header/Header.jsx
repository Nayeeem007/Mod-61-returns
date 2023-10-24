import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { authContext } from '../Providers/authProviders';

const Header = () => {
    const handleLogOut = () => {
        logOut()
        .then(result => { })
        .catch(error => {
            console.log(error);
        })
    }
    const {user,logOut} = useContext(authContext) ;
    console.log(user);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && <span className='text-white'>
                        Welcome {user.email} <button onClick = {handleLogOut}>Sign Out</button>
                    </span>
                }
            </div>
        </nav>
    );
};

export default Header;