import React from 'react'
import Logo from '../assets/logoHDM.png'

const Navbar = () => {
  return (
    <div className=''>
      <div className=''>
      <img src={Logo} alt = "logo" className="w-32 h-32 pl-15 pt-5" />
      </div>

      <div>
        <ul>
          <li>About  Us</li>
          <li>Services</li>
          <li>Products</li>
          </ul>
          <button> Contact Us</button>
      </div>
      
    </div>
  )
}

export default Navbar