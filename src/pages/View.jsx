import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'


const View = () => {

// view 
  const [product,setProduct]=useState({})
  const {id} =useParams();
const dispatch = useDispatch()
const userWishlist = useSelector(state=>state.wishlistReducer)
  console.log(id);
  console.log(product);
  
 

  useEffect (()=>{
    if(sessionStorage.getItem("allProducts")){
       const allProducts = JSON.parse(sessionStorage.getItem("allProducts"));
      const selectedProduct= allProducts.find((item)=>item.id==id);
      setProduct(selectedProduct);
      
    }
   
  },[id]);


  const handleWishlist = () =>{
    const existingProduct = userWishlist?.find(item=>item?.id==id)
    if(existingProduct){
      alert("Product already in your wishlist!!!")
    }else{
      dispatch(addToWishlist(product))
    }
  }
  
  
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2 items-center h-screen'>
        <div>
        <img width={'450px'} height={'200px'} src={product?.thumbnail} alt="" />
        <div className='flex justify-between mt-5'>
              <button onClick={handleWishlist} className='bg-blue-600 text-white p-2'>Add to Wistlist</button>
              <button className='bg-green-600 text-white p-2'>Add to Cart</button>
            </div>
        </div>
        <div>
          <h5 className='font-bold'>PID : {product?.id}</h5>
          <h3 className='text-5xl font-bold'>{product?.title}</h3>
          <h4 className='font-bold text-red-600 text-2xl'>${product?.price}</h4>
          <h4>Brand : {product?. brand}</h4>
          <h4>Category : {product?.category}</h4>
          <p>
            <span className='font-bold'>
             Description
            </span>
            :{product?.description}
           
          </p>
          <h3 className='font-bold'>Client Reviews</h3>
            {
            product?.reviews?.length > 0 ?(
                product?.reviews.map((item)=>(
                <div key={item?.date} className='shadow-border p-2 mb-2'>
                  <h5>
                    <span className='font-bold'>{item?.reviewerName}</span>:<span>{item?.comment}</span>
                  </h5>
                  <p>Rating: {item?.rating}<i className='fa-solid fa-star text-yellow-400'></i></p>
                  </div>
                ))
               ) :(
              <div>No Reviews Yet!!!</div>
            ) }
        </div>
      </div>
    </div>
    </>
  );
}

export default View