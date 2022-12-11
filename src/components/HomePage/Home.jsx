import { getAuth } from 'firebase/auth';

import React from 'react'
import {useState, useEffect} from 'react';
import { useResolvedPath } from 'react-router-dom';
import { ToastContainer ,toast} from 'react-toastify'
import Card from '../Card/Card';
import { getFirestore } from 'firebase/firestore';
import { app, db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';

const Home = () => {
    const [departments, setDepartments] = useState([]);

    const fetchDepartments = async () => {

        await getDocs(collection(db, "departments"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setDepartments(newData);

            }).catch(console.log)

    }
    useEffect(() => {
        fetchDepartments();
    }, [])
  return (
    <div className='container-home bg-dashboard'>
        <h4 className=' -mt-20 p-5'>Select the department for what you want to create the request:</h4>
    <div className=" gap-4 grid grid-cols-3 mx-auto">
    

{departments.map((value)=>{
    return <div className='h-1/3'><Card depName={value.depName} depDescription={value.depDescription} requests={value.requests}></Card></div>
})}
        

        </div>
    </div>
  )
}

export default Home