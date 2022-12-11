import { getAuth } from 'firebase/auth';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import React from 'react'
import {useState, useEffect} from 'react';
import { useResolvedPath } from 'react-router-dom';
import { ToastContainer ,toast} from 'react-toastify'
import Card from '../Card/Card';
import { getFirestore } from 'firebase/firestore';
import { app, db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import createPdf from '../../functions/createPDF'
import AdminCard from '../AdminCard/AdminCard';
const Admin = () => {
    const [docs, setDocs] = useState([]);

    const fetchDepartments = async () => {

        await getDocs(collection(db, "documents"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setDocs(newData);

            }).catch(console.log)

    }
    useEffect(() => {
        fetchDepartments();
    }, [])


  return (
    <div className='Auth-form-container flex-col'>
        <h4 className=' -mt-20 p-5'>Documents Requested:</h4>

{docs.map((value)=>{
    return <div className='h-1/3'><AdminCard reqName={value.name} createdBy={value.createdBy}/></div>
})}
      
    </div>
  )
}

export default Admin