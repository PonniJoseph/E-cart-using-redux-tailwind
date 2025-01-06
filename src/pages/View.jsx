import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2 items-center h-screen'>
        <img width={'450px'} height={'200px'} src="https://tse3.mm.bing.net/th?id=OIP.xk34MZB0BktPuQz3XdR97gHaHa&pid=Api&P=0&h=180" alt="" />
        <div>
          <h5 className='font-bold'>PID : Id</h5>
          <h3 className='text-5xl font-bold'>Product Name</h3>
          <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
          <h4>Brand : brand</h4>
          <h4>Category : category</h4>
          <p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt excepturi reprehenderit dolore magni nam? Sunt, dolores maxime optio doloremque ipsam dolor voluptatibus quasi iusto quisquam, ullam mollitia alias, ad a!
              Voluptatem ducimus ex laborum, sunt beatae ipsum debitis blanditiis ipsa cumque illum modi. Harum, natus. Sunt amet voluptatibus repellat veniam exercitationem enim tempore soluta maiores, ullam atque minus esse. Vel?
            </span>
            <div className='flex justify-between mt-5'>
              <button className='bg-blue-600 text-white p-2'>Add to Wistlist</button>
              <button className='bg-green-600 text-white p-2'>Add to Cart</button>
            </div>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default View