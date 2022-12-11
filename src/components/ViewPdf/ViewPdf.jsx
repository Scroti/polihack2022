import React from 'react'
import cerec from '../../assets/cererec.pdf'

const ViewPdf = () => {
  return (
    <div className='Auth-form-container'><iframe src={cerec} className="w-100 h-100"></iframe></div>
  )
}

export default ViewPdf