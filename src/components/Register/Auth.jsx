import React from 'react'
import { useState, useEffect } from 'react';
import { Navigate, Route, useNavigate, useRoutes } from 'react-router-dom';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logo.png'
import {EyeIcon} from "@heroicons/react/24/solid"
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
const Auth = (props) => {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [error, setError] = useState('');
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMode, setLoginMode] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("")
  const [username, setUsername] = useState("");
  const userNotExisting = () => toast.warning("Userul nu exista in baza de date!");
  const passwordNotMatch = () => toast.error("Passwords not match");
  const handleMode = () => {
    setLoginMode(!loginMode);
  }
  
  const [viewPassword,setViewPassword] = useState(false);

  const registerWithEmailAndPassword = async (username, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log(user);

      await addDoc(collection(db, "users"), {
        uid: user.uid,
        username,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const handleSignIn = () => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword).then(data => {
      localStorage.setItem('loggedemail',JSON.stringify(loginEmail));

      console.log(loginEmail === 'admin@pappery.com')
      if(loginEmail === 'admin@pappery.com'){
        navigate('/admin')
      }
      else{navigate('/home');}

    }).catch(error => {
      userNotExisting();

    })

  }
  const handleSignUp = (username, email, password) => {
    event.preventDefault();
    registerWithEmailAndPassword(username, email, password)
    setLoginMode(true);

  }
  
const togglePassword =()=>{
  setViewPassword(!viewPassword);
}

  const validatePassword = () => {
    let isValid = true;
    if (loginPassword !== '' && confirmPassword !== '') {
      if (loginPassword !== confirmPassword) {
        isValid = false
      }
    }
    return isValid
  }
  



  return (

    <div className="Auth-form-container -mt-20">
      <ToastContainer />
      <form className="Auth-form">

        <div className="Auth-form-content">
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
          {!loginMode ? <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div> : null}
          <div className="form-group mt-3">
            <label>Password</label>
            <div className='flex items-center'>
      
            <input
              type={viewPassword?"text":"password"}
              className="form-control mt-1"
              placeholder="Enter password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <p className="absolute m-[280px]" onClick={togglePassword}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</p>
    </div>
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
          <div className="d-grid gap-2 mt-3 bg-blue-600 rounded text-white disabled:bg-blue-900">

            <button type="submit"
              onClick={loginMode ? handleSignIn : () => handleSignUp(username, loginEmail, loginPassword)}>
              Submit
            </button>
          </div>
          <div className='flex justify-between mt-8'>{loginMode ? <p className="forgot-password text-right cursor-pointer" >
            Forgot password?
          </p> : null}

            <p className="cursor-pointer" onClick={handleMode}>{!loginMode ? 'Already have an account?' : 'Register new account'}</p>

          </div>
        </div>
      </form>
    </div>
  )
}


export default Auth;