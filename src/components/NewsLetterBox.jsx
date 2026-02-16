import React from 'react'

const NewsLetterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off your first order</p>
      <p className='text-gray-400 mt-3'>Subscribe to our newsletter to receive updates and special offers.</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 mx-auto my-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 border border-gray-300 rounded-full overflow-hidden'>
        <input
          className="w-full flex-1 outline-none px-4 py-3 text-sm"
          type="email"
          placeholder='Enter your email'
          required
        />
        <button
          type='submit'
          className='bg-black text-white text-sm px-6 py-3 sm:rounded-none rounded-full'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetterBox
