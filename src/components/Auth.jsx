import React, {useState}from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'

import signinImage from '../assets/signup.jpg'

const intialState={
    fullName:'',
    userName:'',
    password:'',
    confirmPassword:'',
    avatarURL:'',
}

const Auth = () => {
    const[form,setForm]=useState(intialState);
    const [isSignup,setIsSignUp] =useState(true);

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(form)
    }

    const switchMode=()=>{
        setIsSignUp((prevIsSignUp)=>!prevIsSignUp)
    }

  return (
    <div className='auth__form-container'>
        <div className='auth__form-container_fields'>
            <div className='auth__form-container_fields-content'>
                <p>{isSignup? 'Sign Up' : 'Sign In' }</p>
                <form onSubmit={handleSubmit}>
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor="fullName">Full Name</label>
                            <input name='fullName' type="text" placeholder='Full Name' onChange={handleChange} required />
                        </div>
                    )}
                        <div className='auth__form-container_fields-content_input'>
                         <label htmlFor="userName">Username</label>
                         <input name='useName' type="text" placeholder='Username' onChange={handleChange} required />
                     </div>
                     {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input name='phoneNumber' type="text" placeholder='Phone Number' onChange={handleChange} required />
                        </div>
                    )}
                     {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor="avatarURl">Avatar</label>
                            <input name='avatarURL' type="text" placeholder='Aavatar URL' onChange={handleChange} required />
                        </div>
                    )}
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor="password">Passwrod</label>
                            <input name='password' type="password" placeholder='Password' onChange={handleChange} required />
                        </div>
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input name='confirmPassword' type="password" placeholder='Confirm Password' onChange={handleChange} required />
                        </div>
                    )}

                    <div className='auth__form-conatiner_fields-content_button'>
                        <button>{isSignup?'Sign Up':'Sign In'}</button>
                    </div>
                </form>

                <div className='auth__form-container_fields-account'>
                <p>
                            {isSignup
                             ? "Already have an account?" 
                             : "Don't have an account?"
                             }
                             <span onClick={switchMode}>
                             {isSignup ? 'Sign In' : 'Sign Up'}
                             </span>
                        </p>
                </div>
            </div>
        </div>

        <div className='auth__form-container_image'>
            <img src={signinImage} alt="Sign In" />
        </div>
    </div>
  )
}

export default Auth