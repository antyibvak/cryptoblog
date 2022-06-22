import React from 'react'

const Intro = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div>
        <h1 className="text-center mb-8 text-3xl font-semibold">
          Welcome to the CryptoWise Blog
        </h1>
        <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  )
}

export default Intro