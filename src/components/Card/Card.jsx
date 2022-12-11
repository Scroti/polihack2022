import React from 'react'
import Modal from 'react-modal';

const Card = ({ depName, depDescription,requests }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius:'25px',
      border:'none',
      //bg-white rounded-lg shadow dark:bg-gray-700
      
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (

    <div className=" w-64 h-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{depName}</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{depDescription}</p>
      <a  onClick={openModal} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Acess the requests
        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        overlayClassName="Overlay"
    
        className="bg-white rounded-lg shadow-2xl p-4 dark:bg-gray-700 absolute top-[50%] w-[60%] left-[50%] modal-style"
      >
        <div className='flex flex-row justify-between items-center'>
        <h2 className='text-black'>The requests available for your department are:</h2>
        </div>
        {requests.map((x)=>{
          return <div className='py-3 flex cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {x}</div>
        })}
                <button className="float-right h-10 items-center flex bg-blue-500 text-white right-0" onClick={closeModal}>Close

</button>


        
      </Modal>
    </div>

  )
}

export default Card