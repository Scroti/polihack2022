import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';

const DaysOff = () => {
    const [numeprenume, setNumePrenume] = useState("");
    const [society,setSociety] = useState('')
    const [job,setJob] = useState("");
    const [days,setDays] = useState("");
    const [year,setYear] = useState("");
    const [period,setPeriod] = useState("");
    const [today, setToday] = useState("");
    const [signature,setSignature]=useState("")
    const navigate = useNavigate();

    const handleSubmit = () =>{
        event.preventDefault();
    navigate('/viewpdf')
   }
  return (
    <div className='bg-dashboard container-home'>
<form className="Auth-form">

<div className="Auth-form-content">
  <h3 className="Auth-form-title"> Days Off Request</h3>
  <div className="form-group mt-3">
            <label>Your Name</label>
            <input
              type="text"
              className="form-control mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your name"
              value={numeprenume}
              onChange={(e) => setNumePrenume(e.target.value)}
            />

          </div>
          <div className="form-group mt-3">
            <label>Society</label>
            <input
              type="text"
              className="form-control mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter society name"
              value={society}
              onChange={(e) => setSociety(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Your Job</label>
            <input
              type="text"
              className="form-control mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your job name"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
            
          </div>
          <div className="form-group mt-3">
            <label> Days needed</label>
            <input
              type="text"
              className="form-control mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write the number of days needed"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
            
          </div>
          <div className="form-group mt-3">
            <label> Year</label>
            <input
              type="text"
              className="form-control mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write the year of days off"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            
          </div>
          <div className="form-group mt-3">
            <label> Period</label>
            <input
              type="text"
              className="form-control mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write the period of days needed"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            />
            
          </div>
          <div className="form-group mt-3">
            <label> Date of completition</label>
            <input
              type="text"
              className="form-control mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write the day that you complete the request"
              value={today}
              onChange={(e) => setToday(e.target.value)}
            />
            
          </div>
          <div className="form-group mt-3">
            <label> Signature</label>
            <input
              type="file"
              className="form-control mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Put here the signature"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
            />
            
          </div>
          <button type="submit"
              onClick={handleSubmit}>
              Submit
            </button>
  </div>
  </form>

    </div>

  )
}

export default DaysOff