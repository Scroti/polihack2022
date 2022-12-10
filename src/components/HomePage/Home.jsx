import { getAuth } from 'firebase/auth';
import React from 'react'
import { ToastContainer ,toast} from 'react-toastify'
const Home = () => {
    const email = JSON.parse(localStorage.getItem('loggedemail'));
    const handleLogout = () =>{
        auth.signOut().then(localStorage.removeItem('loggedemail'));
    }
    const auth = getAuth();
    const loggedInSuccesfully = () => toast.success(`Bine ai venit pe platforma Paperry ${JSON.parse(localStorage.getItem('email'))}`);
loggedInSuccesfully()
  return (
    <div>
        <ToastContainer />
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home