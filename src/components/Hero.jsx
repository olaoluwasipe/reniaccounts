import React, {useState} from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import heroImage from '../assets/hero-image-1.png';
import heros1 from '../assets/heros/1.png';
import heros2 from '../assets/heros/2.png';
import heros3 from '../assets/heros/3.png';

const Hero = () => {
  const [email, setEmail] = useState('');
  const golink = ()=>{
    window.location.href = '/register?email='+email;
  }
  return (
    <div className='h-100vh hero-section'>
      <div className="container h-90vh">
        <div className="cont hero-text">
            <h1 >Letting You Focus On What Matters</h1>
            <p className="mt-5">
                Reni helps you manage your business effortlessly so you can focus on doing your business how you want.
            </p>
            <div className="former mt-5 flex gap-5">
                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address...' name="email" id="email" className='form-control' />
                <button onClick={golink} className="btn primary">Get Started — It's Free</button>
            </div>
            <div className="mt-5 flex gap-3 items-center">
                <IoIosCheckmarkCircle fontSize={30} color='#0d3668' />
                Sign Up in 2 minutes
            </div>
        </div>
        <div className="cont">
            <div className="absolute flex justify-end">
                <img src={heros3} alt="stat" className="heros2 animated animatedFadeInUp fadeInUp" />
                <img src={heros2} alt="stat" className="heros3 animated animatedFadeInUp fadeInUp" />
                <img src={heroImage} alt="hero" className='hero-image' />
                <img src={heros1} alt="stat" className="heros1 animated animatedFadeInUp fadeInUp" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
