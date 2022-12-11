import React, { useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Navbar.css'
import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import avatar from '../../assets/avatar.png'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { app, db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Navbar = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const handleLogout = () => {
        auth.signOut();
        localStorage.removeItem('loggedemail');
        navigate('/');
    }
    const route = useLocation().pathname;
    const firestore = getFirestore(app);

    const [users, setUsers] = useState([]);

    const email = JSON.parse(localStorage.getItem('loggedemail'));

    const fetchPost = async () => {

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
        fetchPost();
    }, [])
    const requestSent = () => toast.succes("Request sent succesfully!");
    const form = useRef();

    const handleSendRequest = (e) => {
        e.preventDefault();
        alert('Request Sent Succesfully!');
        emailjs.sendForm('service_dqxnwvw', 'template_8kpturc',form.current,'leUhgKxCYCbJCTFAL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        navigate('/home')
    }
    return (
        <div className='' >
            <form ref={form}></form>
            <div className="container flex items-center justify-between mx-auto">

                <img src={logo} className='h-24' />
                <div >
                    {route === '/' ? <button className='rounded-full text-white'><Link to='/auth' className='text-white'>Get Started</Link></button> : null}
                    {route === '/viewpdf' ? <button onClick={handleSendRequest} className='rounded-full text-white'> Send request</button> : null}

                    {route === '/home' ? <div className='flex items-center '>
                        <p className='p-2'>{loggedInUser.username}</p>
                        <img src={avatar} className="w-10  rounded-full" onClick={() => setIsOpen(!isOpen)} />
                        {isOpen ? <div id="dropdown" className="ml-12 mt-32 z-10 w-36 absolute bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                <li>
                                    <p className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><Link to="/profile">Profile</Link></p>
                                </li>
                                <li>
                                    <p className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleLogout}>Sign Out</p>
                                </li>

                            </ul>
                        </div> : null}
                    </div>

                        : null}



                </div>

            </div>
        </div>
    )
}

export default Navbar
