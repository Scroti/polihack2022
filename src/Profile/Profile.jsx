import React from 'react'
import { useState,useEffect } from 'react';
import { getFirestore } from 'firebase/firestore';
import { app, db } from '../firebase'
import { getDocs, collection } from 'firebase/firestore';
const Profile = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [username,setUsername] = useState('')
    const [profilePhoto,setProfilePhoto] = useState("");
    const [users,setUsers]= useState([]);
    const email = JSON.parse(localStorage.getItem('loggedemail'))
    const fetchProfile = async () => {

        await getDocs(collection(db, "users"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setUsers(newData);
                

            }).catch(console.log)

    }

    const loggedInUser = users.find(c => c.email === email
    ) || {};
    
    
    useEffect(() => {
        fetchProfile();
        
    }, [])
    

  
    return (
    <div className='bg-dashboard container-home'>
<form className="Auth-form">

<div className="Auth-form-content">
  <h3 className="Auth-form-title"> Update your Profile</h3>
  <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter email"
              value={loggedInUser.email}
              onChange={(e) => setLoginEmail(e.target.value)}
            />

          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="email"
              className="form-control mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter username"
              value={loggedInUser.username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Profile Photo</label>
            <input
              type="email"
              className="form-control mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Upload a link to your photo"
              value={loggedInUser.profilePhoto}
              onChange={(e) => setProfilePhoto(e.target.value)}
            />
            
          </div>
  </div>
  </form>

    </div>
  )
}

export default Profile