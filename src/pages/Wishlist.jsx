import React from 'react'
import Header from '../components/Header'


const Wishlist = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='px-5'>
        <>
        <h1 className='text-4xl font-bold text-red-600'>My Wishlish</h1>
        <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-2 shadow'>
          <img width={'100%'} height={'200px'} src="https://tse3.mm.bing.net/th?id=OIP.xk34MZB0BktPuQz3XdR97gHaHa&pid=Api&P=0&h=180" alt="" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>product name</h3>
            <div className='flex justify-evenly mt-3'>
              <button className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-400"></i></button>
              <button className='text-xl'><i class="fa-solid fa-cart-plus text-green-700"></i></button>
            </div>
          </div>
        </div>
      </div>
        </>
      </div>
    </>
  )
}

export default Wishlist