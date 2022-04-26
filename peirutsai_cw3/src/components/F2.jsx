import React from 'react';
import '../components/F2style.css';
import {FaSearch} from 'react-icons/fa';
import {AiFillFire} from 'react-icons/ai';
import Search from '../components/Search.jsx';
import Banner07 from '../assets/Banner07.jpg';
import Banner08 from '../assets/Banner08.jpg';



const F2 = () => {
  return (
    <div className='f2'>
      <div className='f2container'>
      <div className='f2left'>
        <h2>Follow the steps.</h2>
        <p>It's cooking time!</p>
        <p>Measure the exact amount of each ingredients, follow the recipes' straightforward steps, and share your results with us!</p>
        <br/>
        <div className='f2icon'>
        <AiFillFire size={35}/> <AiFillFire size={35}/> <AiFillFire size={35}/> <AiFillFire size={35}/> <AiFillFire size={35}/> <AiFillFire size={35}/>
        </div>
      </div>

      <div className='f2right'>
      <div className='img-container'>
         <div className='img-stacktop'>
                <img src={Banner07} className='img1' alt=''/>

         </div>
         <div className='img-stackbottom'>
                <img src={Banner08} className='img1' alt=''/>

         </div>
         </div>

      </div>

      </div>
    </div>
  )
}

export default F2;
