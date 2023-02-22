import React from 'react'

function Footer() {
  return (
    <div>
        
<footer className="bg-dark text-center text-white">
  
  <div className="container p-4">
    
    <section className="mb-4">
      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-instagram"></i></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"></i></a>
    </section>
    

    
    <section className="">
      <form action="">
        
        <div className="row d-flex justify-content-center">
          
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          

          
          <div className="col-md-5 col-12">
            
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              <label className="form-label" for="form5Example21">Email address</label>
            </div>
          </div>
          

         
          <div className="col-auto">
            
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
         
        </div>
        
      </form>
    </section>
    

    
    <section className="mb-4">
      <p>
        we thrive to give you the best deals in town at cheap rates
      </p>
    </section>
   

    
    <section className="">
      
      <div className="row">
        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 d-flex w-100">
          

          <ul className="list-unstyled mb-0 d-flex flex-fill w-100 ">
            <li className='flex-fill'>
              <a href="#!" className="text-white ">About Us</a>
            </li>
            <li className='flex-fill'>
              <a href="#!" className="text-white ">Privacy Policy</a>
            </li>
            <li className='flex-fill'>
              <a href="#!" className="text-white ">Terms and condition</a>
            </li>
            <li className='flex-fill'>
              <a href="#!" className="text-white ">Email</a>
            </li>
          </ul>
        </div>
        

        
       
        

        
       

        
      
       
      </div>
     
    </section>
    
  </div>
  

  
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  
</footer>

    </div>
  )
}

export default Footer