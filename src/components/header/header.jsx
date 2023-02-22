import React from 'react'
import "./header.css"



function Header() {
  return (
    <div>
        <header className='container-fluid position-relative d-flex home-hero bg-image'>
        <div class="mask" style={{backgroundColor: "hsla(0, 0%, 0%, 0.6)"}}></div>
            <div className='d-flex text-center flex-column gap-3 justify-content-center' style={{zIndex:"1001"}}>
                <div>
                    <h1 className='text-white mb-3 fw-1 fs-2'>Atlas Apartment Services</h1>
                    <p className='text-white mb-3'>We help you find a suitable and condusive place to stay</p>
                </div>
                <div className='d-flex gap-3 justify-content-center'>
                    <span className='d-flex gap-3 justify-content-center'>
                    <button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Get Started</button>
<button type="button" class="btn btn-dark">Get Started</button>
                    </span>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header