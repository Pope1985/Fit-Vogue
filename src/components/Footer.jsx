import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src="assets.logo" className='mb-5 w-32' alt="" />
            <p className="w-full md:w-2/3 text-gray-600">
                We are a leading e-commerce platform dedicated to providing our customers with the best shopping experience. Our mission is to offer a wide range of high-quality products at competitive prices, while ensuring exceptional customer service and fast delivery.
            </p>
        </div>

        <div>
            <p className='font-medium text-xl mb-5'>COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+5-913-224-9359</li>
            <li>contact@company.com</li>
          </ul>
        </div>

      </div>
      <div>
        <hr />
        <p className="text-center text-gray-500 py-5 text-sm">© 2026 FitVouge.com All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
