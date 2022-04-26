import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../assets/logo01.png';
import '../components/Navbar.css'


const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)



  return (
    <div className='header'>
     <div className='logo'>
        <Link to='/'><img src={Logo} alt=''/></Link>
     </div>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li>
               <Link to='/'>Recipes</Link>
              </li>
              <li>
               <Link to='/About'>About</Link>
              </li>
              <li>
               <Link to='/Weeklyarticle'>Article</Link>
              </li>
           </ul>
           <div className='hamburger' onClick={handleClick}>
           {click ? (<FaTimes size={20} style={{color:'#fff'}}/>) : (<FaBars size={20} style={{color:'#fff'}}/>)}

           </div>
  </div>
  )
}

export default Navbar;
