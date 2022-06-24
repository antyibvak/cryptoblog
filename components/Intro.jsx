import React from 'react'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div>
        <div className='flex items-center justify-center'>
          <Image
            src="/../public/tvax.png" 
            alt='my photo'
            height='90px'
            width='90px'
            className='align-middle items-center rounded-full'
          />
        </div>
        <h1 className="text-center mb-8 text-3xl font-semibold">
          ANTYIBVAK IBRAHIM
        </h1>
        <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
          I am a blockchain developer and a big believer in blockchain technology and its potential to reshape technology. 
          I hope this blog helps laypeople have some understanding of why I hold that belief.
        </p>
      </div>
    </div>
  )
}

export default Intro