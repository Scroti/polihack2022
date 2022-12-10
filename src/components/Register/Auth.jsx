import React from 'react'
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword,getAuth} from 'firebase/auth';
import { app } from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logo.png'
const Auth = (props) => {

  const auth = getAuth(app);
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMode,setLoginMode]= useState(true);
  const [confirmPassword, setConfirmPassword] = useState("")
  const userNotExisting = () => toast.warning("Userul nu exista in baza de date!");

  const handleMode = () =>{
    setLoginMode(!loginMode);
  }
  

  const handleAuthentication = () =>{
    event.preventDefault();
    
    signInWithEmailAndPassword(auth,loginEmail, loginPassword).then(data=>{
      localStorage.setItem('loggedemail',JSON.stringify(loginEmail))
      navigate('/home');

    }).catch(error=>{
      userNotExisting();
      
    })

  
  }
  
  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    console.log(isValid)
    return isValid
  }
  


  return (
    
    <div className="Auth-form-container">
      <ToastContainer />
      <form className="Auth-form">
        
        <div className="Auth-form-content">
          <img src={logo} alt="" className=' w-[100px] absolute'/>
          <h3 className="Auth-form-title">{loginMode ? 'Sign In' : 'Sign Up'}</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          {!loginMode ? 
          <div className="form-group mt-3" >
            <label>Verify Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div> : null}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" 
              onClick={handleAuthentication}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2" >
            Forgot<span>&nbsp; password?</span>
          </p>
          <p onClick={handleMode}>{!loginMode ? 'Already have an account?' : 'Register new account'}</p>
        </div>
      </form>
    </div>
  )
}


export default Auth;