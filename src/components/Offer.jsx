import React, {useState} from 'react';
import software from '../assets/software.png';

const Offer = () => {
  const [email, setEmail] = useState('');
  const golink = ()=>{
    window.location.href = '/register?email='+email;
  }
  return (
    <div className='offer-section'>
      <div className="container">
        <div className="offer-text">
            <h2>
                Start Managing Your Business With Ease
            </h2>
            <div className="former mt-5 flex gap-5">
                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address...' name="email" id="email" className='form-control' />
                <button style={{backgroundColor: '#000000'}} onClick={golink} className="btn primary">Get Started — It's Free</button>
            </div>
        </div>
        <div className="offer-img">
            <div className="perspective"></div>
            <img src={software} alt="software-img" />
        </div>
      </div>
    </div>
  )
}

export default Offer
