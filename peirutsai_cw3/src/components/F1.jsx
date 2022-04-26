import React from 'react';
import '../components/F1style.css';
import {FaSearch} from 'react-icons/fa';
import {GiBroccoli,GiMeat,GiBigEgg,GiDoubleFish} from 'react-icons/gi';
import {RiFridgeFill} from 'react-icons/ri';
import Search from '../components/Search.jsx';


const F1 = () => {
  return (
    <div className='f1'>
      <div className='f1container'>
      <div className='f1right'>

      <FaSearch size={90}/><br/><br/>
      <RiFridgeFill size={35}/> <GiBroccoli size={35}/> <GiMeat size={35}/> <GiBigEgg size={35}/> <GiDoubleFish size={35}/> <RiFridgeFill size={35}/>


      </div>

      <div className='f1left'>
        <h2>Throw in your ingredients.</h2>
        <p>Recipes are offered by Spoonacular with 5000+ recipes to choose. Type in your leftovers at our magic searchbar, see what the result recommand you to make today. </p>
        <p>Extratasty is also special-diet friendly, providing 8 different diet types and a seires of extotic recipes for you to explore.</p>
      </div>

      </div>
    </div>
  )
}

export default F1;
