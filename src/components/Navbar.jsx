import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';
import logo from '../assets/reni-logo.png';

const Navbar = () => {
    const navigate = useNavigate();

    const [colorChange, setColorChange] = useState(false);
    const changeNavbarColor = () => {
        if(window.scrollY >= 100){
            setColorChange(true);
        }else{
            setColorChange(false);
        };
    };
    window.addEventListener('scroll', changeNavbarColor)

    return (
        <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
            <div className="nav-in">
                <a href="/" className="logo-box">
                    <img className='reniLogo' src={logo} alt="reni-logo" />
                </a>
                <ul className='navigation'>
                    <li><Link to={`#`}>About</Link></li>
                    <li><Link to={`#`}>Products</Link></li>
                    <li><Link to={`#`}>FaQs</Link></li>
                </ul>
                <div className="buttons flex gap-5 justify-end">
                    <a href="/login" className='btn secondary'>Log In</a>
                    <a href="" className="btn primary">Get Started — It's Free</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;