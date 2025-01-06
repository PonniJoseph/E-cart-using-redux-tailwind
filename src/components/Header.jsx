import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({insideHeader}) => {
  return (
   <nav className='flex bg-violet-600 fixed w-full p-5 text-white'>
    <Link className='text-2xl font-bold' to={'/'}>
    <i class="fa-solid fa-truck-fast me-1"></i>
      E-Cart
    </Link>
    <ul className='flex-1 text-right '>
      { insideHeader &&
        <li className='list-none inline-block px-5'><input type="text" 
        style={{width:'300px'}} className='rounded p-1' 
        placeholder='Search Products Here...' /></li>
      }

        <li className='list-none inline-block px-5'><Link to={'/wishlist'}>
            <i className='fa-solid fa-heart text-red-600'></i>
            Wishlist 
            <span className='bg-black text-white rounded p-1'>0</span>
            </Link></li>

            <li className='list-none inline-block px-5'><Link to={'/cart'}>
            <i className='fa-solid fa-heart text-green-600'></i>
            Cart
            <span className='bg-black text-white rounded p-1'>0</span>
            </Link></li>
    </ul>
   </nav>
  )
}

export default Header