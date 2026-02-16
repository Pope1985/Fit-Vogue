import React from 'react'

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">

      <div>
        <div className="w-12 h-12 m-auto mb-5 flex items-center justify-center rounded-full bg-gray-100 text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m7.5 7.5 3 3-3 3m9-6-3 3 3 3M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
            />
          </svg>
        </div>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle-free exchanges within 7 days of purchase.</p>
      </div>

      <div>
        <div className="w-12 h-12 m-auto mb-5 flex items-center justify-center rounded-full bg-gray-100 text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            />
          </svg>
        </div>
        <p className='font-semibold'>Quality Guaranteed</p>
        <p className='text-gray-400'>We ensure all products meet our high quality standards.</p>
      </div>

      <div>
        <div className="w-12 h-12 m-auto mb-5 flex items-center justify-center rounded-full bg-gray-100 text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75A4.5 4.5 0 0 1 6.75 2.25h10.5a4.5 4.5 0 0 1 4.5 4.5v6.75a4.5 4.5 0 0 1-4.5 4.5H13.5l-3.75 3.75v-3.75h-3A4.5 4.5 0 0 1 2.25 13.5V6.75Z"
            />
          </svg>
        </div>
        <p className='font-semibold'>Best customer support</p>
        <p className='text-gray-400'>We offer 24/7 customer support to assist you with any queries.</p>
      </div>

    </div>
  )
}

export default OurPolicy
