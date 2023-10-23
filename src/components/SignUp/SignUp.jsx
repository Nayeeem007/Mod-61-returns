import React from 'react';
import './signUp.css'

const SignUp = () => {
    return ( 
            <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form>
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
                <input className='btn-submit' type="submit" value="Login" />
            </form>
        </div> 
    );
};

export default SignUp;