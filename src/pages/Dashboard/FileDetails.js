import React from 'react';

function FileDetails(props) {
  return (
    <>
        <div className='flex justify-center items-center h-screen'>
            <h1 className='text-3xl text-rose-600'>{props.name}</h1>
        </div>
    </>
  )
}

export default FileDetails;