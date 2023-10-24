import React, { useContext, useState } from 'react';
import './signUp.css'
import { Link } from 'react-router-dom';
import { authContext } from '../Providers/authProviders';

const SignUp = () => {

    const [error,setError] = useState('');
    const {createUser} = useContext(authContext);

    const handleSignUp = () => {
         event.preventDefault();
         const form = event.target;
         const email = form.email.value;
         const password = form.password.value;
         const confirm = form.confirm.value;
         console.log(email,password,confirm);
         form.reset();
         setError('');

         if(password !== confirm) {
             setError("Your Password didn't match")
             return
         }
         else if(password.length < 6 ) {
            setError('Password must be 6 characters or longer ')
            return
         }
         createUser(email,password)
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
         })
         .catch(error => {
            console.log(error);
            setError(error.message)
         })
    }

    return ( 
            <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' placeholder='Please Enter Your Email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' placeholder='Please Enter Your Password' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name='confirm' placeholder='Please Confirm Your Password' required/>
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p className='text-error'>{error}</p>
            <p><small>Already have an account ? <Link to='/login'>Login</Link></small></p>
        </div> 
    );
};

export default SignUp;