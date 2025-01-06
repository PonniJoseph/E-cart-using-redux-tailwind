import React from 'react'
import { Link } from 'react-router-dom'

const Foooters = () => {
  return (
    <div style={{height:'250px ' , marginTop:'100px'}} className='w-full bg-violet-600 mt-5 text-white'>
        <div  className='flex justify-between p-4 '>
          {/* intro */}
          <div style={{width:'400px'}} className='intro'>
            <h5 className='text-xl font-bold '><i className='fa-solid fa-truck-fast me-2'></i> E-Cart</h5>
            <p>Designed and built with all the love in the world
               by the Bootstrap team with the help of our contributors.</p>
            <p> Code licensed MIT, docs CC BY 3.0.</p>
           <p>Currently v5.3.3.</p>
          </div >
          {/* Links */}
          <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Links</h5>
            <Link to={'/'}>Home</Link>
            <Link to={'/Cart'}>Cart</Link>
            <Link to={'/wishlist'}>wishlist</Link>
          </div>
          {/* Guides */}
         <div className='flex flex-col'>
         <h5 className='text-xl font-bold'> Guides</h5>
         <Link to={'https://react.dev/'}>React</Link>
            <Link to={'https://react-bootstrap.github.io/'}>React Bootstarp</Link>
            <Link to={'https://reactrouter.com/'}>React Routes</Link>
         
         </div>
          {/* Contacts */}
          
          <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Contacts</h5>
          <div className='flex'>
          <input type='text' placeholder='enter your email here' className='form-control me-2'/>
          <button className='btnms-2'><i className='fa-solid fa-arrow-right'></i></button>
          </div>
          <div className='flex justify-between mt-2 '>
          <Link to={'https://x.com'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-twitter"></i></Link>
          <Link to={'https://www.instagram.com'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></Link>
          <Link to={'https://www.linkedin.com/home?originalSubdomain=in'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></Link>
          <Link to={'https://github.com'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-github"></i></Link>
          <Link to={'https://www.facebook.com'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></Link>
          <Link to={'https://www.truecaller.com'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-solid fa-phone"></i></Link>
          </div>
         </div>

</div>
    </div>
  )
}

export default Foooters
          