import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {
const dispatch = useDispatch()


 const {allProducts,loading,errorMsg} = useSelector(state=>state.productReducer)
  console.log(allProducts,loading,errorMsg);
  


      useEffect (()=>{
        dispatch(fetchProducts())
      },[])


  return (
    <>
    {/* import the header */}
    {/* give insideheader is ture it mean the search bar only present in home page */}
    <Header insideHeader={true}/>    
             {/* home body section */}
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
      {
        loading ?
        <div className='flex justify-center items-center my-5 text-lg'>
         <img width={'70px'}height={'70px'} src="https://c.tenor.com/0iK9a1WkT40AAAAM/loading-white.gif" alt="" />
        </div>
        :
       <>
        <div className='grid grid-cols-4 gap-4'>
          {
            allProducts?.length>0?
            allProducts?.map(product=>(
              <div key={product?.id} className='rounded border p-2 shadow'>
              <img width={'100%'} height={'100%'} src={product?.thumbnail} alt="" />
              <div className='text-center'>
                <h3 className='text-xl font-bold'>{product?.tittle}</h3>
                <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'> 
                View More...
                </Link>
    
              </div>
            </div>
            ))
       
        :
        <div className='flex justify-center items-center font-bold my-5 text-lg text-red-600'>
          Product is not found
        </div>
  }
      </div>
       </>
      }

    </div>
    </>
    
  )
}

export default Home