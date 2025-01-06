import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
      <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-2 shadow'>
          <img width={'100%'} height={'200px'} src="https://tse3.mm.bing.net/th?id=OIP.xk34MZB0BktPuQz3XdR97gHaHa&pid=Api&P=0&h=180" alt="" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>product name</h3>
            <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'> 
            View More...
            </Link>

          </div>


        </div>

      </div>

    </div>
    </>
    
  )
}

export default Home