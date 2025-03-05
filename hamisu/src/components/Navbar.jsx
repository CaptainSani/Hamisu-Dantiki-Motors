import React from 'react'
import Logo from '../assets/images/logoHDM.png'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-10 px-2 sm:px-4 md:px-10'>
      <div className=''>
      <img src={Logo} alt = "logo" className="w-40 h-32 pl-20 pt-5" />
      </div>

      <div className='flex items-center space-x-20 pr-20'>
            <button>About Us</button>
            <button>Products</button>
            <button>Services</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"> Contact Us</button>
      </div>
      
    </div>
  )
}

export default Navbar