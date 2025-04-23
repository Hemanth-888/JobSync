import React from 'react'
import './forgot.css';
import { Link } from 'react-router-dom';

export default function Forgot() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
<div className="form-container">
      <div className="logo-container">
        Forgot Password
      </div>

      <form className="form">
        <div className="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Enter your email" required=""/>
        </div>

        <button className="form-submit-btn" type="submit">Send Email</button>
      </form>

      <p className="signup-link">
        Don't have an account?
        <a className="signup-link link"> <Link to='/register'>Sign up</Link></a>now
      </p>
    </div>
    </div>
  )
}

