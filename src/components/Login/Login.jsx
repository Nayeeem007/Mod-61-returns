import React, { useContext, useState } from 'react';
import './login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../Providers/authProviders';

const Login = () => {
    const [show,setShow] =useState(false)
    const {signIn} = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location);
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace : true} )
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' placeholder='Please Enter Your Email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type={show ? "text" : "password" } name='password' placeholder='Please Enter Your Password' required/>
                    <p onClick={() => {
                        setShow(!show)
                    }} ><small >
                        {
                            show ? <span>Hide Password</span> : <span>Show Password</span>
                        }
                        </small></p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to ema-john ?<Link to='/signup'> Create New Account </Link></small></p>
        </div>
    );
};

export default Login;