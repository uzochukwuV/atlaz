import React from 'react'
import Navbar from '../../components/nav/nav'
import germany from "./../../assets/images/germany.jpg"

function Login() {
  return (
    <div className='h-100 vw-100'>
        
        <div className='position-absolute bg-dark h-25 zIndex-1'><Navbar dark={"bg-dark"} relative={"position-relative"} /></div>

        
        
           <div className='row mx-0 w-100 h-100' style={{}}>
           <div className='col bg-image d-none d-md-flex'>
                <img src={germany} class="w-100 h-100" />
              {/* <div class="mask" style={{backgroundColor: "hsla(0, 0%, 0%, 0.6)"}}></div> */}
           </div>
            <div className='col my-4 d-flex justify-content-center align-items-center'>
                <div className='border py-5 px-4 w-100 h-100 d-flex justify-content-center align-items-center' style={{maxHeight:"500px", maxWidth:"450px", borderRadius:"25px"}}>
                    <form className='d-flex flex-column gap-4 w-100 h-100 justify-content-center align-items-center '>
                    <div class="form-outline ">
                            <input type="text" id="formControlDefault" class=" border form-control" />
                            <label class="form-label" for="formControlDefault">Username</label>
                            </div>
                            <div class="form-outline ">
                            <input type="password" id="typePassword" class="border form-control" />
                            <label class="form-label" for="typePassword">Password</label>
                            </div>                 
                            <div class="form-check justify-content-start">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label fs-6 ms-0" for="flexCheckDefault">show password</label>
                            </div>
                        <div class="form-outline">
                            <input type="submit" id="typePassword" class="border bg-dark text-white form-control" />
                            
                            </div> 
                    </form>
                </div>
            </div>
           </div>
        
    </div>
  )
}

export default Login