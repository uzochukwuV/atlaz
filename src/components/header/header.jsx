import React from 'react'
import "./header.css"



function Header() {
  return (
    <div>
        <header className='container-fluid position-relative d-flex home-hero'>
            <div className='d-flex text-center flex-column gap-3 justify-content-center'>
                <div>
                    <h1>Atlas Apartment Services</h1>
                    <p>We help you find a suitable and condusive place to stay</p>
                </div>
                <div className='d-flex gap-3 justify-content-center'>
                    <span className='d-flex gap-3 justify-content-center'>
                    <button type='submit' className=' btn-3 p-3'>Sign up for Free</button>
                    <button type='submit' className=' btn bg-transparent p-3 border border-white' style={{borderRadius: "100px"}}>Contact Sales</button>
                    </span>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header