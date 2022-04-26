import '../components/Footerstyle.css';
import Logo from '../assets/elogo.png';
import {Link} from 'react-router-dom';
import React from 'react';



const Footer = () => {
  return (
    <div className='footer'>
    <div className='logo'>
       <Link to='/'><img src={Logo} alt=''/></Link>
    </div>
    </div>
  )
}

export default Footer;
