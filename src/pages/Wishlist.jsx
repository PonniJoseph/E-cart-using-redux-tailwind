import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'


const Wishlist = () => {
  const userWishlist = useSelector (state=>state.wishlistReducer)

  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='px-5'>
       {
        userWishlist?.length>0?
        <>
        <h1 className='text-4xl font-bold text-red-600'>My Wishlish</h1>
        <div className='grid grid-cols-4 gap-4'>

       {
        userWishlist?.map(product=>(
          <div className='rounded border p-2 shadow'>
          <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>{product?.title}</h3>
            <div className='flex justify-evenly mt-3'>
              <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-400"></i></button>
              <button className='text-xl'><i class="fa-solid fa-cart-plus text-green-700"></i></button>
            </div>
          </div>
        </div>
        ))
       }
      </div>
        </>
        :
        <div className='flex justify-center items-center'>
          <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
          <h1 className='text-3xl text-red-700'>Your wishlist is empty</h1>
        </div>
       }
      </div>
    </>
  )
}

export default Wishlist