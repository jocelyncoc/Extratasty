import React from 'react';
import '../components/Dietstyle.css';
import {Link, useParams} from 'react-router-dom';
import {FaLeaf, FaFish} from 'react-icons/fa';
import {GiMeat,GiCorn,GiBigEgg,GiRoastChicken,GiBroccoli} from 'react-icons/gi';
import {RiPlantFill} from 'react-icons/ri';
import dietphoto01 from '../assets/dietphoto01.jpg';
import dietphoto02 from '../assets/dietphoto02.jpg';


const Diet = () => {
  return (
    <div className='diet'>

        <div className='left'>
            <h3> Special Diet Recipes </h3>
            <p> Enjoy your food without hesitant. </p>

            <div className='card-container'>
            <div className='card'>
            <Link to={'/Specialdiet/vegetarian'} className='btn'>
            <FaLeaf/> Vegetarian</Link>
            </div>
            <div className='card'>
            <Link to={'/Specialdiet/ketogenic'} className='btn'>
            <GiBigEgg/> Ketogenic</Link>
            </div>
            <div className='card'>
            <Link to={'/Specialdiet/vegan'} className='btn'>
            <RiPlantFill/> Vegan</Link>
            </div>
            <div className='card'>
            <Link to={'/Specialdiet/gluten-free'} className='btn'>
            <GiCorn/> Gluten Free</Link>
            </div>
            <div className='card'>
            <Link to={'/Specialdiet/Pescetarian'} className='btn'>
            <FaFish/> Pescetarian</Link>
            </div>
            <div className='card'>
            <Link to={'/Specialdiet/Paleo'} className='btn'>
            <GiMeat/> Paleo</Link>
            </div>
            <div className='card'>
            <Link to={'/Specialdiet/LowFODMAP'} className='btn'>
            <GiBroccoli/> LowFODMAP</Link>
            </div>
            <div className='card'>
            <Link to={'/Specialdiet/Whole30'} className='btn'>
            <GiRoastChicken/> Whole30</Link>
            </div>

          </div>

        </div>

            <div className='right'>
                <div className='img-container'>
                   <div className='img-stacktop'>
                          <img src={dietphoto02} className='img1' alt=''/>
                   </div>
                   <div className='img-stackbottom'>
                          <img src={dietphoto01} className='img1' alt=''/>
                   </div>
                </div>
            </div>
    </div>
  )
}

export default Diet;
