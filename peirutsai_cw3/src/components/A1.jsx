import React from 'react';
import '../components/A1style.css'
import Logo from '../assets/logo01.png';
import {GiBroccoli,GiMeat,GiBigEgg,GiDoubleFish} from 'react-icons/gi';


const A1 = () => {
  return (
    <div className='a1'>
      <div className='acontainer'>
      <div className='a1right'>
        <img className='a1img' src={Logo} alt= " " />
      </div>

      <div className='a1left'>
        <h2>Clear your fridge.<br/> Make something amazing with what you have in your kitchen.</h2>

        <p>Extratasty is a foodie lifestyle website that seeks to find great recipes using leftover foods from your refrigerator.</p>
        <p>According to the survey result from Ohio State University in 2019, Americans only consume 50% of meat and 44% of vegetables purchased and stored in their refrigerators. Extratasty would like to provide recipes that matches the most to your fridge leftovers, in order to avoid food waste, making the process of dealing with leftovers in your fridge a more pleasurable and exciting experience.</p>
      </div>


      </div>
    </div>
  )
}

export default A1;
