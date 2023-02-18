import React, {useState} from 'react'
import './Auth.css'
import { Link } from 'react-router-dom'
import AboutAuth from '../../components/AboutAuth/AboutAuth'

function Auth() {
    const [isSignUp, setIsSignUp] = useState(false)

    const handleSwitch = ()=>{
        setIsSignUp(!isSignUp)
    }
  return (
    <div className='auth-main'>
        { isSignUp && <AboutAuth/> } 
        <div className='auth-main-2'>
            {!isSignUp && 
                <div className='auth-icon'>
                    <i class="fa-solid fa-house-laptop fa-2x"></i>
                    <p>Sign in to Rent</p>
                </div>
            }
            <div className='auth-form border-radius-5'>
                {
                    isSignUp && (
                        <div className='auth-welcome'>
                            <p>Welcome to Rent</p>
                        </div>
                    )
                }
                {
                    isSignUp && (
                        <div className='auth-name auth-field-heading'>
                            <p>Display Name</p>
                            <input className='border-radius-5' type='text' id='name' name='name'/>
                        </div>
                    )
                }
                <div className='auth-email auth-field-heading'>
                    <p>Email or number</p>
                    <input className='border-radius-5' type='email' name='email' id='email'/>
                </div>
                <div className='auth-password auth-field-heading'>
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                        <p style={{marginRight: '2rem'}}>Password</p>
                        {!isSignUp && <a href='www.google.com'>forgot password?</a>}
                    </div>
                    <input className='border-radius-5' type='password' name='password' id='password'/>
                </div>
                <button type='submit' className='auth-btn'>
                    <Link to='/home' style={{textDecoration: 'none', color: 'white'}}>
                        {isSignUp? "Sign up" : "Log in"}
                    </Link>
                </button>
            </div>
            <div className='auth-switch'>
                {isSignUp? "Already a user?" : "New to Rent?"}
                <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignUp? "Log in" : "Sign Up"}</button>
            </div>
        </div>
    </div>
  )
}

export default Auth;