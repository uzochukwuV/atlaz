import React from 'react'
import Navbar from '../../components/nav/nav'
import Header from '../../components/header/header'
import "./home.css"


function Home() {
  return (
    <div className='position-relative vw-100'>
        <Navbar />
        <Header />
        <main className='container-fluid'>
          <div className='d-flex justify-space-between py-5 mx-auto w-75 w-md-50'>
            <input type='search' className='input-search border-0 border-primary p-3 fs-4  border-rounded flex-fill' placeholder='Search Apartment'/>
            
          </div>
          <div className='d-flex flex-wrap gap-3 my-3 container s-btw'>
              <div className='d-flex img-container bg-dark flex-fill'></div>
              <div className='d-flex img-container bg-dark flex-fill'></div>
              <div className='d-flex img-container bg-dark flex-fill'></div>
          </div>
          <div className='d-flex flex-wrap gap-3 my-2 container s-btw'>
              <div className='d-flex img-container bg-dark flex-fill'></div>
              <div className='d-flex img-container bg-dark flex-fill'></div>
              <div className='d-flex img-container bg-dark flex-fill'></div>
          </div>
          <div className='d-flex flex-wrap s-btw w-100 my-2 container'>
              <div className='d-flex flex-fill flex-column home-cards p-4 p-md-0'>
                <img src='' alt='nothing' />
                <h2>Easy To Locate</h2>
                <p>We make Apartments easy to locate by providing you with multiple options and choices</p>
              </div>
              <div className='d-flex flex-fill flex-column home-cards p-4 p-md-0'>
                <img src='' alt='nothing' />
                <h2>Multiple Choices</h2>
                <p>We make it possble for you to choose to your taste by providing you with multiple choices</p>
              </div>
              <div className='d-flex flex-fill flex-column home-cards p-4 p-md-0'>
                <img src='' alt='nothing' />
                <h2>Low cost</h2>
                <p>We provide you with these services at a very low and affordable cost</p>
              </div>
          </div>
          
        </main>
    </div>
  )
}

export default Home;