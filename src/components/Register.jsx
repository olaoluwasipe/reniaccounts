import React, {useState} from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

const Register = () => {
  const [seePassword, setSeePassword] = useState(false);
  const queryParameters = new URLSearchParams(window.location.search)
  let email = null;
  if(queryParameters.get("email")){
    email = queryParameters.get("email")
  }
  const seer = (e)=>{
    e.preventDefault();
    if(seePassword === false){
      setSeePassword(true);
    }else{
      setSeePassword(false);
    }
  }
  return (
    <div className='login-section'>
      <div className='container py-40'>
        <div className="login-container">
          <div className="heading">
            <h1>Register For an Account</h1>
          </div>
          <form action="" method="post">
            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='Enter your email address here...' value={email} name="email" id="email" className='form-control' />
            </div>
            <div className="form-group mt-5">
              <label htmlFor="password">Password</label>
              <input type={seePassword ? 'text' : 'password'} placeholder='Enter your password here...' name="password" id="password" className='form-control' />
              <button className='seeBtn' onClick={seer}>{seePassword ? (<BsEyeSlashFill />) : (<BsEyeFill />)}</button>
            </div>
            
            <div className="form-group mt-7">
              <button className='btn primary' type="submit">Register</button>
            </div>
            <p>Already have an account? <a href="/login" style={{color:'#1560BD'}}>Login</a></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
